import React from 'react';
import type { CSSProperties } from 'react'

import { ActivityIcon, BellIcon, LanguagesIcon, SearchIcon } from 'lucide-react'

import { Button } from './button'
import { Card, CardContent } from './card'
import { Sidebar, SidebarProvider } from './sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

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
const Header = () => {
  return (
    <div className='bg-muted before:bg-primary relative flex min-h-dvh w-full before:fixed before:inset-x-0 before:top-0 before:h-105'> style={{ backgroundColor: theme?.backgroundColor }}
      <SidebarProvider
        style={
          {
            '--sidebar': 'var(--card)',
            '--sidebar-width': '17.5rem'
          } as CSSProperties
        }
      >
        <Sidebar
          variant='floating'
          className='py-6 pr-0 pl-6 [&>[data-slot=sidebar-inner]]:group-data-[variant=floating]:rounded-xl'
        >
          <div className='border-sidebar-foreground/10 m-6 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sidebar-foreground)10%,transparent),color-mix(in_oklab,var(--sidebar-foreground)10%,transparent)_1px,var(--sidebar)_2px,var(--sidebar)_15px)]' />
        </Sidebar>
        <div className='z-1 flex flex-1 flex-col px-4 py-6 sm:px-6'>
          <header className='text-primary-foreground mb-6 flex items-center justify-between gap-6'>
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
          </header>
          <main className='mb-6 size-full flex-1'>
            <div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-3'>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
              <Card className='h-32'>
                <CardContent className='h-full'>
                  <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
                </CardContent>
              </Card>
            </div>
            <Card className='h-250'>
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

export default Header
