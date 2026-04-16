import type { ReactNode } from 'react'

import { BanIcon, BookmarkIcon, CopyIcon, CornerDownRightIcon, MailIcon, PinIcon, StarIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const BalanceDropdown = ({ defaultOpen, align, trigger }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-81.5' align={align || 'end'}>
        <DropdownMenuGroup className='space-y-0.5'>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <CornerDownRightIcon className='text-popover-foreground size-5' />
            <span>Reply</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <PinIcon className='text-popover-foreground size-5' />
            Pin
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className='my-2' />
        <DropdownMenuGroup className='space-y-0.5'>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <BookmarkIcon className='text-popover-foreground size-5' />
            <span>Save this message</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <StarIcon className='text-popover-foreground size-5' />
            <span>Mark as unread</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <MailIcon className='text-popover-foreground size-5' />
            <span>Share via email</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className='my-2' />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className='px-4 py-2.5 text-base'>More actions</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={4}>
                <DropdownMenuItem>
                  <CopyIcon className='text-popover-foreground size-4' />
                  <span>Copy</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant='destructive'>
                  <BanIcon className='text-popover-foreground size-4' />
                  <span>Report</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BalanceDropdown
