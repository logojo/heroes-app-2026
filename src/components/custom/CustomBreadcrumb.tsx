import { useLocation } from "react-router"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export const CustomBreadcrumb = () => {
  const { pathname } = useLocation();

  const getPath = () => {
        if(pathname === '/')
           return 'Home';

        let path = pathname.slice(1);
        return path.charAt(0).toUpperCase() + path.slice(1)
  }

  return (
    <div className="mb-5">
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbPage>Heroes</BreadcrumbPage>
            </BreadcrumbItem>   
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            <BreadcrumbPage>{ getPath() }</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
    </div>
  )
}



