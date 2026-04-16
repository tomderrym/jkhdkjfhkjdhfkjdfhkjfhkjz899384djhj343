import React from 'react';
import type { ComponentType, CSSProperties } from 'react'

import {
  ActivityIcon,
  BellIcon,
  ChartPieIcon,
  ChartScatterIcon,
  ChevronRightIcon,
  CircleUserIcon,
  FileChartPieIcon,
  HomeIcon,
  LanguagesIcon,
  LinkIcon,
  ScanLineIcon,
  SearchIcon,
  SettingsIcon,
  TrendingUpIcon
} from 'lucide-react'

import { Button } from './button'
import { Separator } from './separator'
import { ScrollArea } from './scroll-area'
import { Card, CardContent } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './breadcrumb'
import {
  Sidebar,
  SidebarContent,
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
    icon: HomeIcon,
    label: 'Home',
    href: '#'
  }
]

const tradingItems: MenuItem[] = [
  {
    icon: CircleUserIcon,
    label: 'Portfolio',
    href: '#'
  },
  {
    icon: ChartPieIcon,
    label: 'Market',
    href: '#'
  },
  {
    icon: TrendingUpIcon,
    label: 'Trading',
    href: '#'
  }
]

const analyticsItems: MenuItem[] = [
  {
    icon: ChartScatterIcon,
    label: 'Stocks',
    href: '#'
  },
  {
    icon: ScanLineIcon,
    label: 'Scanner',
    href: '#'
  },
  {
    icon: FileChartPieIcon,
    label: 'Analytics',
    href: '#'
  }
]

const settingsItems: MenuItem[] = [
  {
    icon: SettingsIcon,
    label: 'Settings',
    items: [
      { label: 'Profile', href: '#' },
      { label: 'Notifications', href: '#' },
      { label: 'Security', href: '#' }
    ]
  },
  {
    icon: LinkIcon,
    label: 'Invite',
    href: '#'
  }
]

const SidebarGroupedMenuItems = ({ data, groupLabel }: { data: MenuItem[]; groupLabel?: string }) => {
  return (
    <SidebarGroup>
      {groupLabel && (
        <SidebarGroupLabel className='group-data-[collapsible=icon]:opacity-100 [[data-state=collapsed]_&]:mb-2'>
          <hr className='hidden w-full [[data-state=collapsed]_&]:block' />
          <span className='[[data-state=collapsed]_&]:hidden'>{groupLabel}</span>
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu className='[[data-state=collapsed]_&]:gap-0.5'>
          {data.map(item =>
            item.items ? (
              <Collapsible className='group/collapsible' key={item.label}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className='[[data-state=collapsed]_&>span:last-child]:overflow-unset [[data-state=collapsed]_&>span:last-child]:[text-overflow=unset] [[data-state=collapsed]_&]:h-auto! [[data-state=collapsed]_&]:w-14! [[data-state=collapsed]_&]:flex-col [[data-state=collapsed]_&]:gap-2.5! [[data-state=collapsed]_&>span]:text-xs [[data-state=collapsed]_&>svg]:size-5!'>
                      <item.icon />
                      <span>{item.label}</span>
                      <ChevronRightIcon className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 [[data-state=collapsed]_&]:hidden' />
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
                <SidebarMenuButton
                  className='[[data-state=collapsed]_&>span:last-child]:overflow-unset [[data-state=collapsed]_&>span:last-child]:[text-overflow=unset] [[data-state=collapsed]_&]:h-auto! [[data-state=collapsed]_&]:w-14! [[data-state=collapsed]_&]:flex-col [[data-state=collapsed]_&]:gap-2.5! [[data-state=collapsed]_&>span:last-child]:text-xs [[data-state=collapsed]_&>svg]:size-5!'
                  asChild
                >
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
      <SidebarProvider defaultOpen={false} style={{ '--sidebar-width-icon': '4.5625rem' } as CSSProperties}>
        <Sidebar collapsible='icon'>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size='lg'
                  className='gap-2.5 !bg-transparent group-data-[collapsible=icon]:h-9.5! group-data-[collapsible=icon]:w-14! group-data-[collapsible=icon]:px-3! group-data-[collapsible=icon]:py-1! [&>svg]:size-8'
                  asChild
                >
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>Trading Hub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <ScrollArea className='h-[calc(100dvh-4rem)] [[data-state=collapsed]_&]:h-[calc(100dvh-3.375rem)]'>
            <SidebarContent>
              <SidebarGroupedMenuItems data={menuItems} />
              <SidebarGroupedMenuItems data={tradingItems} groupLabel='Trading' />
              <SidebarGroupedMenuItems data={analyticsItems} groupLabel='Analytics' />
              <SidebarGroupedMenuItems data={settingsItems} groupLabel='Settings' />
            </SidebarContent>
          </ScrollArea>
          <SidebarRail />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='md:hidden [&_svg]:!size-5' />
                <Separator orientation='vertical' className='hidden !h-4 sm:max-md:block' />
                <SearchDialog
                  trigger={
                    <>
                      <Button variant='ghost' className='hidden !bg-transparent px-1 py-0 font-normal sm:block'>
                        <div className='text-muted-foreground hidden items-center gap-1.5 text-sm sm:flex'>
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
            <div className='mx-auto flex size-full max-w-7xl items-center justify-between gap-3 p-4 max-md:flex-col sm:px-6'>
              <p className='text-muted-foreground text-center text-sm text-balance'>
                {`©${new Date().getFullYear()}`}{' '}
                <a href='#' className='text-primary'>
                  Shadcn/studio
                </a>
                , Made for better web design
              </p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Pages</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Portfolio</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default ApplicationShell
