import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRightLeft } from "lucide-react"

interface Props{
  totalBudget: number;
  totalTransfers: number;
}
export function SystemStatsCards({totalBudget,totalTransfers}: Props) {

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-700">Total System Budget</CardTitle>
          <Wallet className="h-5 w-5 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-900">{formatCurrency(totalBudget)}</div>
          <p className="text-xs text-blue-600 mt-1">Available government funds</p>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-700">Total Transfers</CardTitle>
          <ArrowRightLeft className="h-5 w-5 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-900">{formatCurrency(totalTransfers)}</div>
          <p className="text-xs text-green-600 mt-1">Total amount transferred</p>
        </CardContent>
      </Card>
    </div>
  )
}
