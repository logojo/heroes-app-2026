import { heroApi } from "../api/hero.api"
import type { SummaryResponse } from "../interfaces/summary.interface";

export const getSummary = async() : Promise<SummaryResponse> => {
    const { data } = await heroApi.get<SummaryResponse>('/heroes/summary');

    return data
}