import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useQuery } from "@tanstack/react-query"
import CustomJumbotrom from "@/components/custom/CustomJumbotrom"
import Pagination from "@/components/custom/Pagination"

import { HeroStats } from "../components/HeroStats"
import { HeroGrid } from "../components/HeroGrid"

import { getHeroes } from "../actions/get-heroes.action"
import { CustomSckeleton } from "@/components/custom/CustomSckeleton"
import ErrorPage from "@/components/errors/ErrorPage"
import type { HeroesResponse } from "../interfaces/hero.interface"
import type { ApiError } from "../api/api-error"


type tabs = "all" | "favorites" | "heroes" | "villains"

export default function Homepage() {
  const [activeTab, setActiveTab] = useState<tabs>("all");
  

  const { isPending, error, data: heroesResponse, refetch } = useQuery<HeroesResponse, ApiError>({
    queryKey: ['heroes'],
    queryFn: () => getHeroes(),
    staleTime: 1000 * 60 * 5
  })

   if ( isPending ) 
       return <CustomSckeleton />

  if (error) {
     return <ErrorPage 
      error={error.variant} //enviando la variante del error
      onRetry={refetch}
    />
  }

  
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

          <TabsContent value="all">
            <HeroGrid
              heroes={ heroesResponse.heroes }
            />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid
              heroes={ [] }
            />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid
              heroes={ [] }
            />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid
              heroes={ [] }
            />
          </TabsContent>
        </Tabs>
        

            
          

        {/* Pagination */}
        <Pagination totalPages={8}/>
  
    </>
  )
}