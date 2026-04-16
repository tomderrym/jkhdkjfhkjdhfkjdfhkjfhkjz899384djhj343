'use client'

import { useState } from 'react'

import { UserIcon, SettingsIcon, SmartphoneIcon, LogOutIcon, CircleSmallIcon } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const users = [
  {
    id: 1,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'JD',
    name: 'John Doe',
    mail: 'john.doe@example.com'
  },
  {
    id: 2,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'MS',
    name: 'Mia de Silva',
    mail: 'Mia@example.com'
  }
]

const UserDropdown = ({ defaultOpen, align = 'end' }: Props) => {
  const [selectUser, setSelectUser] = useState(users[0])

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger>
        <Avatar className='size-10 cursor-pointer'>
          <AvatarImage src={selectUser.src} alt={selectUser.name} />
          <AvatarFallback>{selectUser.fallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-80' align={align || 'end'}>
        <DropdownMenuGroup className='space-y-0.5'>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <UserIcon className='text-popover-foreground size-5' />
            <span>My profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <SettingsIcon className='text-popover-foreground size-5' />
            <span>Account setting</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <SmartphoneIcon className='text-popover-foreground size-5' />
            <span>Device management</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>
            <LogOutIcon className='text-popover-foreground size-5' />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className='text-muted-foreground font-normal uppercase'>Switch Account</DropdownMenuLabel>

        <DropdownMenuGroup className='space-y-0.5'>
          {users.map(user => (
            <DropdownMenuItem key={user.id} className='px-4 py-2.5 text-base' onClick={() => setSelectUser(user)}>
              <div className='flex items-center gap-4'>
                <Avatar className='size-10'>
                  <AvatarImage src={user.src} alt={user.name} />
                  <AvatarFallback className='text-xs'>{user.fallback}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='truncate leading-none font-semibold'>{user.name}</span>
                  <span className='text-muted-foreground truncate'>{user.mail}</span>
                </div>
              </div>
              {selectUser.id === user.id && (
                <div className='border-input ml-auto flex size-5 items-center justify-center rounded-full border'>
                  <CircleSmallIcon className='fill-primary stroke-primary size-4' />
                </div>
              )}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem className='bg-primary text-primary-foreground focus:text-primary-foreground focus:bg-primary/90 justify-center py-2 font-medium'>
            <LogOutIcon className='text-primary-foreground' />
            <span>Sign Out of all account</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
