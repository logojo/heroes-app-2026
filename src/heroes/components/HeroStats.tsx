import { Badge } from "@/components/ui/badge"
import { Heart, Trophy, Users, Zap } from "lucide-react"

import { HeroStat } from './HeroStat';
import { SckeletonJumbotron } from "@/components/custom/SckeletonJumbotron";
import { CompactErrorPage } from "@/components/errors/CompactErrorPage";

import { useHeroSummary } from "../hooks/useHeroSummary";

export const HeroStats = () => {

  const { isPending, error, data: summary, refetch} = useHeroSummary()

  if ( isPending ) {
        return <SckeletonJumbotron />
  }
  
  if ( error) {
        return <CompactErrorPage 
                error={error.variant} //enviando la variante del error
                onRetry={refetch}
              />
  }
  return (
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <HeroStat 
            title="Total Characters"
            icon={Users}
        >
           <div className="text-2xl font-bold">16</div>
                <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                    { summary?.totalHeroes} Heroes
                </Badge>
                <Badge variant="destructive" className="text-xs">
                    { summary?.villainCount } Villains
                </Badge>
            </div>
        </HeroStat>

        <HeroStat 
            title="Favorites"
            icon={Heart}
        >
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">18.8% of total</p>
        </HeroStat>

        <HeroStat 
            title="Strongest"           
            icon={Zap}
        >
            <div className="text-lg font-bold">{ summary?.strongestHero.alias }</div>
            <p className="text-xs text-muted-foreground">Strength: { summary?.strongestHero.strength}/10</p>
        </HeroStat>

        <HeroStat 
            title="Smartest"            
            icon={Trophy}
        >
            <div className="text-lg font-bold">{ summary?.smartestHero.alias }</div>
            <p className="text-xs text-muted-foreground">Intelligence: { summary?.smartestHero.intelligence }/10</p>
        </HeroStat>

    </div>
  )
}
