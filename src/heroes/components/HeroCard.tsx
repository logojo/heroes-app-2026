import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Eye } from "lucide-react"

import HabilityItem from "./HabilityItem"
import type { Hero } from "../interfaces/hero.interface";
import { Badge } from "@/components/ui/badge";


interface Props {
    hero: Hero;
}

export const HeroCard = ({ hero }: Props) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-linear-to-br from-white to-gray-50">
        <div className="relative h-64">
            <img
                src={hero.image}
                alt={ hero.alias }
                className="object-cover transition-all duration-500 group-hover:scale-110 absolute -top-7.5 w-full h-102.5"
            />

            {/* Status indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${ hero.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
                    { hero.status }
                </Badge>
            </div>

            {/* Universe badge */}
            <Badge className={`absolute top-3 right-3 text-xs ${ hero.universe === 'DC' ? 'bg-blue-500' : 'bg-red-500'} text-white`}>{ hero.universe }</Badge>

            {/* Favorite button */}
            <Button size="sm" variant="ghost" className="absolute bottom-3 right-3 bg-white/90 hover:bg-white">
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </Button>

            {/* View details button */}
            <Button
                size="sm"
                variant="ghost"
                className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
                <Eye className="h-4 w-4 text-gray-600" />
            </Button>
        </div>

        <CardHeader className="py-6 z-10 rounded-none bg-gray-100/50 backdrop-blur-sm relative top-1 group-hover:-top-2.5 transition-all duration-300">
            <div className="flex justify-between items-start">
            <div className="space-y-1">
                <h3 className="font-bold text-lg leading-tight">{ hero.alias }</h3>
                <p className="text-sm text-gray-600">{ hero.name }</p>
            </div>
                <Badge className="text-xs bg-green-100 text-green-800 border-green-200">{ hero.category }</Badge>
            </div>
            <Badge variant="outline" className="w-fit text-xs">
                { hero.team }
            </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 line-clamp-2">
                { hero.description }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
               
                <HabilityItem ability='strength' level={hero.strength} />
                <HabilityItem ability='intelligence' level={hero.intelligence} />
                <HabilityItem ability='speed' level={hero.speed} />
                <HabilityItem ability='durability' level={hero.durability} />
                
            </div>

            {/* Powers */}
            <div className="space-y-2">
                <h4 className="font-medium text-sm">Powers:</h4>
                <div className="flex flex-wrap gap-1">                   
                    {
                        hero.powers.slice(0,3).map( power => (
                            <Badge key={power} variant="outline" className="text-xs">
                                { power }
                            </Badge>
                        ))
                    }
                    {
                       hero.powers.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{ hero.powers.length - 3 } more
                        </Badge>
                       )  
                    }
                </div>
            </div>
            <div className="text-xs text-gray-500 pt-2 border-t">First appeared: { hero.firstAppearance }</div>
        </CardContent>
    </Card>
  )
}
