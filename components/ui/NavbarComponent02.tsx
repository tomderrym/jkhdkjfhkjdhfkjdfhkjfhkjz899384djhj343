import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './dropdown-menu';
import { Separator } from './separator';
import { BaseComponentProps } from '../../types';

type NavigationItem = {
  title: string;
  href: string;
};

const NavbarComponent02: React.FC<BaseComponentProps & { navigationData?: NavigationItem[] }> = ({ theme, navigationData = [] }) => {
  const defaultNavigation: NavigationItem[] = [
    { title: 'Home', href: '#' },
    { title: 'Products', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Contacts', href: '#' },
  ];

  const displayNav = navigationData.length > 0 ? navigationData : defaultNavigation;

  return (
    <header 
      className='bg-background sticky top-0 z-50'
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <a href='#'>
          <span 
            className='gap-3 text-xl font-bold'
            style={{ color: theme?.primaryTextColor }}
          >
            Logo
          </span>
        </a>

        <div className='flex items-center gap-6'>
          <div 
            className='text-muted-foreground flex items-center gap-6 font-medium max-md:hidden'
            style={{ color: theme?.secondaryTextColor }}
          >
            {displayNav.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className='hover:text-primary'
                style={{ color: theme?.secondaryTextColor }}
              >
                {item.title}
              </a>
            ))}
          </div>
          <Separator orientation='vertical' className='!h-6 max-md:hidden' />
          <Button className='rounded-lg text-base max-md:hidden' size='lg'>
            <a href='#' className='no-underline'>Login</a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                {displayNav.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className='!bg-transparent'>
                  <Button className='grow'>
                    <a href='#' className='no-underline'>Login</a>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent02;

