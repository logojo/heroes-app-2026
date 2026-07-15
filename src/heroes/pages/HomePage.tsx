import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CustomJumbotrom from "@/components/custom/CustomJumbotrom"
import Pagination from "@/components/custom/Pagination"

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
      {name: 'Strength', level: 80},
      {name: 'Intelligence', level: 100},
      {name: 'Speed', level: 60},
      {name: 'Durability', level: 70},
    ],
    powers: ['Martial Arts','etective Skills','+3 more'],
    firstAppeared: 1939,
  }
]

type tabs = "all" | "favorites" | "heroes" | "villains"

export default function Homepage() {
  const [activeTab, setActiveTab] = useState<tabs>("all")
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setActiveTab("favorites")}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab("villains")}>
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">All Characters</TabsContent>
          <TabsContent value="favorites">Favoritos!!!</TabsContent>
          <TabsContent value="heroes">Heroes</TabsContent>
          <TabsContent value="villains">Villains</TabsContent>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid
          heroes={heroes}
        />

        {/* Pagination */}
        <Pagination totalPages={8}/>
  
    </>
  )
}