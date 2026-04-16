/**
 * Shadcn Block: hero-section-03
 * Two-column grid layout with left content section featuring motion presets, avatar testimonials with star ratings, and right dual-column vertical marquee scrolling business metrics cards with different scroll speeds
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/hero-section-03/header.tsx
 * Dependencies: lucide-react, motion
 * Registry Dependencies: avatar, badge, button, collapsible, dropdown-menu, navigation-menu, tooltip, utils
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
    <header className={cn('bg-background fixed top-0 z-50 h-16 w-full rounded-b-xl shadow-md', className)}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#'>
          <Logo className='gap-3' />
        </a>

        {/* Navigation */}
        <MenuNavigation navigationData={navigationData} className='max-md:hidden' />

        {/* Theme Button */}
        <Button className='max-md:hidden' asChild>
          <a href='#'>Theme</a>
        </Button>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
          <Button asChild>
            <a href='#'>Theme</a>
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
