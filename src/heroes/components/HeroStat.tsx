import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title: string;
    icon: LucideIcon;
}

export const HeroStat: FC<Props> = ({title, icon: Icon, children}) => {
  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{ title }</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>{ children }</CardContent>
    </Card>
)
}
