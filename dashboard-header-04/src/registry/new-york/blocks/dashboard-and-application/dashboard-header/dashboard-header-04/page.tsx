import { ActivityIcon, BellIcon, LanguagesIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'

const Header = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar collapsible='icon'>
          <div className='border-sidebar-foreground/10 m-6 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sidebar-foreground)10%,transparent),color-mix(in_oklab,var(--sidebar-foreground)10%,transparent)_1px,var(--sidebar)_2px,var(--sidebar)_15px)]' />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 flex items-center justify-between gap-6 border-b px-4 py-2 sm:px-6'>
            <div className='flex items-center gap-4'>
              <SidebarTrigger className='[&_svg]:!size-5' />
              <Separator orientation='vertical' className='hidden !h-4 sm:block md:max-lg:hidden' />
              <SearchDialog
                trigger={
                  <>
                    <Button
                      variant='ghost'
                      className='hidden !bg-transparent px-1 py-0 font-normal sm:block md:max-lg:hidden'
                    >
                      <div className='text-muted-foreground hidden items-center gap-1.5 text-sm sm:flex md:max-lg:hidden'>
                        <SearchIcon className='size-4' />
                        <span>Type to search...</span>
                      </div>
                    </Button>
                    <Button variant='ghost' size='icon' className='sm:hidden md:max-lg:inline-flex'>
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
                    <div className='hidden flex-col items-start gap-0.5 sm:flex'>
                      <span className='text-sm font-medium'>John Doe</span>
                      <span className='text-muted-foreground text-xs'>Admin</span>
                    </div>
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
          <footer className='bg-card h-10 border-t px-4 sm:px-6'>
            <div className='border-card-foreground/10 h-full bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Header
