import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

import LogoSvg from '@/assets/svg/logo'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 max-md:hidden sm:px-6'>
        <div className='text-muted-foreground flex items-center gap-6 font-medium'>
          {navigationData.slice(0, 3).map((item, index) => (
            <a key={index} href={item.href} className='hover:text-primary'>
              {item.title}
            </a>
          ))}
        </div>

        <div className='text-muted-foreground flex items-center gap-4'>
          <a href='#' className='hover:text-primary'>
            <SearchIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <UserIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <ShoppingCartIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator className='max-md:hidden' />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <a href='#'>
          <div className='flex items-center'>
            <LogoSvg className='size-8' />
            <span className='ml-3 text-xl font-semibold max-sm:hidden'>shadcn/studio</span>
          </div>
        </a>

        <div className='flex items-center gap-6'>
          <div className='text-muted-foreground flex items-center gap-5 font-medium max-md:hidden'>
            {navigationData.slice(3).map((item, index) => (
              <div key={index} className='text-muted-foreground flex items-center gap-6 font-medium max-md:hidden'>
                <a href={item.href} className='hover:text-primary'>
                  {item.title}
                </a>

                {index < navigationData.slice(3).length - 1 && (
                  <Separator orientation='vertical' className='!h-6 max-md:hidden' />
                )}
              </div>
            ))}
          </div>

          <div className='text-muted-foreground flex items-center gap-4 md:hidden'>
            <a href='#' className='hover:text-primary'>
              <SearchIcon className='size-5' />
            </a>
            <a href='#' className='hover:text-primary'>
              <UserIcon className='size-5' />
            </a>
            <a href='#' className='hover:text-primary'>
              <ShoppingCartIcon className='size-5' />
            </a>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuGroup key={index}>
                  <DropdownMenuItem>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>

                  {index == 2 && <DropdownMenuSeparator />}
                </DropdownMenuGroup>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
