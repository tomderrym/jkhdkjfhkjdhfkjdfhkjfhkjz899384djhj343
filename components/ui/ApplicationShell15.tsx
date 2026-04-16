import React from 'react';
import {
  ActivityIcon,
  BellIcon,
  CalendarCheckIcon,
  CalendarClockIcon,
  CarIcon,
  ChartPieIcon,
  LanguagesIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  WrenchIcon
} from 'lucide-react'

import { Button } from './button'
import { Card, CardContent } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './navigation-menu'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './breadcrumb'
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
// // // import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
// Placeholder - original component not available
const SearchDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
// Placeholder - original component not available
const LanguageDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
// Placeholder - original component not available
const ActivityDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
// Placeholder - original component not available
const NotificationDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
// Placeholder - original component not available
const ProfileDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import MenuSheet from '@/components/shadcn-studio/blocks/menu-sheet'
// Placeholder - original component not available
const MenuSheet = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-sheet'
// Placeholder - original component not available
const type = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const navigationData: NavigationSection[] = [
  {
    title: 'Dashboard',
    icon: <ChartPieIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Booking',
    icon: <CalendarCheckIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Buy Cars',
    icon: <CarIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Sell Cars',
    icon: <CarIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Services',
    icon: <WrenchIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'Settings',
    icon: <SettingsIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  }
]

const ApplicationShell = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
            <div className='flex items-center gap-4'>
              <MenuSheet
                logoName='Automobile'
                navigationData={navigationData}
                trigger={
                  <Button variant='outline' size='icon' className='inline-flex md:hidden'>
                    <MenuIcon />
                    <span className='sr-only'>Menu</span>
                  </Button>
                }
              />
              <a href='#'>
                <div className='flex items-center'>
                  <LogoSvg className='size-8.5' />
                  <span className='ml-2.5 hidden text-xl font-semibold sm:block'>Automobile</span>
                </div>
              </a>
            </div>
            <SearchDialog
              className='hidden lg:block'
              trigger={
                <Button variant='ghost' className='p-0 font-normal'>
                  <div className='text-muted-foreground flex min-w-55 items-center gap-1.5 rounded-md border px-3 py-2 text-sm'>
                    <SearchIcon className='size-4' />
                    <span>Search Services...</span>
                  </div>
                </Button>
              }
            />
            <div className='flex items-center gap-1.5'>
              <SearchDialog
                className='block lg:hidden'
                trigger={
                  <Button variant='ghost' size='icon'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
                  </Button>
                }
              />
              <LanguageDropdown
                trigger={
                  <Button variant='ghost' size='icon'>
                    <LanguagesIcon />
                  </Button>
                }
              />
              <ActivityDialog
                trigger={
                  <Button variant='ghost' size='icon'>
                    <ActivityIcon />
                  </Button>
                }
              />
              <NotificationDropdown
                trigger={
                  <Button variant='ghost' size='icon' className='relative'>
                    <BellIcon />
                    <span className='bg-destructive absolute top-2 right-2.5 size-2 rounded-full' />
                  </Button>
                }
              />
              <ProfileDropdown
                trigger={
                  <Button variant='ghost' className='h-full p-0 font-normal sm:pr-1'>
                    <Avatar className='size-9.5 rounded-md'>
                      <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className='hidden flex-col items-start gap-0.5 sm:flex'>
                      <span className='text-sm font-medium'>John Doe</span>
                      <span className='text-muted-foreground text-xs'>Admin</span>
                    </div>
                  </Button>
                }
              />
            </div>
          </div>
        </div>
        <div className='hidden border-b md:block'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-2 sm:px-6'>
            <NavigationMenu viewport={false}>
              <NavigationMenuList className='flex-wrap justify-start'>
                {navigationData.map(navItem => {
                  if (navItem.href) {
                    // Root link item
                    return (
                      <NavigationMenuItem key={navItem.title}>
                        <NavigationMenuLink
                          href={navItem.href}
                          className={cn(navigationMenuTriggerStyle(), 'flex flex-row items-center gap-1.5')}
                        >
                          {navItem.icon}
                          {navItem.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }

                  // Section with dropdown
                  return (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuTrigger className='gap-1.5'>
                        {navItem.icon}
                        {navItem.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='data-[motion=from-start]:slide-in-from-left-30! data-[motion=to-start]:slide-out-to-left-30! data-[motion=from-end]:slide-in-from-right-30! data-[motion=to-end]:slide-out-to-right-30! absolute w-auto'>
                        <ul className='grid w-38 gap-4'>
                          <li>
                            {navItem.items?.map(item => (
                              <NavigationMenuLink key={item.title} href={item.href}>
                                {item.title}
                              </NavigationMenuLink>
                            ))}
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className='mx-auto flex max-w-7xl justify-between gap-x-6 gap-y-2 px-4 py-1.5 max-sm:flex-col sm:items-center sm:px-6'>
          <Breadcrumb className='overflow-x-auto'>
            <BreadcrumbList className='flex-nowrap p-1 *:whitespace-nowrap'>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Cars</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Book Car</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='flex items-center gap-4'>
            <Button variant='secondary'>
              Buy Cars
              <CarIcon />
            </Button>
            <Button>
              Book Appointment
              <CalendarClockIcon />
            </Button>
          </div>
        </div>
      </header>
      <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
        <Card className='h-250'>
          <CardContent className='h-full'>
            <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' /> style={{ backgroundColor: theme?.backgroundColor }}
          </CardContent>
        </Card>
      </main>
      <footer>
        <div className='mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-md:flex-col sm:px-6 md:gap-6'>
          <p className='text-muted-foreground text-sm text-balance max-md:text-center'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary'>
              Shadcn/studio
            </a>
            , Made for better web design
          </p>
          <div className='text-muted-foreground *:hover:text-primary flex flex-wrap items-center gap-3 text-sm whitespace-nowrap min-[450px]:gap-4'>
            <a href='#'>Car Services</a>
            <a href='#'>Bookings</a>
            <a href='#'>Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ApplicationShell
