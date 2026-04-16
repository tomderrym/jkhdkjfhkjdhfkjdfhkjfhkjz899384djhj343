'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
  usersData: {
    id: string
    name: string
    avatar: string
    initials: string
  }[]
}

const SearchDropdown = ({ defaultOpen, align, trigger, usersData }: Props) => {
  const [selected, setSelected] = useState<string[]>(['james-brown'])

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-72.5 space-y-0.5' align={align || 'end'}>
        {usersData.map(user => (
          <DropdownMenuCheckboxItem
            key={user.id}
            className='gap-3 px-3 py-2.5 text-base [&>span]:hidden'
            onClick={e => {
              e.preventDefault()
              const isChecked = selected.includes(user.id)

              if (!isChecked) {
                setSelected([...selected, user.id])
              } else {
                setSelected(selected.filter(id => id !== user.id))
              }
            }}
          >
            <div>
              <Checkbox
                id={user.id}
                checked={selected.includes(user.id)}
                onCheckedChange={checked => {
                  if (checked) {
                    setSelected([...selected, user.id])
                  } else {
                    setSelected(selected.filter(id => id !== user.id))
                  }
                }}
              />
              <Label htmlFor={user.id} className='sr-only'>
                {user.name}
              </Label>
            </div>
            <div className='flex items-center gap-3'>
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              {user.name}
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SearchDropdown
