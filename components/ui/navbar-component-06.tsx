/**
 * Shadcn Block: navbar-component-06
 * A comprehensive application navbar with advanced navigation menu, integrated search functionality, notification dropdown with badge, and user profile dropdown with avatar. Features a two-row layout with tabbed navigation and sophisticated user management tools, perfect for admin dashboards and complex web applications.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/navbar-component-06/navbar-component-06.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: avatar, badge, button, dropdown-menu, input, navigation-menu, separator, tabs
 */

import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'

// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
import NotificationDropdown from '@/components/builder-components'
import ProfileDropdown from '@/components/builder-components'

type NavigationData = {
  title: string
  href: string
}[]

type NavigationItem = {
  title: string
  href: string
  isActive?: boolean
}[]

const Navbar = ({
  navigationData,
  navigationItems
}: {
  navigationData: NavigationData
  navigationItems: NavigationItem
}) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6'>
        <a href='#'>
          <div className='flex items-center'>
            <LogoSvg className='size-8' />
            <span className='ml-3 text-xl font-semibold max-sm:hidden'>shadcn/studio</span>
          </div>
        </a>

        <NavigationMenu viewport={false} className='max-md:hidden'>
          <NavigationMenuList className='gap-10'>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index} className='has-[[data-active]]:text-foreground text-muted-foreground'>
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()} active={item.isActive}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2 md:gap-4'>
          <Button variant='outline' size='icon' className='md:hidden'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>

          <NotificationDropdown
            trigger={
              <Button variant='outline' size='icon' className='relative shadow-none'>
                <BellIcon />
                <span className='bg-destructive absolute -top-0.5 -right-0.5 size-2 rounded-full' />
              </Button>
            }
          />

          <ProfileDropdown
            trigger={
              <Button variant='ghost' className='h-full rounded-lg p-0'>
                <Avatar className='size-9.5 rounded-lg'>
                  <AvatarImage
                    src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
                    className='rounded-lg'
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            }
          />

          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuGroup key={index}>
                  <DropdownMenuItem>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>

                  {index == 2 && <DropdownMenuSeparator />}
                </DropdownMenuGroup>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className='max-md:hidden' />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 max-md:hidden sm:px-6'>
        <div className='text-muted-foreground flex items-center gap-10 font-medium'>
          {navigationData.slice(3).map((item, index) => (
            <a key={index} href={item.href} className='hover:text-foreground'>
              {item.title}
            </a>
          ))}
        </div>

        <div className='text-muted-foreground flex items-center gap-3'>
          <Input type='text' placeholder='Type here' className='max-md:hidden' />
          <Button size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
