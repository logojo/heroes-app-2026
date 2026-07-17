import { lazy } from "react";
import { createBrowserRouter } from "react-router";


import HomePage from "@/heroes/pages/HomePage";
import HeroPage from "@/heroes/pages/HeroPage";
import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import ErrorPage from '../components/errors/ErrorPage';

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
          path: "/heroes/:idSlug",
          element: <HeroPage />
        },
        {
          path: "/search",
          element: <SearchPage />
        },
        {
          path:'*',
          element: <ErrorPage error='not-found' />
        }
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