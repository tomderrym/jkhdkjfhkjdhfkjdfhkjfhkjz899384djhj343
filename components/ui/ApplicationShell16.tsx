import React from 'react';
import type { ComponentType } from 'react'

import {
  ActivityIcon,
  BellIcon,
  BusIcon,
  CalendarDaysIcon,
  CarIcon,
  ChevronRightIcon,
  HomeIcon,
  LanguagesIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  PlaneIcon,
  SailboatIcon,
  SearchIcon,
  SettingsIcon,
  TagsIcon,
  UserIcon,
  WalletIcon
} from 'lucide-react'

import { Button } from './button'
import { Card, CardContent } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger
} from './sidebar'

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
type MenuSubItem = {
  label: string
  href: string
  badge?: string
}

type MenuItem = {
  icon: ComponentType
  label: string
} & (
  | {
      href: string
      badge?: string
      items?: never
    }
  | { href?: never; badge?: never; items: MenuSubItem[] }
)

const menuItems: MenuItem[] = [
  {
    icon: LayoutDashboardIcon,
    label: 'Dashboard',
    href: '#'
  },
  {
    icon: CalendarDaysIcon,
    label: 'Booking',
    href: '#'
  },
  {
    icon: MapPinIcon,
    label: 'Search Location',
    href: '#'
  }
]

const bookingServicesItems: MenuItem[] = [
  {
    icon: HomeIcon,
    label: 'Hotel Booking',
    href: '#'
  },
  {
    icon: PlaneIcon,
    label: 'Flight Booking',
    href: '#'
  },
  {
    icon: BusIcon,
    label: 'Bus Booking',
    href: '#'
  },
  {
    icon: CarIcon,
    label: 'Car Booking',
    href: '#'
  },
  {
    icon: SailboatIcon,
    label: 'Ship Booking',
    href: '#'
  }
]

const accountSettingsItems: MenuItem[] = [
  {
    icon: TagsIcon,
    label: 'Offers',
    href: '#'
  },
  {
    icon: UserIcon,
    label: 'User Profile',
    href: '#'
  },
  {
    icon: SettingsIcon,
    label: 'Settings',
    items: [
      { label: 'Account Settings', href: '#' },
      { label: 'Booking Preferences', href: '#' },
      { label: 'Payment Methods', href: '#' }
    ]
  },
  {
    icon: WalletIcon,
    label: 'Wallet',
    href: '#'
  }
]

const SidebarGroupedMenuItems = ({ data, groupLabel }: { data: MenuItem[]; groupLabel?: string }) => {
  return (
    <SidebarGroup>
      {groupLabel && (
        <SidebarGroupLabel className='group-data-[collapsible=icon]:opacity-100'>
          <hr className='hidden w-full [[data-state=collapsed]_&]:block' />
          <span className='[[data-state=collapsed]_&]:hidden'>{groupLabel}</span>
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map(item =>
            item.items ? (
              <Collapsible className='group/collapsible' key={item.label}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.label}>
                      <item.icon />
                      <span>{item.label}</span>
                      <ChevronRightIcon className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map(subItem => (
                        <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton className='justify-between' asChild>
                            <a href={subItem.href}>
                              {subItem.label}
                              {subItem.badge && (
                                <span className='bg-primary/10 flex h-5 min-w-5 items-center justify-center rounded-full text-xs'>
                                  {subItem.badge}
                                </span>
                              )}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton tooltip={item.label} asChild>
                  <a href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
                {item.badge && <SidebarMenuBadge className='bg-primary/10 rounded-full'>{item.badge}</SidebarMenuBadge>}
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

const ApplicationShell = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider defaultOpen={false}>
        <Sidebar collapsible='icon'>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size='lg' className='gap-2.5 !bg-transparent [&>svg]:size-8' asChild>
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>Travel Agency</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={bookingServicesItems} groupLabel='Booking Services' />
            <SidebarGroupedMenuItems data={accountSettingsItems} groupLabel='Account & Settings' />
          </SidebarContent>
          <SidebarFooter className='[[data-state=collapsed]_&]:-rotate-90'>
            <Button size='sm' className='[[data-state=collapsed]_&]:w-fit' asChild>
              <a href='#'>Book now</a>
            </Button>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <SidebarTrigger className='md:hidden' />
                <SearchDialog
                  trigger={
                    <>
                      <Button variant='ghost' className='hidden p-0 font-normal sm:inline-flex'>
                        <div className='text-muted-foreground flex min-w-55 items-center gap-1.5 rounded-md border px-3 py-2 text-sm'>
                          <SearchIcon className='size-4' />
                          <span>Type to search...</span>
                        </div>
                      </Button>
                      <Button variant='ghost' size='icon' className='sm:hidden'>
                        <SearchIcon className='size-4' />
                        <span className='sr-only'>Search</span>
                      </Button>
                    </>
                  }
                />
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
                    <Button variant='ghost' size='icon' className='size-9.5'>
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
            <Card className='h-250 shadow-none'>
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
              </p>
              <div className='text-muted-foreground *:hover:text-primary flex flex-wrap items-center gap-3 text-sm whitespace-nowrap min-[450px]:gap-4'>
                <a href='#'>Hotels</a>
                <a href='#'>Resorts</a>
                <a href='#'>Home Stays</a>
                <a href='#'>Offers</a>
                <a href='#'>Support</a>
              </div>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default ApplicationShell
