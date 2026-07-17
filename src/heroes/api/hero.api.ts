import axios from "axios";
import { mapAxiosError } from "./mapAxiosError";

const BASE_URL = import.meta.env.VITE_API_URL;


export const heroApi = axios.create({
    baseURL: `${BASE_URL}/api`
});

heroApi.interceptors.response.use(
  (response) => response,
  (error) => {
    throw mapAxiosError(error);
  }
);