import React from 'react';
import type { ComponentType, CSSProperties } from 'react'

import {
  ActivityIcon,
  ArrowDownLeftIcon,
  ArrowRightLeftIcon,
  BellIcon,
  ChevronRightIcon,
  CirclePlusIcon,
  DollarSignIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  LanguagesIcon,
  LinkedinIcon,
  PackageIcon,
  SearchIcon,
  TwitterIcon,
  UsersIcon,
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
  SidebarProvider
} from './sidebar'

// // import LogoSvg from '@/assets/svg/logo'
// Placeholder - asset not available
const LogoSvg = () => null;
// // // import MenuTrigger from '@/components/shadcn-studio/blocks/menu-trigger'
// Placeholder - original component not available
const MenuTrigger = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
// // // import SidebarUserDropdown from '@/components/shadcn-studio/blocks/sidebar-user-dropdown'
// Placeholder - original component not available
const SidebarUserDropdown = () => <div>Component placeholder</div>;
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

type RecipientsItem = {
  name: string
  avatarSrc: string
  href: string
}

const pagesItems: MenuItem[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    href: '#'
  },
  {
    icon: WalletIcon,
    label: 'Wallet Management',
    items: [
      { label: 'Account Overview', href: '#' },
      { label: 'Available Funds', href: '#' },
      { label: 'Transaction History', href: '#' }
    ]
  },
  {
    icon: ArrowRightLeftIcon,
    label: 'Money Transfers',
    items: [
      { label: 'Transfer Overview', href: '#' },
      { label: 'Transfer Methods', href: '#' }
    ]
  },
  {
    icon: CirclePlusIcon,
    label: 'Deposit Funds',
    items: [
      { label: 'Deposit Amount', href: '#' },
      { label: 'Payment Method', href: '#' },
      { label: 'Confirmation', href: '#' }
    ]
  },
  {
    icon: ArrowDownLeftIcon,
    label: 'Request Funds',
    items: [
      { label: 'Request Details', href: '#' },
      { label: 'Amount to Request', href: '#' },
      { label: 'Share Request', href: '#' }
    ]
  },
  {
    icon: DollarSignIcon,
    label: 'Payment Requests',
    items: [
      { label: 'Request Overview', href: '#' },
      { label: 'Payment Details', href: '#' }
    ]
  },
  {
    icon: PackageIcon,
    label: 'Order Management',
    items: [
      { label: 'Order Overview', href: '#' },
      { label: 'Add New Order', href: '#' },
      { label: 'View Orders', href: '#' }
    ]
  },
  {
    icon: UsersIcon,
    label: 'User Management',
    items: [
      { label: 'Users Overview', href: '#' },
      { label: 'Active Users', href: '#' }
    ]
  }
]

const recipientsItems: RecipientsItem[] = [
  {
    name: 'Liam Anderson',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    href: '#'
  },
  {
    name: 'Emma Smith',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    href: '#'
  },
  {
    name: 'Ethan Bennett',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    href: '#'
  },
  {
    name: 'Olivia Morgan',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    href: '#'
  },
  {
    name: 'Noah Carter',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    href: '#'
  },
  {
    name: 'Ava Thompson',
    avatarSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    href: '#'
  }
]

const ApplicationShell = () => {
  return (
    <div className='bg-muted before:bg-primary relative flex min-h-dvh w-full before:fixed before:inset-x-0 before:top-0 before:h-105'> style={{ backgroundColor: theme?.backgroundColor }}
      <SidebarProvider
        style={
          {
            '--sidebar': 'var(--card)',
            '--sidebar-width': '17.5rem',
            '--sidebar-width-icon': '3.5rem'
          } as CSSProperties
        }
      >
        <Sidebar
          variant='floating'
          collapsible='icon'
          className='p-6 pr-0 [&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:rounded-xl'
        >
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size='lg' className='gap-2.5 !bg-transparent [&>svg]:size-8' asChild>
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>Payment</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Pages</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pagesItems.map(item =>
                    item.items ? (
                      <Collapsible className='group/collapsible' key={item.label}>
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
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
                        <SidebarMenuButton asChild>
                          <a href={item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                          </a>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge className='bg-primary/10 rounded-full'>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Recipients</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {recipientsItems.map(recipient => (
                    <SidebarMenuItem key={recipient.name}>
                      <SidebarMenuButton asChild>
                        <a href={recipient.href}>
                          <Avatar className='size-6 transition-[width,height] duration-200 [[data-state=collapsed]_&]:size-4'>
                            <AvatarImage src={recipient.avatarSrc} alt={recipient.name} />
                            <AvatarFallback>
                              {recipient.name
                                .split(' ')
                                .map(n => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span>{recipient.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarUserDropdown />
          </SidebarFooter>
        </Sidebar>
        <div className='z-1 flex flex-1 flex-col py-6'>
          <header className='text-primary-foreground'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6'>
              <div className='flex items-center gap-4'>
                <MenuTrigger
                  variant='outline'
                  className='!bg-primary-foreground !border-primary-foreground !text-primary shadow-none'
                />
                <div className='hidden sm:flex sm:flex-col sm:items-start'>
                  <p className='text-lg font-semibold'>Hey, John</p>
                  <p className='text-primary-foreground/50 md:max-lg:hidden'>Welcome back to dashboard</p>
                </div>
              </div>
              <SearchDialog
                className='hidden xl:block'
                trigger={
                  <Button variant='ghost' className='!bg-transparent p-0 font-normal'>
                    <div className='!bg-primary-foreground/20 text-primary-foreground hover:!bg-primary-foreground/25 flex min-w-55 items-center gap-1.5 rounded-md px-3 py-2 text-sm'>
                      <SearchIcon className='size-4' />
                      <span>Type to search...</span>
                    </div>
                  </Button>
                }
              />
              <div className='flex items-center gap-1.5'>
                <SearchDialog
                  className='block xl:hidden'
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
            <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3'>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
            </div>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
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
      </SidebarProvider>
    </div>
  )
}

export default ApplicationShell
