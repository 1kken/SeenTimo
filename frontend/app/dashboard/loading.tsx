import { Skeleton } from "@/components/ui/skeleton"
export default function DashBoardLoading() {
  return (
    <div className="bg-gray-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className=" min-h-[200px] mb-2" />
        {/* This is for upper layout*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Skeleton className=" min-h-[200px]" />
          <Skeleton className=" min-h-[200px]" />
        </div>
        <Skeleton className=" min-h-[200px] mt-2" />
      </div>
    </div>
  )
}