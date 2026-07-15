import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CustomJumbotrom from "@/components/custom/CustomJumbotrom"
import { HeroStats } from "../components/HeroStats"
import { HeroGrid } from "../components/HeroGrid"
import type { Hero } from "../interfaces/hero.interface"

const heroes : Hero[] = [
  {
    imageUrl: 'placeholder.svg',
    status: 'Active',
    brand: 'DC',
    hero: 'Batman',
    alterego: 'Bruce Wayne',
    ocupation:'Hero',
    afiliation: 'Justice League',
    description: 'The Dark Knight of Gotham City, using fear as a weapon against crime and corruption.',
    habilities: [
      {name: 'Strength', level: 60},
      {name: 'Intelligence', level: 100},
      {name: 'Speed', level: 60},
      {name: 'Durability', level: 70},
    ],
    powers: ['Martial Arts','etective Skills','+3 more'],
    firstAppeared: 1939,
  }
]

export default function Homepage() {
  return (
    <>
        {/* Header */}
        <CustomJumbotrom 
        title="Superhero Universe" 
        description="Discover, explore, and manage your favorite superheroes and villains"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid
          heroes={heroes}
        />

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
  
    </>
  )
}