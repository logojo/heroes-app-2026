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
        <div className="relative h-64 overflow-hidden">
            <img
                src={`/${hero.imageUrl}?height=300&width=300`}
                alt={ hero.hero }
                className="object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Status indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
                    { hero.status }
                </Badge>
            </div>

            {/* Universe badge */}
            <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">{ hero.brand }</Badge>

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

        <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
            <div className="space-y-1">
                <h3 className="font-bold text-lg leading-tight">{ hero.hero }</h3>
                <p className="text-sm text-gray-600">{ hero.alterego }</p>
            </div>
                <Badge className="text-xs bg-green-100 text-green-800 border-green-200">{ hero.ocupation }</Badge>
            </div>
            <Badge variant="outline" className="w-fit text-xs">
                { hero.afiliation}
            </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 line-clamp-2">
                { hero.description }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
                {
                    hero.habilities.map( hability => (
                        <HabilityItem key={hability.name} hability={hability} />
                    ))
                }
            </div>

            {/* Powers */}
            <div className="space-y-2">
                <h4 className="font-medium text-sm">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                    {/* todo: si tiene mas de 3 poderes mostrar boton ejemplo: +4 more y mostrarlos de alguna manera */}
                    {
                        hero.powers.map( power => (
                            <Badge key={power} variant="outline" className="text-xs">
                                { power }
                            </Badge>
                        ))
                    }
                </div>
            </div>
            <div className="text-xs text-gray-500 pt-2 border-t">First appeared: { hero.firstAppeared }</div>
        </CardContent>
    </Card>
  )
}
