import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { BalanceCards } from "@/components/app/balance-cards";
import { TransparencyNotice } from "@/components/app/transparency-notice";
import { SendForm } from "@/components/app/send-form"
async function getData() {
    const { getUser } = await getKindeServerSession();

    const user = await getUser();
    if (!user) {
        return {
            balance: 0,
            totalSent: 0,
            totalReceived: 0,
        };
    }

    // Get user balance
    const userid = user.id;
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <BalanceCards balance={data.balance} totalSent={data.totalSent} totalReceived={data.totalReceived} />

                <SendForm />

                <TransparencyNotice />
            </div>
        </div>
    )
}