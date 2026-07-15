import { Progress } from '@/components/ui/progress'
import { Zap, Brain, Gauge, Shield } from 'lucide-react'

import type { Hability } from '../interfaces/hero.interface'

const icons = {
    'strength': Gauge,
    'intelligence': Brain,
    'speed': Zap,
    'durability': Shield
}

const colors = {
    'strength': 'orange-500',
    'intelligence': 'blue-500',
    'speed': 'green-500',
    'durability': 'purple-500'
}

interface Props {
    hability: Hability
}


const HabilityItem = ({ hability }: Props) => {
    const Icon = icons[hability.name.toLowerCase()];
    const color = colors[hability.name.toLowerCase()];
  return (
    <div className="space-y-1">
        <div className="flex items-center gap-1">
        <Icon className={`h-3 w-3 text-${color}`} />
        <span className="text-xs font-medium">{ hability.name }</span>
        </div>
        <Progress value={hability.level} className="h-2" activeColor={`bg-${color}`} />
    </div>
)
}

export default HabilityItem
