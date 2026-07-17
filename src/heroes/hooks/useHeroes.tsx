import { useQuery } from "@tanstack/react-query"

import { getHeroes } from "../actions/get-heroes.action"

import type { ApiError } from "../api/api-error"
import type { HeroesResponse } from "../interfaces/hero.interface"


export const useHeroes = (page: number, limit: number, tab : string = 'all') => {
return  useQuery<HeroesResponse, ApiError>({
    //esta es la llave y esta basada en la ruta lo que se encuentra entre { son los queryparameter } y la consulta se actualizara si estos cambian
    queryKey: ['heroes', { page, limit, tab }], 
    queryFn: () => getHeroes(page, limit, tab),
    staleTime: 1000 * 60 * 5 // cada 5 minutos refresca la petición
  })
}
