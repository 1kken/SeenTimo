import { SystemStatsCards } from "@/components/dashboard/system-stats-cards"
import { TransactionsTable } from "@/components/dashboard/transactions-table"
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export async function getStats() {
  const [totalBudgetResult, totalTransfersResult] = await Promise.all([
    prisma.user.aggregate({
      _sum: { balance: true },
    }),
    prisma.transaction.aggregate({
      _sum: { amount: true },
    }),
  ]);

  const totalBudget = totalBudgetResult._sum.balance ?? 0;
  const totalTransfers = totalTransfersResult._sum.amount ?? 0;

  return { totalBudget, totalTransfers };
}

// app/lib/transactions.ts

export async function getLatestTransactions(limit = 100) {
  const transactions = await prisma.transaction.findMany({
    take: limit,
    orderBy: { createdAt: "desc" }, // latest first
    include: {
      sender: { select: { userName: true } },
      receiver: { select: { userName: true } },
    },
  });

  // Map to the format expected by your TransactionsTable
  return transactions.map((tx) => ({
    from: tx.sender.userName,
    to: tx.receiver.userName,
    amount: tx.amount,
    timestamp: tx.createdAt.toISOString(),
    blockHash: tx.txnHash,
  }));
}



export default async function DashboardPage() {
  const { totalBudget, totalTransfers } = await getStats();
  const transactions = await getLatestTransactions(100);
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">System Dashboard</h1>
            <p className="text-gray-600">Monitor government budget allocation and transaction transparency</p>
          </div>
          {authenticated &&
            <Link href="/app">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Go to User App</Button>
            </Link>
          }
        </div>

        <SystemStatsCards totalBudget={totalBudget} totalTransfers={totalTransfers} />
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  )
}
