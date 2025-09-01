import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, WalletIcon } from "lucide-react"

interface BalanceCardsProps {
  balance: number
  totalSent: number
  totalReceived: number
}

export function BalanceCards({ balance, totalSent, totalReceived }: BalanceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white shadow-sm border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Current Balance</CardTitle>
          <WalletIcon className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">
            ₱{balance.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-slate-500 mt-1">Available for allocation</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Total Sent</CardTitle>
          <ArrowUpIcon className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">
            ₱{totalSent.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-slate-500 mt-1">Funds allocated</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Total Received</CardTitle>
          <ArrowDownIcon className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">
            ₱{totalReceived.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-slate-500 mt-1">Funds received</p>
        </CardContent>
      </Card>
    </div>
  )
}
