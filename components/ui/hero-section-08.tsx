/**
 * Shadcn Block: hero-section-08
 * Dark themed centered layout with animated SVG path underline on heading text, vertical content flow, and horizontal company logos grid with motion stagger effects
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/hero-section-08/header.tsx
 * Dependencies: lucide-react, motion
 * Registry Dependencies: button, collapsible, dropdown-menu, navigation-menu, utils
 */

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
