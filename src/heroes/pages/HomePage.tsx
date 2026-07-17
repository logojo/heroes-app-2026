import { useSearchParams } from "react-router"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CustomJumbotrom from "@/components/custom/CustomJumbotrom"
import CustomPagination from "@/components/custom/Pagination"

import { HeroStats } from "../components/HeroStats"
import { HeroGrid } from "../components/HeroGrid"

import { CustomSckeleton } from "@/components/custom/CustomSckeleton"
import ErrorPage from "@/components/errors/ErrorPage"

import { useHeroSummary } from "../hooks/useHeroSummary"
import { useHeroes } from "../hooks/useHeroes"


const  TABS = ["all", "favorites", "hero", "villain"];
type Tab = (typeof TABS)[number];

export default function Homepage() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  
  ///obteniendo los queryParametrer de la url
  const activeTab = searchParams.get("tab") ?? 'all';
  const page = searchParams.get("page") ?? '1';
  const limit = searchParams.get("limit") ?? '2';

  //Validando que si se modifica en la url el tab siempre s eobtenga un valor correcto
  const selectedTab: Tab =
    TABS.includes(activeTab as Tab) ? (activeTab as Tab) : "all";

  //modificando el url en base al tab seleccionado
  const updateTab = (tab: Tab) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("tab", tab);
      return params;
    });
  };

  const { isPending, error, data: heroesResponse, refetch } = useHeroes(+page, +limit, activeTab )
  const { data: summary } = useHeroSummary()

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
        <Tabs value={selectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => updateTab("all")}>
              All Characters ({ summary?.totalHeroes })
            </TabsTrigger>
            <TabsTrigger value="favorites"  onClick={() => updateTab("favorites")}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="hero"  onClick={() => updateTab("hero")}>
              Heroes ({ summary?.heroCount })
            </TabsTrigger>
            <TabsTrigger value="villain"  onClick={() => updateTab("villain")}>
              Villains ({ summary?.villainCount })
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid
              heroes={ heroesResponse.heroes }
            />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid
               heroes={ heroesResponse.heroes }
            />
          </TabsContent>
          <TabsContent value="hero">
            <HeroGrid
               heroes={ heroesResponse.heroes }
            />
          </TabsContent>
          <TabsContent value="villain">
            <HeroGrid
              heroes={ heroesResponse.heroes }
            />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination 
          totalPages={heroesResponse.pages} 
        />
  
    </>
  )
}