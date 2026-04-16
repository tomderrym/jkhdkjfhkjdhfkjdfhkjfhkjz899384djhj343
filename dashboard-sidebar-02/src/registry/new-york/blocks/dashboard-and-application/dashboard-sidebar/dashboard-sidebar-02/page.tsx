import type { ComponentType } from 'react'

import {
  ArrowRightLeftIcon,
  CalendarClockIcon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  Clock9Icon,
  CrownIcon,
  FacebookIcon,
  HashIcon,
  InstagramIcon,
  LinkedinIcon,
  SettingsIcon,
  SquareActivityIcon,
  TwitterIcon,
  Undo2Icon,
  UsersIcon
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
    icon: ChartNoAxesCombinedIcon,
    label: 'Dashboard',
    href: '#',
    badge: '5'
  }
]

const pagesItems: MenuItem[] = [
  {
    icon: ChartSplineIcon,
    label: 'Content Performance',
    href: '#'
  },
  {
    icon: UsersIcon,
    label: 'Audience Insight',
    items: [
      { label: 'Demographics', href: '#' },
      { label: 'Interests', href: '#', badge: '2' }
    ]
  },
  {
    icon: ChartPieIcon,
    label: 'Engagement Metrics',
    href: '#'
  },
  {
    icon: HashIcon,
    label: 'Hashtag Performance',
    href: '#',
    badge: '3'
  },
  {
    icon: ArrowRightLeftIcon,
    label: 'Competitor Analysis',
    href: '#'
  },
  {
    icon: Clock9Icon,
    label: 'Campaign Tracking',
    href: '#'
  },
  {
    icon: ClipboardListIcon,
    label: 'Sentiment Tracking',
    href: '#'
  },
  {
    icon: CrownIcon,
    label: 'Influencer',
    href: '#'
  }
]

const supportingFeaturesItems: MenuItem[] = [
  {
    icon: SquareActivityIcon,
    label: 'Real Time Monitoring',
    href: '#'
  },
  {
    icon: CalendarClockIcon,
    label: 'Schedule Post & Calendar',
    href: '#'
  },
  {
    icon: Undo2Icon,
    label: 'Report & Export',
    href: '#'
  },
  {
    icon: SettingsIcon,
    label: 'Settings & Integrations',
    items: [
      { label: 'Account Settings', href: '#' },
      { label: 'Notification Preferences', href: '#' },
      { label: 'API Integrations', href: '#' }
    ]
  },
  {
    icon: UsersIcon,
    label: 'User Management',
    href: '#'
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
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className='items-center gap-2 border-b py-6'>
            <Avatar className='size-12'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' alt='John Doe' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='text-sidebar-accent-foreground flex flex-col items-center'>
              <p className='text-sm'>John Doe</p>
              <p className='text-xs font-light'>john.doe@example.com</p>
            </div>
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
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={pagesItems} groupLabel='Pages' />
            <SidebarGroupedMenuItems data={supportingFeaturesItems} groupLabel='Supporting Features' />
          </SidebarContent>
          <SidebarFooter className='px-4 py-3.5'>
            <a href='#' className='self-start'>
              <div className='flex items-center'>
                <LogoSvg className='[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary size-8.5' />
                <span className='ml-2.5 hidden text-xl font-semibold sm:block'>Social Media</span>
              </div>
            </a>
          </SidebarFooter>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 h-13.75 border-b'>
            <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6'>
              <SidebarTrigger className='[&_svg]:!size-5' />
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
      </SidebarProvider>
    </div>
  )
}

export default SidebarPage
