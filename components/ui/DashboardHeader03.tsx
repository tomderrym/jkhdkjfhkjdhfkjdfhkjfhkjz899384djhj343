import React from 'react';
import { ActivityIcon, BellIcon, LanguagesIcon, SearchIcon, Share2Icon } from 'lucide-react'

import { Button } from './button'
import { Card, CardContent } from './card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Sidebar, SidebarProvider, SidebarTrigger } from './sidebar'

// // // import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
// Placeholder - original component not available
const SearchDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import ShareDropdown from '@/components/shadcn-studio/blocks/dropdown-share'
// Placeholder - original component not available
const ShareDropdown = () => <div>Component placeholder</div>;
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
const shareData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'John Garrett',
    email: 'john@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Laura Perez',
    email: 'laura@example.com',
    role: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Shane Adkins',
    email: 'shane@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Clara Brady',
    email: 'clara@example.com',
    role: 'can-edit'
  }
]

const morePeople = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Daisy Mitchell'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    name: 'Stephen Adams'
  }
]

const Header = () => {
  return (
    <div className='bg-muted flex min-h-dvh w-full'> style={{ backgroundColor: theme?.backgroundColor }}
      <SidebarProvider>
        <Sidebar collapsible='icon' className='[&_[data-slot=sidebar-inner]]:bg-muted !border-r-0'>
          <div className='border-foreground/10 m-6 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--foreground)10%,transparent),color-mix(in_oklab,var(--foreground)10%,transparent)_1px,var(--muted)_2px,var(--muted)_15px)]' />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-muted sticky top-0 z-50 flex items-center justify-between gap-6 px-4 py-2 sm:px-6'>
            <SidebarTrigger className='[&_svg]:!size-5' />
            <SearchDialog
              className='hidden lg:block'
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
            <div className='flex items-center gap-1.5'>
              <SearchDialog
                className='lg:hidden'
                trigger={
                  <Button variant='ghost' size='icon'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
                  </Button>
                }
              />
              <ShareDropdown
                data={shareData}
                morePeople={morePeople}
                trigger={
                  <Button variant='ghost' size='icon'>
                    <Share2Icon />
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

export default Header
