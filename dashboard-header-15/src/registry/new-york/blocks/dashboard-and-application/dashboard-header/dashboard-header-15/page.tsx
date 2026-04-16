import {
  ActivityIcon,
  BellIcon,
  ChartColumnStackedIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  LanguagesIcon,
  MenuIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'

import LogoSvg from '@/assets/svg/logo'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-dropdown'

const navigationData: NavigationSection[] = [
  {
    title: 'Dashboard',
    icon: <ChartColumnStackedIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  },
  {
    title: 'File Manager',
    icon: <FileTextIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'My Files', href: '#' },
      { title: 'Recent Uploads', href: '#' },
      { title: 'Shared Files', href: '#' },
      { title: 'Recent Activity', href: '#' },
      { title: 'Trash', href: '#' },
      { title: 'File Settings', href: '#' }
    ]
  },
  {
    title: 'Storage',
    icon: <FolderIcon className='text-foreground size-4 shrink-0' />,
    href: '#'
  }
]

const Header = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
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
                  <span className='ml-2.5 hidden text-xl font-semibold sm:block'>File Management</span>
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
        <div className='mx-auto flex max-w-7xl justify-between gap-x-6 gap-y-2 px-4 py-1.5 max-sm:flex-col sm:items-center sm:px-6'>
          <Breadcrumb className='overflow-x-auto'>
            <BreadcrumbList className='flex-nowrap p-1 *:whitespace-nowrap'>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                  <HomeIcon className='size-4.5' />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>File Manager</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>My Files</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ToggleGroup
            type='single'
            size='sm'
            variant='outline'
            className='*:bg-primary/10 *:hover:bg-primary/20 *:data-[state=on]:bg-primary/20 *:data-[state=on]:text-primary *:hover:text-foreground gap-2.5 !shadow-none *:min-w-auto *:!rounded-md *:border-none *:px-3'
          >
            <ToggleGroupItem value='year'>Year</ToggleGroupItem>
            <ToggleGroupItem value='month'>Month</ToggleGroupItem>
            <ToggleGroupItem value='day'>Day</ToggleGroupItem>
            <ToggleGroupItem value='today'>Today</ToggleGroupItem>
          </ToggleGroup>
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
