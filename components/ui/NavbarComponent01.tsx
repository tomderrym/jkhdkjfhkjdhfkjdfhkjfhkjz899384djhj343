import React from 'react';
import { MenuIcon, SearchIcon } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './dropdown-menu';
import { BaseComponentProps } from '../../types';

type NavigationItem = {
  title: string;
  href: string;
};

const NavbarComponent01: React.FC<BaseComponentProps & { navigationData?: NavigationItem[] }> = ({ theme, navigationData = [] }) => {
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
        <div 
          className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'
          style={{ color: theme?.secondaryTextColor }}
        >
          <a 
            href='#' 
            className='hover:text-primary max-md:hidden'
            style={{ color: theme?.secondaryTextColor }}
          >
            Home
          </a>
          <a 
            href='#' 
            className='hover:text-primary max-md:hidden'
            style={{ color: theme?.secondaryTextColor }}
          >
            Products
          </a>
          <a href='#'>
            <span 
              className='text-foreground gap-3 text-xl font-bold'
              style={{ color: theme?.primaryTextColor }}
            >
              Logo
            </span>
          </a>
          <a 
            href='#' 
            className='hover:text-primary max-md:hidden'
            style={{ color: theme?.secondaryTextColor }}
          >
            About Us
          </a>
          <a 
            href='#' 
            className='hover:text-primary max-md:hidden'
            style={{ color: theme?.secondaryTextColor }}
          >
            Contacts
          </a>
        </div>

        <div className='flex items-center gap-6'>
          <Button variant='ghost' size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {displayNav.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent01;

