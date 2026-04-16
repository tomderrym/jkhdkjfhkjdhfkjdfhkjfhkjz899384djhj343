import React from 'react';
import {
  ActivityIcon,
  BellIcon,
  ChartColumnStackedIcon,
  CrownIcon,
  FacebookIcon,
  Gamepad2Icon,
  HelpCircleIcon,
  InstagramIcon,
  LanguagesIcon,
  LinkedinIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  TwitterIcon,
  UserIcon
} from 'lucide-react'

import { Input } from './input'
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
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
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
    href: '#',
    icon: <ChartColumnStackedIcon className='text-foreground size-4 shrink-0' />
  },
  {
    title: 'Game Library',
    icon: <Gamepad2Icon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'All Games', href: '#' },
      { title: 'My Games', href: '#' },
      { title: 'Wishlist', href: '#' },
      { title: 'Trending Games', href: '#' },
      { title: 'Top Rated', href: '#' },
      { title: 'New Releases', href: '#' }
    ]
  },
  {
    title: 'Leaderboard',
    icon: <UserIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'Global Rankings', href: '#' },
      { title: "Friends' Rankings", href: '#' },
      { title: 'Monthly Leaderboard', href: '#' },
      { title: 'Recent Winners', href: '#' }
    ]
  },
  {
    title: 'Achievements',
    href: '#',
    icon: <CrownIcon className='text-foreground size-4 shrink-0' />
  },
  {
    title: 'Settings',
    href: '#',
    icon: <SettingsIcon className='text-foreground size-4 shrink-0' />
  },
  {
    title: 'Support',
    href: '#',
    icon: <HelpCircleIcon className='text-foreground size-4 shrink-0' />
  }
]

const ApplicationShell = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b bg-indigo-600 text-white'> style={{ backgroundColor: theme?.backgroundColor }}
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
            <div className='flex items-center gap-4'>
              <MenuSheet
                logoName='Game Platform'
                navigationData={navigationData}
                trigger={
                  <Button
                    variant='outline'
                    size='icon'
                    className='inline-flex !border-white bg-indigo-600 hover:!bg-white/20 lg:hidden'
                  >
                    <MenuIcon className='text-white' />
                    <span className='sr-only'>Menu</span>
                  </Button>
                }
              />
              <a href='#'>
                <div className='flex items-center'>
                  <LogoSvg className='size-8.5 [&_line]:stroke-indigo-600 dark:[&_line]:stroke-indigo-600 [&_path]:stroke-indigo-600 dark:[&_path]:stroke-indigo-600 [&_rect]:fill-white' />
                  <span className='ml-2.5 hidden text-xl font-semibold sm:block'>Game Platform</span>
                </div>
              </a>
            </div>
            <div className='flex items-center gap-1.5'>
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
          <div className='flex items-center gap-2 max-sm:w-full'>
            <Input placeholder='Find Games...' />
            <Button size='icon'>
              <SearchIcon />
              <span className='sr-only'>Find Games</span>
            </Button>
          </div>
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
        <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
          <p className='text-center text-sm text-balance'>
            {`©${new Date().getFullYear()}`}{' '}
            <a href='#' className='text-primary'>
              Shadcn/studio
            </a>
            , Made for better web design
          </p>
          <div className='flex items-center gap-5'>
            <a href='#'>
              <FacebookIcon className='size-4' />
            </a>
            <a href='#'>
              <InstagramIcon className='size-4' />
            </a>
            <a href='#'>
              <LinkedinIcon className='size-4' />
            </a>
            <a href='#'>
              <TwitterIcon className='size-4' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ApplicationShell
