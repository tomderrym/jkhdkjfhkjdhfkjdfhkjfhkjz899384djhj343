import type { ComponentType } from 'react'

import {
  BugIcon,
  CalendarIcon,
  ChartLineIcon,
  ChevronRightIcon,
  CrownIcon,
  FoldersIcon,
  GaugeIcon,
  LayoutListIcon,
  PlusIcon,
  SquareCheckBigIcon,
  StickyNoteIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
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

import WorkspaceSwitcher from '@/components/shadcn-studio/blocks/sidebar-workspace-switcher'

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
    icon: GaugeIcon,
    label: 'Dashboard',
    href: '#'
  }
]

const pagesItems: MenuItem[] = [
  {
    icon: SquareCheckBigIcon,
    label: 'Backlog',
    href: '#'
  },
  {
    icon: LayoutListIcon,
    label: 'Iterations',
    href: '#'
  },
  {
    icon: CrownIcon,
    label: 'Milestones',
    href: '#'
  },
  {
    icon: BugIcon,
    label: 'Bug Tracker',
    href: '#'
  },
  {
    icon: FoldersIcon,
    label: 'Design Assets',
    items: [
      { label: 'Components', href: '#' },
      { label: 'Icons', href: '#' },
      { label: 'Illustrations', href: '#' }
    ]
  },
  {
    icon: StickyNoteIcon,
    label: 'Release Notes',
    href: '#'
  },
  {
    icon: CalendarIcon,
    label: 'Campaign Calendar',
    href: '#',
    badge: '3'
  },
  {
    icon: ChartLineIcon,
    label: 'Ad Performance',
    items: [
      { label: 'Campaigns', href: '#' },
      { label: 'Ad Groups', href: '#' },
      { label: 'Ads', href: '#', badge: '7' },
      { label: 'Keywords', href: '#' }
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
      <SidebarProvider>
        <Sidebar collapsible='icon'>
          <SidebarHeader>
            <WorkspaceSwitcher />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={pagesItems} groupLabel='Useful Pages' />
          </SidebarContent>
          <SidebarFooter className='gap-4 p-3 transition-[padding] duration-200 [[data-state=collapsed]_&]:p-2'>
            <div className='flex flex-col gap-4 overflow-hidden rounded-md border p-4 [[data-state=collapsed]_&]:hidden'>
              <p className='truncate text-xl font-semibold'>Upgrade Your Plan</p>
              <p className='line-clamp-3 text-sm'>
                Your trial plan ends in 12 days. Upgrade your plan and unlock full potential!
              </p>
              <Progress value={50} className='h-2' />
              <Button className='truncate'>See All Plans</Button>
            </div>
            <Button className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40'>
              <span className='truncate [[data-state=collapsed]_&]:hidden'>Add new workspace</span>
              <PlusIcon />
            </Button>
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
