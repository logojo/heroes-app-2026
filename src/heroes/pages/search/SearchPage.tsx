import CustomJumbotrom from "@/components/custom/CustomJumbotrom"
import { HeroStats } from "../../components/HeroStats"
import { SearchControls } from "./ui/SearchControls"


const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotrom 
        title="Busqueda de heroes" 
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  )
}

export default SearchPage
