import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent } from "../ui/card"

export function SckeletonJumbotron() {
  return (
    <div className="flex gap-4 mb-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
  )
}


function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-3 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-1/2 mb-1" />
        <Skeleton className="h-3 w-full" />
      </CardContent>
    </Card>
  )
}