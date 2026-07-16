import { Progress } from '@/components/ui/progress'
import { Zap, Brain, Gauge, Shield } from 'lucide-react'

const abilities = {
    strength: {
        icon: Gauge,
        bg: "bg-orange-500",
        text: "text-orange-500",
    },
    intelligence: {
        icon: Brain,
        bg: "bg-blue-500",
        text: "text-blue-500",
    },
    speed: {
        icon: Zap,
        bg: "bg-green-500",
        text: "text-green-500",
    },
    durability: {
        icon: Shield,
        bg: "bg-purple-500",
        text: "text-purple-500",
    },
} as const;

interface Props {
    ability: 'strength' | 'intelligence' | 'speed' | 'durability',
    level: number
}


const HabilityItem = ({ ability , level }: Props) => {
    const item = abilities[ability];
    const Icon = item.icon;
    
  return (
    <div className="space-y-1">
        <div className="flex items-center gap-1">
        <Icon className={`h-3 w-3 ${item.text}`} />
        <span className="text-xs font-medium">{ ability }</span>
        </div>
        <Progress value={level*10} className="h-2" activeColor={item.bg} />
    </div>
)
}

export default HabilityItem
