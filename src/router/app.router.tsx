import { lazy } from "react";
import { createBrowserRouter } from "react-router";


import HomePage from "@/heroes/pages/HomePage";
import HeroPage from "@/heroes/pages/HeroPage";
import HeroesLayout from "@/heroes/layouts/HeroesLayout";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

//rutas admin
const AdminLayout = lazy(() => import("@/admin/layout/AdminLayout"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/heroes/1",
          element: <HeroPage />
        },
        {
          path: "/search",
          element: <SearchPage />
        },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        {
          index: true,
          element: <AdminPage />
        }

    ]
        
  }
]);