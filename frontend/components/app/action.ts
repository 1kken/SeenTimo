"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { savePaymentToBlockChain } from "@/lib/blockchain/blockhain";

export default async function sendMoney(initialState: unknown,formData: FormData) {

    console.log(formData.get("amount"));
    console.log(formData.get("receiverId"));

    const receiverId = formData.get("receiverId") as string
    const amount = Number(formData.get("amount"))

    const { getUser } = getKindeServerSession()

    //check user is authenticated and is the sender
    const userFromSession = await getUser()
    if (!userFromSession) {
        return { message: 'Unauthorized' }
        // return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    //check ammount if valid
    if (!amount || amount <= 0) {
        return { message: 'Invalid amount' }
        // return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    //check sender has sufficient balance
    const sender = await prisma.user.findUnique({ where: { id: userFromSession.id } })
    if (!sender) {
        return { message: 'Sender not found' }
        // return NextResponse.json({ error: "Sender not found" }, { status: 404 })
    }
    if (sender.balance < amount) {
        return { message: 'Insufficient balance' }
        // return NextResponse.json({ error: "Insufficient balance" }, { status: 400 })
    }

    //check receiver exists
    const receiver = await prisma.user.findUnique({ where: { id: receiverId } })
    if (!receiver) {
        return { message: 'Receiver not found' }
        // return NextResponse.json({ error: "Receiver not found" }, { status: 404 })
    }

    //save payment to blockchain
    const txnHash = await savePaymentToBlockChain(
        sender.userName,
        receiver.userName,
        amount
    )

    // Perform transaction atomically
    await prisma.$transaction(async (tx) => {
        // Deduct from sender
        const s = await tx.user.update({
            where: { id: userFromSession.id },
            data: { balance: { decrement: amount } }
        })

        // Credit receiver
        await tx.user.update({
            where: { id: receiverId },
            data: { balance: { increment: amount } }
        })

        // Create transaction record
        await tx.transaction.create({
            data: {
                senderId: userFromSession.id,
                receiverId,
                amount,
                txnHash: txnHash // Placeholder, replace with actual hash if available
            }
        })

        return s
    })

    revalidatePath('/app');
    return { message: 'Transaction successful' }
}