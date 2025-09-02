"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Transaction {
  from: string
  to: string
  amount: number
  timestamp: string
  blockHash: string
}

interface Props{
    transactions: Transaction[];
}

export function TransactionsTable({transactions}: Props) {
  const [showCount, setShowCount] = useState(10)


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const displayedTransactions = transactions.slice(0, showCount)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-semibold text-gray-900">Latest Transactions</CardTitle>
          <div className="flex items-center gap-2">
            <Label htmlFor="show-count" className="text-sm font-medium">
              Show:
            </Label>
            <Input
              id="show-count"
              type="number"
              min="1"
              max="50"
              value={showCount}
              onChange={(e) => setShowCount(Math.max(1, Math.min(50, Number.parseInt(e.target.value) || 1)))}
              className="w-20"
            />
            <span className="text-sm text-gray-600">transactions</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-96 border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="text-left p-3 font-medium text-gray-700">From</th>
                <th className="text-left p-3 font-medium text-gray-700">To</th>
                <th className="text-right p-3 font-medium text-gray-700">Amount</th>
                <th className="text-left p-3 font-medium text-gray-700">Date</th>
                <th className="text-left p-3 font-medium text-gray-700">Transaction Hash</th>
              </tr>
            </thead>
            <tbody>
              {displayedTransactions.map((transaction, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 text-gray-900">{transaction.from}</td>
                  <td className="p-3 text-gray-900">{transaction.to}</td>
                  <td className="p-3 text-right font-semibold text-gray-900">{formatCurrency(transaction.amount)}</td>
                  <td className="p-3 text-gray-600">{formatDate(transaction.timestamp)}</td>
                  <td className="p-3">
                    <a
                      href={`https://sepolia.etherscan.io/tx/${transaction.blockHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {transaction.blockHash.slice(0, 10)}...{transaction.blockHash.slice(-8)}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Showing {displayedTransactions.length} of {transactions.length} transactions
        </div>
      </CardContent>
    </Card>
  )
}

