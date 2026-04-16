'use client'

import type { ReactNode } from 'react'

import { CirclePlusIcon, CircleXIcon, Share2Icon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
  data: {
    email: string
    role: string
  }[]
}

const InviteMembersDropdown = ({ defaultOpen, align, trigger, data }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='flex w-xs flex-col gap-5 px-6 py-2 sm:w-110' align={align || 'end'}>
        <DropdownMenuLabel className='text-foreground flex flex-col items-center justify-center p-0 text-center text-base font-normal'>
          <div className='bg-muted mb-3 flex size-15 items-center justify-center rounded-full'>
            <Share2Icon className='size-7.5' />
          </div>
          <span className='font-medium'>Invite New Members</span>
          <span className='text-muted-foreground text-sm'>Send invitation to team members</span>
        </DropdownMenuLabel>
        <div className='flex flex-col gap-5 sm:gap-3'>
          {data.map(item => (
            <div key={item.email} className='flex items-center gap-3'>
              <div className='grid flex-1 grid-cols-1 gap-3 sm:grid-cols-12'>
                <Input type='email' placeholder='Email' defaultValue={item.email} className='sm:col-span-7' />
                <Select defaultValue={item.role}>
                  <SelectTrigger className='w-full sm:col-span-5'>
                    <SelectValue placeholder='Select a role' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='developer'>Developer</SelectItem>
                      <SelectItem value='designer'>Designer</SelectItem>
                      <SelectItem value='manager'>Manager</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <CircleXIcon className='shrink-0' />
            </div>
          ))}
        </div>
        <div className='flex w-full items-center justify-between gap-4'>
          <div className='flex items-center gap-1.5 text-sm'>
            <CirclePlusIcon className='size-4' />
            Add another member
          </div>
          <Button size='sm'>
            Invite <Share2Icon />
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default InviteMembersDropdown
