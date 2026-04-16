import {
  ActivityIcon,
  AlignStartHorizontalIcon,
  BellIcon,
  BookAIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartNoAxesColumnIcon,
  ChartPieIcon,
  DollarSignIcon,
  FileTextIcon,
  Grid2X2Icon,
  HelpCircleIcon,
  LanguagesIcon,
  LayoutGridIcon,
  LockKeyholeIcon,
  MailIcon,
  MenuIcon,
  MessageSquareIcon,
  SearchIcon,
  SettingsIcon,
  SheetIcon,
  ShoppingCartIcon,
  SquareIcon,
  Table2Icon,
  TruckIcon,
  UserIcon,
  VectorSquareIcon,
  Wand2Icon
} from 'lucide-react'

import { Input } from '@/components/ui/input'
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
import { cn } from '@/lib/utils'

import LogoSvg from '@/assets/svg/logo'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import MenuSheet from '@/components/shadcn-studio/blocks/menu-sheet'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-sheet'

const navigationData: NavigationSection[] = [
  {
    title: 'Dashboard',
    icon: <ChartNoAxesColumnIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'Analytics', href: '#', icon: <ChartPieIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'CRM', href: '#', icon: <VectorSquareIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'eCommerce', href: '#', icon: <ShoppingCartIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Apps',
    icon: <LayoutGridIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'Email', href: '#', icon: <MailIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Chat', href: '#', icon: <MessageSquareIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Calendar', href: '#', icon: <CalendarIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Kanban', href: '#', icon: <AlignStartHorizontalIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Logistics', href: '#', icon: <TruckIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Academy', href: '#', icon: <BookOpenIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Tables',
    icon: <Table2Icon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'Tables', href: '#', icon: <Grid2X2Icon className='text-foreground size-4 shrink-0' /> },
      { title: 'DataTables', href: '#', icon: <SheetIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Pages',
    icon: <FileTextIcon className='text-foreground size-4 shrink-0' />,
    items: [
      { title: 'User Profile', href: '#', icon: <UserIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Account Settings', href: '#', icon: <SettingsIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'FAQ', href: '#', icon: <HelpCircleIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Pricing', href: '#', icon: <DollarSignIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Authentication', href: '#', icon: <LockKeyholeIcon className='text-foreground size-4 shrink-0' /> },
      { title: 'Wizard Examples', href: '#', icon: <Wand2Icon className='text-foreground size-4 shrink-0' /> },
      { title: 'Modal Examples', href: '#', icon: <SquareIcon className='text-foreground size-4 shrink-0' /> }
    ]
  },
  {
    title: 'Docs',
    href: '#',
    icon: <BookAIcon className='text-foreground size-4 shrink-0' />
  }
]

const Header = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='border-b'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
            <div className='flex items-center gap-4'>
              <MenuSheet
                logoName='shadcn/studio'
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
                            <NavigationMenuLink
                              key={item.title}
                              href={item.href}
                              className='flex flex-row items-center gap-1.5'
                            >
                              {item.icon}
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
            <Input placeholder='Search...' />
            <Button size='icon'>
              <SearchIcon />
              <span className='sr-only'>Search</span>
            </Button>
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
