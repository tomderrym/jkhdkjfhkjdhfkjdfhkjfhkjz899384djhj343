import React from 'react';
import type { ComponentType } from 'react'

import {
  ActivityIcon,
  ArrowRightLeftIcon,
  BellIcon,
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
  LanguagesIcon,
  LinkedinIcon,
  SearchIcon,
  SettingsIcon,
  SquareActivityIcon,
  TwitterIcon,
  Undo2Icon,
  UsersIcon
} from 'lucide-react'

import { Button } from './button'
import { Separator } from './separator'
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
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='[&_svg]:!size-5' />
                <Separator orientation='vertical' className='hidden !h-4 sm:block' />
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
                    <Button variant='ghost' className='h-full p-0 font-normal sm:pr-1'>
                      <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className='hidden flex-col items-start gap-0.5 sm:flex md:max-lg:hidden'>
                        <span className='text-sm font-medium'>John Doe</span>
                        <span className='text-muted-foreground text-xs'>Admin</span>
                      </div>
                    </Button>
                  }
                />
              </div>
            </div>
          </header>
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' /> style={{ backgroundColor: theme?.backgroundColor }}
              </CardContent>
            </Card>
          </main>
          <footer>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 p-4 max-lg:flex-col sm:px-6'>
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
                    <BreadcrumbLink href='#'>Audience Insight</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Interests</BreadcrumbPage>
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
