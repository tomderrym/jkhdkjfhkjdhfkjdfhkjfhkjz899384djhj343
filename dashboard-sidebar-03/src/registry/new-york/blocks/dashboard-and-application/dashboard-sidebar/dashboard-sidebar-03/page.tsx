import type { ComponentType } from 'react'

import {
  BusIcon,
  CalendarDaysIcon,
  CarIcon,
  ChevronRightIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  PlaneIcon,
  SailboatIcon,
  SettingsIcon,
  TagsIcon,
  UserIcon,
  WalletIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
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
} from '@/components/ui/sidebar'

import LogoSvg from '@/assets/svg/logo'

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
                    <SidebarMenuButton tooltip={item.label} className='truncate'>
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

const SidebarPage = () => {
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
          <header className='bg-card sticky top-0 z-50 h-13.75 border-b'>
            <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6'>
              <div className='border-card-foreground/10 size-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)] max-lg:hidden' />
              <SidebarTrigger className='md:hidden' />
            </div>
          </header>
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250 shadow-none'>
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
      </SidebarProvider>
    </div>
  )
}

export default SidebarPage
