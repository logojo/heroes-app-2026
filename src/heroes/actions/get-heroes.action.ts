import { heroApi } from "../api/hero.api"
import type { HeroesResponse } from "../interfaces/hero.interface";

export const getHeroes = async() :Promise<HeroesResponse> => {
    const { data }  = await heroApi.get<HeroesResponse>('/heroes');

    const heroes = data.heroes.map( hero => ({
        ...hero,
        image: `${ import.meta.env.VITE_API_URL}/images/${hero.image}`
    }))
    
    return {
        ...data,
        heroes
    };
}