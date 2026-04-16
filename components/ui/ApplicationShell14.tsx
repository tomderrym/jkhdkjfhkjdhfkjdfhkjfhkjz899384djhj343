import React from 'react';
import {
  ActivityIcon,
  BellIcon,
  DollarSignIcon,
  FilePlus2Icon,
  LanguagesIcon,
  ListOrderedIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon
} from 'lucide-react'

import { Button } from './button'
import { Card, CardContent } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './breadcrumb'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './navigation-menu'
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
    title: 'Job List',
    icon: <ListOrderedIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'All Jobs', href: '#' },
      { title: 'Active Jobs', href: '#' },
      { title: 'Inactive Jobs', href: '#' },
      { title: 'Pending Jobs', href: '#' },
      { title: 'Completed Jobs', href: '#' },
      { title: 'Cancelled Jobs', href: '#' },
      { title: 'Archived Jobs', href: '#' }
    ]
  },
  {
    title: 'Create Job',
    icon: <FilePlus2Icon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'New Job', href: '#' },
      { title: 'Job Template', href: '#' },
      { title: 'Schedule Job', href: '#' }
    ]
  },
  {
    title: 'Clients',
    icon: <UsersIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'All Clients', href: '#' },
      { title: 'Add New Client', href: '#' },
      { title: 'Client Groups', href: '#' },
      { title: 'Client Feedbacks', href: '#' }
    ]
  },
  {
    title: 'Settings',
    href: '#',
    icon: <SettingsIcon className='text-foreground size-4 shrink-0' />
  },
  {
    title: 'Billing & Invoice',
    href: '#',
    icon: <DollarSignIcon className='text-foreground size-4 shrink-0' />
  }
]

const ApplicationShell = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b bg-black text-white'> style={{ backgroundColor: theme?.backgroundColor }}
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
            <div className='flex items-center gap-4'>
              <MenuSheet
                logoName='Job Management'
                navigationData={navigationData}
                trigger={
                  <Button
                    variant='outline'
                    size='icon'
                    className='inline-flex !border-white bg-black hover:!bg-white/20 lg:hidden'
                  >
                    <MenuIcon className='text-white' />
                    <span className='sr-only'>Menu</span>
                  </Button>
                }
              />
              <a href='#'>
                <div className='flex items-center'>
                  <LogoSvg className='size-8.5 [&_line]:stroke-black [&_path]:stroke-black [&_rect]:fill-white' />
                  <span className='ml-2.5 hidden text-xl font-semibold sm:block'>Job Management</span>
                </div>
              </a>
            </div>
            <SearchDialog
              className='hidden lg:block'
              trigger={
                <Button variant='ghost' className='!bg-transparent p-0 font-normal'>
                  <div className='flex min-w-55 items-center gap-1.5 rounded-md !bg-white/20 px-3 py-2 text-sm text-white hover:!bg-white/25'>
                    <SearchIcon className='size-4' />
                    <span>Type to search...</span>
                  </div>
                </Button>
              }
            />
            <div className='flex items-center gap-1.5'>
              <SearchDialog
                className='block lg:hidden'
                trigger={
                  <Button variant='ghost' size='icon' className='hover:!bg-white/20 hover:text-white'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
                  </Button>
                }
              />
              <LanguageDropdown
                trigger={
                  <Button variant='ghost' size='icon' className='hover:!bg-white/20 hover:text-white'>
                    <LanguagesIcon />
                  </Button>
                }
              />
              <ActivityDialog
                trigger={
                  <Button variant='ghost' size='icon' className='hover:!bg-white/20 hover:text-white'>
                    <ActivityIcon />
                  </Button>
                }
              />
              <NotificationDropdown
                trigger={
                  <Button variant='ghost' size='icon' className='relative hover:!bg-white/20 hover:text-white'>
                    <BellIcon />
                    <span className='bg-destructive absolute top-2 right-2.5 size-2 rounded-full' />
                  </Button>
                }
              />
              <ProfileDropdown
                trigger={
                  <Button variant='ghost' className='h-full p-0'>
                    <Avatar className='size-9.5 rounded-md'>
                      <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                }
              />
            </div>
          </div>
        </div>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-1.5 sm:px-6'>
          <NavigationMenu viewport={false} className='hidden lg:block'>
            <NavigationMenuList className='flex-wrap justify-start'>
              {navigationData.map(navItem => {
                if (navItem.href) {
                  // Root link item
                  return (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={navItem.href}
                          className={cn(navigationMenuTriggerStyle(), 'flex flex-row items-center gap-1.5')}
                        >
                          {navItem.icon}
                          {navItem.title}
                        </a>
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
          <Button>Apply Now</Button>
        </div>
      </header>
      <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
        <Card className='h-250'>
          <CardContent className='h-full'>
            <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' />
          </CardContent>
        </Card>
      </main>
      <footer>
        <div className='mx-auto flex size-full max-w-7xl items-center justify-between gap-3 p-4 max-md:flex-col sm:px-6'>
          <p className='text-muted-foreground text-center text-sm text-balance'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary'>
              Shadcn/studio
            </a>
            , Made for better web design
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Pages</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </footer>
    </div>
  )
}

export default ApplicationShell
