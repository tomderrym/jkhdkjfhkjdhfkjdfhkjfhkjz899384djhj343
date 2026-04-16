import type { ComponentType, CSSProperties } from 'react'

import {
  ArrowDownLeftIcon,
  ArrowRightLeftIcon,
  ChevronRightIcon,
  CirclePlusIcon,
  DollarSignIcon,
  HomeIcon,
  PackageIcon,
  UsersIcon,
  WalletIcon
} from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  SidebarTrigger
} from '@/components/ui/sidebar'

import LogoSvg from '@/assets/svg/logo'
import SidebarUserDropdown from '@/components/shadcn-studio/blocks/sidebar-user-dropdown'

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

const SidebarPage = () => {
  return (
    <div className='bg-muted before:bg-primary relative flex min-h-dvh w-full before:fixed before:inset-x-0 before:top-0 before:h-105'>
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
                            <SidebarMenuButton className='truncate'>
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
        <div className='z-1 mx-auto flex size-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6'>
          <header className='bg-card mb-6 flex items-center rounded-xl px-6 py-3.5'>
            <SidebarTrigger className='[&_svg]:!size-5' />
          </header>
          <main className='mb-6 size-full flex-1'>
            <Card className='h-250 shadow-none'>
              <CardContent className='h-full'>
                <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer className='bg-card h-20 rounded-xl p-6 shadow-sm'>
            <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default SidebarPage
