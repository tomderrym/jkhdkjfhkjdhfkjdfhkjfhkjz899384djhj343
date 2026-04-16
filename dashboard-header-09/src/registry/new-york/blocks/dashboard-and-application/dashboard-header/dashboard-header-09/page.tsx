import { ActivityIcon, BellIcon, LanguagesIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import LogoSvg from '@/assets/svg/logo'
import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'

const Header = () => {
  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='bg-card sticky top-0 z-50 border-b'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
          <a href='#'>
            <div className='flex items-center'>
              <LogoSvg className='size-8.5' />
              <span className='ml-2.5 hidden text-xl font-semibold sm:block'>shadcn/studio</span>
            </div>
          </a>
          <SearchDialog
            className='hidden md:block'
            trigger={
              <Button variant='ghost' className='p-0 font-normal'>
                <div className='text-muted-foreground flex min-w-55 items-center gap-1.5 rounded-md border px-3 py-2 text-sm'>
                  <SearchIcon className='size-4' />
                  <span>Type to search...</span>
                </div>
              </Button>
            }
          />
          <div className='flex items-center gap-1.5'>
            <SearchDialog
              className='block md:hidden'
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
                <Button variant='ghost' className='h-full p-0'>
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
  )
}

export default Header
