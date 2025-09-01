import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { unauthorized } from "next/navigation";
import { FinanceCardWrapper } from "./components/finance-card";

async function getData() {
    const { getUser } = await getKindeServerSession();

    const user = await getUser();
    if (!user) return unauthorized();
    const userid = user.id;

    // Get user balance
    const userDb = await prisma.user.findUnique({
        where: { id: userid },
        select: { balance: true },
    })
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
    return {
        balance: userDb?.balance || 0,
        totalSent: sent._sum.amount ?? 0,
        totalReceived: received._sum.amount ?? 0,
    }
}


export default async function AppPage() {
    const data = await getData();
    return (
        <div className="min-h-screen bg-background mt-16">
            <FinanceCardWrapper
                balanceProp={data.balance}
                totalSentProp={data.totalSent}
                totalReceivedProp={data.totalReceived}
            />
        </div>
    )
}