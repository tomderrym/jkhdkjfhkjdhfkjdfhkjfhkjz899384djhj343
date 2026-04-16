import React from 'react';
import { ActivityIcon, BellIcon, LanguagesIcon } from 'lucide-react'

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
// // // import MegaMenu from '@/components/shadcn-studio/blocks/dashboard-header-11/menu-mega-menu'
// Placeholder - original component not available
const MegaMenu = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
// // // import type {
  NavigationItem,
  NavigationSection
} from '@/components/shadcn-studio/blocks/dashboard-header-11/menu-mega-menu'
// Placeholder - original component not available
const type = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const navigationData: NavigationSection[] = [
  {
    title: 'Components',
    contentClassName: '!w-150',
    splitItems: true,
    items: [
      {
        title: 'Alert Dialog',
        href: '#',
        description: 'A modal dialog that interrupts the user with important content and expects a response.'
      },
      {
        title: 'Hover Card',
        href: '#',
        description: 'For sighted users to preview content available behind a link.'
      },
      {
        title: 'Progress',
        href: '#',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
      },
      {
        title: 'Scroll-area',
        href: '#',
        description: 'Visually or semantically separates content.'
      },
      {
        title: 'Tabs',
        href: '#',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
      },
      {
        title: 'Tooltip',
        href: '#',
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
      }
    ]
  },
  {
    title: 'Docs',
    href: '#'
  },
  {
    title: 'Resources',
    contentClassName: '!w-38',
    items: [
      { title: 'Tutorials', href: '#' },
      { title: 'References', href: '#' }
    ]
  },
  {
    title: 'Manage Account',
    contentClassName: '!w-60',
    items: [
      { title: 'Account', href: '#', description: 'Manage your account settings.' },
      { title: 'Preferences', href: '#', description: 'Customize your preferences.' },
      { title: 'Billing', href: '#', description: 'Manage your billing information.' },
      { title: 'Help Center', href: '#', description: 'Get help with your account.' }
    ]
  }
]

const ListItem = (props: {
  title: NavigationItem['title']
  href: NavigationItem['href']
  description?: NavigationItem['description']
}) => {
  const { title, href, description } = props

  return (
    <li>
      <NavigationMenuLink href={href}>
        {description ? (
          <>
            <div className='text-sm leading-none font-medium'>{title}</div>
            <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{description}</p>
          </>
        ) : (
          <>{title}</>
        )}
      </NavigationMenuLink>
    </li>
  )
}

const Header = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-2 sm:px-6'>
          <div className='flex items-center gap-4'>
            <MegaMenu navigationData={navigationData} />
            <a href='#'>
              <div className='flex items-center'>
                <LogoSvg className='size-8.5' />
                <span className='ml-2.5 hidden text-xl font-semibold sm:block'>shadcn/studio</span>
              </div>
            </a>
          </div>
          <NavigationMenu viewport={false} className='hidden lg:block'>
            <NavigationMenuList className='flex-wrap'>
              {navigationData.map(navItem => {
                if (navItem.href) {
                  // Root link item
                  return (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink href={navItem.href} className={navigationMenuTriggerStyle()}>
                        {navItem.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }

                // Section with dropdown
                return (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className='absolute w-auto'>
                      <ul
                        className={cn(
                          {
                            'grid gap-2 [&>li>a]:h-full': navItem.items?.find(item => item.description),
                            'grid-cols-2': navItem.items?.find(item => item.description && navItem.splitItems),
                            '[&>li>a:not(:has(div))]:text-sm [&>li>a:not(:has(div))]:leading-none [&>li>a:not(:has(div))]:font-medium':
                              navItem.items?.find(item => item.description)
                          },
                          navItem.contentClassName
                        )}
                      >
                        {navItem.items?.map(item => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className='flex items-center gap-1.5'>
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
      </header>
      <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
        <Card className='h-250'>
          <CardContent className='h-full'>
            <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' /> style={{ backgroundColor: theme?.backgroundColor }}
          </CardContent>
        </Card>
      </main>
      <footer className='bg-card h-10 border-t'>
        <div className='mx-auto size-full max-w-7xl px-4 sm:px-6'>
          <div className='border-card-foreground/10 h-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
        </div>
      </footer>
    </div>
  )
}

export default Header
