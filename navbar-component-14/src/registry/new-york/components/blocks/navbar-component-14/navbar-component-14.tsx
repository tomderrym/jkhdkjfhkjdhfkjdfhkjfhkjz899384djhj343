import { ArrowRightIcon, GithubIcon, MenuIcon, MailIcon, SearchIcon, SlackIcon } from 'lucide-react'

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

import LogoSvg from '@/assets/svg/logo'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6'>
        <a href='#'>
          <div className='flex items-center'>
            <LogoSvg className='size-8' />
            <span className='ml-3 text-xl font-semibold max-sm:hidden'>shadcn/studio</span>
          </div>
        </a>

        <div className='bg-muted flex items-center gap-6 rounded-md px-5 py-2.5 max-lg:hidden'>
          <div className='text-muted-foreground flex items-center gap-6 font-medium'>
            {navigationData.map((item, index) => (
              <a key={index} href={item.href} className='hover:text-foreground'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='relative max-xl:hidden'>
            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
              <SearchIcon className='size-4' />
              <span className='sr-only'>Search</span>
            </div>
            <Input type='text' placeholder='Type here' className='peer bg-background pl-9' />
          </div>

          <div className='flex gap-4 max-xl:hidden'>
            <Button variant='outline' size='icon' className='bg-transparent shadow-none' asChild>
              <a href='#'>
                <GithubIcon />
              </a>
            </Button>
            <Button variant='outline' size='icon' className='bg-transparent shadow-none' asChild>
              <a href='#'>
                <SlackIcon />
              </a>
            </Button>
            <Button variant='outline' size='icon' className='bg-transparent shadow-none' asChild>
              <a href='#'>
                <MailIcon />
              </a>
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-3 md:gap-4'>
          <Button variant='outline' size='icon' className='xl:hidden'>
            <SearchIcon />
          </Button>

          <Button variant='outline' size='icon' className='max-sm:hidden xl:hidden' asChild>
            <a href='#'>
              <GithubIcon />
            </a>
          </Button>

          <Button variant='outline' size='icon' className='max-sm:hidden xl:hidden' asChild>
            <a href='#'>
              <SlackIcon />
            </a>
          </Button>

          <Button variant='outline' size='icon' className='max-sm:hidden xl:hidden' asChild>
            <a href='#'>
              <MailIcon />
            </a>
          </Button>

          <Button className='group'>
            Get Started
            <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className='lg:hidden' asChild>
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
                <DropdownMenuSeparator className='sm:hidden' />
                <DropdownMenuItem className='sm:hidden'>
                  <a href='#'>Github</a>
                </DropdownMenuItem>
                <DropdownMenuItem className='sm:hidden'>
                  <a href='#'>Slack</a>
                </DropdownMenuItem>
                <DropdownMenuItem className='sm:hidden'>
                  <a href='#'>Email</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
