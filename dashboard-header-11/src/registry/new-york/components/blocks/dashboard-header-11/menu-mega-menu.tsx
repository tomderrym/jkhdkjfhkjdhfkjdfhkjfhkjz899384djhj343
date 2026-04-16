'use client'

import { ChevronRightIcon, CircleSmallIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export type NavigationItem = {
  title: string
  href: string
  description?: string
}

export type NavigationSection = {
  title: string
  contentClassName?: string
} & (
  | {
      items: NavigationItem[]
      splitItems?: boolean
      href?: never
    }
  | {
      items?: never
      splitItems?: never
      href: string
    }
)

const MegaMenu = ({ navigationData }: { navigationData: NavigationSection[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='inline-flex lg:hidden'>
          <MenuIcon />
          <span className='sr-only'>Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        {navigationData.map(navItem => {
          if (navItem.href) {
            return (
              <DropdownMenuItem key={navItem.title} asChild>
                <a href={navItem.href}>{navItem.title}</a>
              </DropdownMenuItem>
            )
          }

          return (
            <Collapsible key={navItem.title} asChild>
              <DropdownMenuGroup>
                <CollapsibleTrigger asChild>
                  <DropdownMenuItem onSelect={event => event.preventDefault()} className='justify-between'>
                    {navItem.title}
                    <ChevronRightIcon className='shrink-0 transition-transform [[data-state="open"]>&]:rotate-90' />
                  </DropdownMenuItem>
                </CollapsibleTrigger>
                <CollapsibleContent className='pl-2'>
                  {navItem.items?.map(item => (
                    <DropdownMenuItem key={item.title} asChild>
                      <a href={item.href}>
                        <CircleSmallIcon />
                        <span>{item.title}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </CollapsibleContent>
              </DropdownMenuGroup>
            </Collapsible>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MegaMenu
