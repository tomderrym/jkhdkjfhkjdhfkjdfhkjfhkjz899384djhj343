import { GithubIcon, InstagramIcon, MenuIcon, SearchIcon, TwitterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <div className='text-muted-foreground flex items-center gap-4 max-md:hidden'>
          <a href='#' className='hover:text-primary'>
            <GithubIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <TwitterIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <InstagramIcon className='size-5' />
          </a>
        </div>

        <a href='#'>
          <Logo className='gap-3' />
        </a>

        <div className='relative max-md:hidden'>
          <Input type='text' placeholder='Search here...' className='peer rounded-full pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <SearchIcon className='size-4' />
            <span className='sr-only'>Search</span>
          </div>
        </div>

        <div className='flex items-center gap-3 md:hidden'>
          <Button variant='ghost' size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href='#'>Github</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href='#'>Twitter</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href='#'>Instagram</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className='max-md:hidden' />

      <div className='text-muted-foreground mx-auto flex max-w-7xl items-center justify-center gap-10 px-4 py-3 font-medium max-md:hidden sm:px-6'>
        {navigationData.map((item, index) => (
          <a key={index} href={item.href} className='hover:text-primary'>
            {item.title}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
