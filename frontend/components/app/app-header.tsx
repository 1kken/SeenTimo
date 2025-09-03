import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface DashboardHeaderProps {
  title: string
  subtitle: string
}

export function AppHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-serif">{title}</h1>
            <p className="text-slate-600 mt-1">{subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="bg-transparent">
                Public Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
