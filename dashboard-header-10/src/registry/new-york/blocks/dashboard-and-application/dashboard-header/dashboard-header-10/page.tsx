import { ActivityIcon, BellIcon, LanguagesIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import LogoSvg from '@/assets/svg/logo'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-dropdown'

const navigationData: NavigationSection[] = [
  {
    title: 'Components',
    items: [
      { title: 'Alert Dialog', href: '#' },
      { title: 'Hover Card', href: '#' },
      { title: 'Progress', href: '#' },
      { title: 'Scroll-area', href: '#' },
      { title: 'Tabs', href: '#' },
      { title: 'Tooltip', href: '#' }
    ]
  },
  {
    title: 'Docs',
    href: '#'
  },
  {
    title: 'Resources',
    items: [
      { title: 'Tutorials', href: '#' },
      { title: 'References', href: '#' }
    ]
  },
  {
    title: 'Manage Account',
    items: [
      { title: 'Account', href: '#' },
      { title: 'Preferences', href: '#' },
      { title: 'Billing', href: '#' },
      { title: 'Help Center', href: '#' }
    ]
  }
]

const Header = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-2 sm:px-6'>
          <div className='flex items-center gap-4'>
            <MenuDropdown
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='inline-flex lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
            <a href='#'>
              <div className='flex items-center'>
                <LogoSvg className='size-8.5' />
                <span className='ml-2.5 hidden text-xl font-semibold sm:block'>shadcn/studio</span>
              </div>
            </a>
          </div>
          <NavigationMenu viewport={false} className='hidden max-w-full lg:block'>
            <NavigationMenuList className='flex-wrap justify-start'>
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
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-1.5'>
              <LanguageDropdown
                trigger={
                  <Button variant='outline' size='icon'>
                    <LanguagesIcon />
                  </Button>
                }
              />
              <ActivityDialog
                trigger={
                  <Button variant='outline' size='icon'>
                    <ActivityIcon />
                  </Button>
                }
              />
              <NotificationDropdown
                trigger={
                  <Button variant='outline' size='icon' className='relative'>
                    <BellIcon />
                    <span className='bg-destructive absolute -top-0.5 -right-0.5 size-2 rounded-full' />
                  </Button>
                }
              />
            </div>
            <ProfileDropdown
              trigger={
                <Button variant='ghost' className='h-full rounded-full p-0'>
                  <Avatar className='size-9.5'>
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
            <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
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
