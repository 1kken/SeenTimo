// app/api/user/finance/[userid]/route.ts
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

type Params = Promise<{userid: string}>

export async function GET(
    req: Request,
    { params }: { params: Params }
) {
    try {
        const { userid } = await params;
        const {getUser} = getKindeServerSession()

        const userFromSession = await getUser();

        if (!userFromSession || userFromSession.id !== userid) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        // Get user balance
        const user = await prisma.user.findUnique({
            where: { id: userid },
            select: { balance: true },
        })

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        // Aggregate totals
        const [sent, received] = await Promise.all([
            prisma.transaction.aggregate({
                _sum: { amount: true },
                where: { senderId: userid },
            }),
            prisma.transaction.aggregate({
                _sum: { amount: true },
                where: { receiverId: userid },
            }),
        ])


        return NextResponse.json({
            balance: user.balance,
            totalSent: sent._sum.amount ?? 0,
            totalReceived: received._sum.amount ?? 0,
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: "Failed to fetch user finance details" },
            { status: 500 }
        )
    }
}
