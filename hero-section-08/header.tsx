import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import MenuNavigation from '@/components/shadcn-studio/blocks/menu-navigation'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

import { cn } from '@/components/ui/utils'

import Logo from '@/components/shadcn-studio/logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('fixed top-0 z-50 h-16 w-full bg-neutral-950 transition-all duration-300', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Logo className='gap-3 text-white [&_line]:stroke-black [&_path]:stroke-black [&_rect]:fill-white' />
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          className='max-md:hidden [&_[data-slot=navigation-menu-link]]:text-neutral-300! [&_[data-slot=navigation-menu-link]]:hover:bg-transparent! [&_[data-slot=navigation-menu-link]]:hover:text-neutral-100!'
        />

        {/* Login Button */}
        <Button className='bg-neutral-100 text-neutral-950 hover:bg-neutral-200 max-md:hidden' asChild>
          <a href='#'>Login</a>
        </Button>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
          <Button className='bg--neutral-100 text-neutral-950 hover:bg-neutral-200' asChild>
            <a href='#'>Login</a>
          </Button>

          <MenuDropdown
            align='end'
            navigationData={navigationData}
            trigger={
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
