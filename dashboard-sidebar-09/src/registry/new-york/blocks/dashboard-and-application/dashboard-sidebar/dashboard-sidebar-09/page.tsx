import type { ComponentType, CSSProperties } from 'react'

import {
  AlertTriangleIcon,
  ChartColumnBigIcon,
  ChartColumnStackedIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  LinkIcon,
  SquareCheckBigIcon,
  TrendingUpIcon,
  UploadIcon,
  UserIcon,
  UsersIcon
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
    icon: ChartColumnBigIcon,
    label: 'Dashboard',
    href: '#',
    badge: '5'
  }
]

const corePagesItems: MenuItem[] = [
  {
    icon: UserIcon,
    label: 'User Behavior',
    href: '#'
  },
  {
    icon: UsersIcon,
    label: 'Audience',
    href: '#'
  },
  {
    icon: TrendingUpIcon,
    label: 'Traffic Sources',
    href: '#',
    badge: '3'
  },
  {
    icon: ChartColumnStackedIcon,
    label: 'Engagement Metrics',
    href: '#'
  },
  {
    icon: ClipboardListIcon,
    label: 'Custom Reports',
    items: [
      { label: 'User Retention', href: '#', badge: '4' },
      { label: 'Session Duration', href: '#' },
      { label: 'Bounce Rate', href: '#' }
    ]
  },
  {
    icon: AlertTriangleIcon,
    label: 'Error Logs',
    href: '#'
  },
  {
    icon: SquareCheckBigIcon,
    label: 'Survey Results',
    href: '#'
  }
]

const visualizationItems: MenuItem[] = [
  {
    icon: UploadIcon,
    label: 'Data Export',
    href: '#'
  },
  {
    icon: LinkIcon,
    label: 'Integrations',
    items: [
      { label: 'Google Analytics', href: '#' },
      { label: 'Custom API', href: '#', badge: '2' }
    ]
  }
]

const SidebarGroupedMenuItems = ({ data, groupLabel }: { data: MenuItem[]; groupLabel?: string }) => {
  return (
    <SidebarGroup>
      {groupLabel && <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>}
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
      <SidebarProvider
        style={
          {
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
                    <span className='text-xl font-semibold'>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={corePagesItems} groupLabel='Core Pages' />
            <SidebarGroupedMenuItems data={visualizationItems} groupLabel='Visualization' />
          </SidebarContent>
          <SidebarFooter className='[[data-state=collapsed]_&]:hidden'>
            <div className='flex flex-col items-start gap-4 overflow-hidden rounded-md p-2'>
              <p className='truncate text-xl font-semibold'>Go to Premium</p>
              <p className='line-clamp-2 text-sm'>Explore 600+ courses with lifetime membership</p>
              <Button className='truncate'>Upgrade</Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='before:bg-background/60 sticky top-0 z-50 before:absolute before:inset-0 before:mask-[linear-gradient(var(--card),var(--card)_18%,transparent_100%)] before:backdrop-blur-md'>
            <div className='bg-card relative z-51 mx-auto mt-6 flex w-[calc(100%-2rem)] items-center justify-between rounded-xl border px-6 py-3.5 shadow-sm sm:w-[calc(100%-3rem)]'>
              <SidebarTrigger className='[&_svg]:!size-5' />
            </div>
          </header>
          <main className='size-full flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer className='bg-card mx-4 mb-6 h-20 rounded-xl border p-6 shadow-sm sm:mx-6'>
            <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default SidebarPage
