/**
 * Shadcn Block: hero-section-11
 * Interactive hero with JavaScript mouse event handlers for 3D perspective transforms, hover tilt effects with rotateX/rotateY, and dynamic box-shadow animations on image container
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/hero-section-11/header.tsx
 * Dependencies: lucide-react, motion
 * Registry Dependencies: button, collapsible, dropdown-menu, navigation-menu, separator, utils
 */

'use client'

import { useEffect, useState } from 'react'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import MenuDropdown from '@/components/builder-components'
import MenuNavigation from '@/components/builder-components'
import type { NavigationSection } from '@/components/builder-components'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
import Logo from '@/components/builder-components'

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
        'sticky top-0 z-50 h-16 transition-all duration-300',
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

        <div className='flex items-center max-md:gap-4'>
          {/* Navigation */}
          <MenuNavigation navigationData={navigationData} className='max-md:hidden' />

          {/* Separator */}
          <Separator orientation='vertical' className='bg-muted-foreground mx-3 h-6! max-md:hidden' />

          {/* Login Button */}
          <Button className='md:ml-4' asChild>
            <a href='#'>Login</a>
          </Button>

          {/* Navigation for small screens */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            trigger={
              <Button variant='outline' size='icon' className='md:hidden'>
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
