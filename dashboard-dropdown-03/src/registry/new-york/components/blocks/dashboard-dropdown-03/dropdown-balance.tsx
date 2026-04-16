import type { ReactNode } from 'react'

import { BanknoteIcon, CircleDollarSignIcon, HandCoinsIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const listItems = [
  {
    icon: BanknoteIcon,
    report: 'deposit'
  },
  {
    icon: CircleDollarSignIcon,
    report: 'withdraw'
  },
  {
    icon: HandCoinsIcon,
    report: 'payment info'
  }
]

const BalanceDropdown = ({ defaultOpen, align, trigger }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-60' align={align || 'end'}>
        <DropdownMenuLabel className='text-muted-foreground font-normal uppercase'>Your Balance</DropdownMenuLabel>
        <DropdownMenuGroup className='space-y-0.5'>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index} className='px-4 py-2.5 text-base capitalize'>
              <item.icon className='size-5' />
              <span>{item.report}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BalanceDropdown
