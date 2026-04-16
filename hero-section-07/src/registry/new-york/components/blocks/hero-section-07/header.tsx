'use client'

import { useEffect, useState } from 'react'

import { LogInIcon, MenuIcon, UserPlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/shadcn-studio/blocks/menu-dropdown'
import MenuNavigation from '@/components/shadcn-studio/blocks/menu-navigation'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

import { cn } from '@/lib/utils'

import Logo from '@/components/shadcn-studio/logo'

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-16 w-full transition-all duration-300',
        {
          'bg-card/75 shadow-md backdrop-blur': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Logo className='gap-3' />
        </a>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} className='max-lg:hidden' />

        {/* Actions */}
        <div className='flex gap-4'>
          <Button className='rounded-lg max-sm:hidden' asChild>
            <a href='#'>Login</a>
          </Button>

          <Button className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg max-sm:hidden' asChild>
            <a href='#'>Sign Up</a>
          </Button>

          {/* Navigation for small screens */}
          <div className='flex gap-3'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size='icon' className='sm:hidden' asChild>
                  <a href='#'>
                    <LogInIcon />
                    <span className='sr-only'>Login</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Login</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size='icon' className='text-primary bg-primary/10 hover:bg-primary/20 sm:hidden' asChild>
                  <a href='#'>
                    <UserPlusIcon />
                    <span className='sr-only'>Sign Up</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Sign Up</TooltipContent>
            </Tooltip>

            <MenuDropdown
              align='end'
              navigationData={navigationData}
              trigger={
                <Button variant='outline' size='icon' className='lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
