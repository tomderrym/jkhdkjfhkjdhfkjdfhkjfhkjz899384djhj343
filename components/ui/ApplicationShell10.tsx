import React from 'react';
import type { ComponentType } from 'react'

import {
  ActivityIcon,
  BellIcon,
  ChevronRightIcon,
  Clock4Icon,
  FacebookIcon,
  FileTextIcon,
  FolderIcon,
  GithubIcon,
  InstagramIcon,
  LanguagesIcon,
  LayoutDashboardIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  StarIcon,
  TrashIcon,
  TwitterIcon,
  UsersIcon
} from 'lucide-react'

import { Input } from './input'
import { Button } from './button'
import { Progress } from './progress'
import { Separator } from './separator'
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
  }
]

const pagesItems: MenuItem[] = [
  {
    icon: FileTextIcon,
    label: 'My Files',
    href: '#'
  },
  {
    icon: UsersIcon,
    label: 'Shared with me',
    href: '#',
    badge: '3'
  },
  {
    icon: Clock4Icon,
    label: 'Recent Files',
    href: '#'
  },
  {
    icon: StarIcon,
    label: 'Starred files',
    href: '#'
  },
  {
    icon: TrashIcon,
    label: 'Recycle Bin',
    href: '#'
  }
]

const fileOrganizationItems: MenuItem[] = [
  {
    icon: FolderIcon,
    label: 'Folders',
    href: '#'
  },
  {
    icon: ServerIcon,
    label: 'Storage Management',
    items: [
      { label: 'Cloud Storage', href: '#' },
      { label: 'Local Storage', href: '#' }
    ]
  },
  {
    icon: FileTextIcon,
    label: 'File Details',
    href: '#'
  },
  {
    icon: SettingsIcon,
    label: 'Workspace',
    href: '#'
  },
  {
    icon: UsersIcon,
    label: 'Activity Logs',
    items: [
      { label: 'User Activity', href: '#', badge: '5' },
      { label: 'File Changes', href: '#' }
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
      <SidebarProvider>
        <Sidebar collapsible='icon'>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size='lg' className='gap-2.5 !bg-transparent [&>svg]:size-8' asChild>
                  <a href='#'>
                    <LogoSvg className='[&_rect]:fill-sidebar [&_rect:first-child]:fill-primary' />
                    <span className='text-xl font-semibold'>File Manager</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className='px-2 [[data-state=collapsed]_&]:hidden'>
                <div className='relative'>
                  <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
                  </div>
                  <Input type='text' placeholder='Search' className='peer bg-card pl-9' />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroupedMenuItems data={menuItems} />
            <SidebarGroupedMenuItems data={pagesItems} groupLabel='Useful Pages' />
            <SidebarGroupedMenuItems data={fileOrganizationItems} groupLabel='File Organization' />
          </SidebarContent>
          <SidebarFooter className='[[data-state=collapsed]_&]:hidden'>
            <div className='flex flex-col gap-4 overflow-hidden rounded-md border p-4'>
              <p className='truncate text-xl font-semibold'>Upgrade Your Plan</p>
              <p className='text-sidebar-foreground/70 truncate text-sm'>
                <span className='text-base font-medium'>10.4GB</span> of 15GB
              </p>
              <Progress value={70} className='h-2' />
              <Button className='truncate'>Upgrade Now</Button>
            </div>
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
            <Card className='h-250 shadow-none'>
              <CardContent className='h-full'>
                <div className='h-full rounded-md border bg-[repeating-linear-gradient(45deg,var(--muted),var(--muted)_1px,var(--card)_2px,var(--card)_15px)]' /> style={{ backgroundColor: theme?.backgroundColor }}
              </CardContent>
            </Card>
          </main>
          <footer>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-lg:flex-col sm:px-6'>
              <p className='text-muted-foreground text-center text-sm text-balance'>
                {`©${new Date().getFullYear()}`}{' '}
                <a href='#' className='text-primary'>
                  Shadcn/studio
                </a>
              </p>
              <div className='text-muted-foreground *:hover:text-primary flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm whitespace-nowrap'>
                <a href='#'>Storage Plans</a>
                <a href='#'>Upgrade Plan</a>
                <a href='#'>Help Center</a>
              </div>
              <div className='text-muted-foreground *:hover:text-primary flex items-center gap-5'>
                <a href='#'>
                  <FacebookIcon className='size-4' />
                </a>
                <a href='#'>
                  <InstagramIcon className='size-4' />
                </a>
                <a href='#'>
                  <GithubIcon className='size-4' />
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
