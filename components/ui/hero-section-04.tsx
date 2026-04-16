/**
 * Shadcn Block: hero-section-04
 * Split-screen layout with left content area and right absolute positioned background with curved bottom-left border, floating animated statistics cards with motion effects, user image, and dashed arrow SVG path animation
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/hero-section-04/header.tsx
 * Dependencies: lucide-react, motion
 * Registry Dependencies: avatar, badge, button, card, collapsible, dropdown-menu, navigation-menu, tooltip, utils
 */

'use client'

import { useEffect, useState } from 'react'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

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
        <MenuNavigation navigationData={navigationData} className='max-md:hidden' />

        {/* Login Button */}
        <Button className='rounded-full max-md:hidden' asChild>
          <a href='#'>Login</a>
        </Button>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
          <Button className='rounded-full' asChild>
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
