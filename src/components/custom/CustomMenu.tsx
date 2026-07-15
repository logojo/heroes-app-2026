import { Link, useLocation } from 'react-router';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { cn } from '@/lib/utils';

const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = ( path: string ) => {
        return pathname === path;
  }

  return (
    <div className='flex justify-center mb-5'>
        <NavigationMenu>
            <NavigationMenuList>

                <NavigationMenuItem>
                    <NavigationMenuLink 
                       className={ cn(isActive('/') && 'bg-slate-200 rounded-md', 'p-2')}
                       render={<Link to="/">Home</Link>} />
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink 
                      className={ cn(isActive('/search') && 'bg-slate-200 rounded-md', 'p-2')}
                     render={<Link to="/search">Search</Link>} />
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default CustomMenu
