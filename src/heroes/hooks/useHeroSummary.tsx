import { useQuery } from "@tanstack/react-query"

import { getSummary } from "../actions/get-summary.action"

import type { SummaryResponse } from "../interfaces/summary.interface"
import type { ApiError } from "../api/api-error"


export const useHeroSummary = () => {
  
  return useQuery<SummaryResponse, ApiError>({
    queryKey: ['summary',], 
    queryFn: getSummary,
    staleTime: 1000 * 60 * 5 // cada 5 minutos refresca la petición
  })

}
