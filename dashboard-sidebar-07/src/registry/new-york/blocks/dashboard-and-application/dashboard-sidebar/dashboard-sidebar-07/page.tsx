import type { ComponentType } from 'react'

import {
  AwardIcon,
  ChartColumnStackedIcon,
  ChevronRightIcon,
  CircleQuestionMarkIcon,
  ClipboardListIcon,
  Clock8Icon,
  FolderIcon,
  PencilIcon,
  SettingsIcon,
  StarIcon,
  TrendingUpIcon,
  UserIcon
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
    icon: ChartColumnStackedIcon,
    label: 'Dashboard',
    href: '#',
    badge: '3'
  }
]

const pagesItems: MenuItem[] = [
  {
    icon: UserIcon,
    label: 'Student Profile',
    href: '#'
  },
  {
    icon: TrendingUpIcon,
    label: 'Progress',
    href: '#'
  },
  {
    icon: PencilIcon,
    label: 'Assignments',
    href: '#',
    badge: '2'
  },
  {
    icon: Clock8Icon,
    label: 'Schedule',
    href: '#'
  },
  {
    icon: FolderIcon,
    label: 'Resources',
    items: [
      { label: 'Course Materials', href: '#' },
      { label: 'Lecture Notes', href: '#' },
      { label: 'Additional Readings', href: '#', badge: '5' }
    ]
  },
  {
    icon: ClipboardListIcon,
    label: 'Reports',
    href: '#'
  },
  {
    icon: AwardIcon,
    label: 'Certificates',
    href: '#'
  }
]

const miscItems: MenuItem[] = [
  {
    icon: StarIcon,
    label: 'Reviews',
    href: '#'
  },
  {
    icon: CircleQuestionMarkIcon,
    label: 'FAQ',
    href: '#'
  },
  {
    icon: SettingsIcon,
    label: 'Settings',
    items: [
      { label: 'Profile Settings', href: '#' },
      { label: 'General Preferences', href: '#' }
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
    <div className='bg-muted flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar collapsible='icon' className='[&_[data-slot=sidebar-inner]]:bg-muted !border-r-0'>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size='lg' className='gap-2.5 !bg-transparent [&>svg]:size-8' asChild>
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-muted [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>Academy</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={pagesItems} groupLabel='Pages' />
            <SidebarGroupedMenuItems data={miscItems} groupLabel='Misc' />
          </SidebarContent>
          <SidebarFooter className='p-3 [[data-state=collapsed]_&]:hidden'>
            <div className='bg-background flex flex-col items-start gap-4 rounded-md p-4 pb-0'>
              <p className='text-xl font-semibold'>Mobile app is available</p>
              <p className='text-sm'>The personal account allows user management subscription</p>
              <Button>Get App</Button>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-sidebar/image-1.png'
                alt='Mobile app'
                className='self-center'
              />
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-muted sticky top-0 z-50 flex h-13.75 items-center justify-between gap-6 px-4 py-2 sm:px-6'>
            <SidebarTrigger className='[&_svg]:!size-5' />
          </header>
          <main className='size-full flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer className='bg-muted h-10 px-4 sm:px-6'>
            <div className='border-foreground/10 h-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--foreground)10%,transparent),color-mix(in_oklab,var(--foreground)10%,transparent)_1px,var(--muted)_2px,var(--muted)_15px)]' />
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default SidebarPage
