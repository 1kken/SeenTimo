// app/api/send-transaction/route.ts
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function POST(req: Request) {
    try {
        const { userid, receiverId, amount } = await req.json()
        const { getUser } = getKindeServerSession()

        //check user is authenticated and is the sender
        const userFromSession = await getUser()
        if (!userFromSession || userFromSession.id !== userid) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        //check ammount if valid
        if (!amount || amount <= 0) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
        }

        //check receiver exists
        const receiver = await prisma.user.findUnique({ where: { id: receiverId } })
        if (!receiver) {
            return NextResponse.json({ error: "Receiver not found" }, { status: 404 })
        }

        //check sender has sufficient balance
        const sender = await prisma.user.findUnique({ where: { id: userid } })
        if (!sender) {
            return NextResponse.json({ error: "Sender not found" }, { status: 404 })
        }
        if (sender.balance < amount) {
            return NextResponse.json({ error: "Insufficient balance" }, { status: 400 })
        }



        // Perform transaction atomically
        const updatedSender = await prisma.$transaction(async (tx) => {
            // Deduct from sender
            const s = await tx.user.update({
                where: { id: userid },
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
                    senderId: userid,
                    receiverId,
                    amount,
                    txnHash:"gibberish" // Placeholder, replace with actual hash if available
                }
            })

            return s
        })

        return NextResponse.json(updatedSender)
    } catch (error) {
        console.error("Send transaction error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
