import { heroApi } from "../api/hero.api"
import type { HeroesResponse } from "../interfaces/hero.interface";

export const getHeroes = async(
    page: number,
    limit: number = 6,
    category: string = 'all',
) :Promise<HeroesResponse> => {

    if( isNaN( page ) ) {
        page = 1;
    } 
    
    const { data }  = await heroApi.get<HeroesResponse>('/heroes', {
        params: {
            limit,
            offset: ( page -1 ) * limit,
            category
        }
    });

    const heroes = data.heroes.map( hero => ({
        ...hero,
        image: `${ import.meta.env.VITE_API_URL}/images/${hero.image}`
    }))
    
    return {
        ...data,
        heroes
    };
}