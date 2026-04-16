'use client'

import { useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Props = {
  defaultOpen?: boolean
  userData: {
    value: string
    user: string
    imgSrc: string
    initials: string
  }[]
}

const AssignDropdown = ({ defaultOpen, userData }: Props) => {
  const id = useId()
  const [open, setOpen] = useState(defaultOpen)
  const [selectedValues, setSelectedValues] = useState<string[]>(['john-doe', 'moris-tom'])

  const toggleSelection = (value: string) => {
    setSelectedValues(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]))
  }

  // Define maxShownItems before using visibleItems
  const maxShownItems = 2
  const visibleItems = selectedValues.slice(0, maxShownItems)
  const hiddenCount = selectedValues.length - visibleItems.length

  return (
    <div className='w-full max-w-35'>
      <Label htmlFor={id} className='sr-only'>
        Multiple combobox expandable
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='h-auto min-h-8 w-full justify-between hover:bg-transparent'
          >
            <div className='flex -space-x-2'>
              {selectedValues.length > 0 ? (
                <>
                  {visibleItems.map(val => {
                    const user = userData.find(c => c.value === val)

                    return user ? (
                      <Avatar key={val} className='ring-background ring-2'>
                        <AvatarImage src={user.imgSrc} alt={user.user} />
                        <AvatarFallback className='text-xs'>{user.initials}</AvatarFallback>
                      </Avatar>
                    ) : null
                  })}
                  {hiddenCount > 0 ? (
                    <Avatar className='ring-background ring-2'>
                      <AvatarFallback className='text-xs'>+{hiddenCount}</AvatarFallback>
                    </Avatar>
                  ) : null}
                </>
              ) : (
                <span className='text-muted-foreground'>Select users</span>
              )}
            </div>
            <ChevronsUpDownIcon size={16} className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-74.25 p-0'>
          <Command className='gap-1 py-3 [&_[data-slot=command-input-wrapper]]:mx-3 [&_[data-slot=command-input-wrapper]]:rounded-md [&_[data-slot=command-input-wrapper]]:border'>
            <div className='flex items-center justify-between px-3 pb-2'>
              <span className='text-base font-semibold'>Assign</span>
              <PlusIcon className='size-5' />
            </div>

            <CommandSeparator className='mb-1.5' />

            <CommandInput placeholder='Search user' />
            <CommandList>
              <CommandEmpty>No user found.</CommandEmpty>
              <CommandGroup className='px-3'>
                {userData.map(user => (
                  <CommandItem
                    key={user.value}
                    value={user.value}
                    onSelect={() => toggleSelection(user.value)}
                    className='[&_svg:not([class*="text-"])]:!text-popover-foreground justify-between px-3 py-2.5'
                  >
                    <div className='flex items-center gap-2'>
                      <Avatar className='size-5'>
                        <AvatarImage src={user.imgSrc} alt={user.user} />
                        <AvatarFallback className='text-xs'>{user.initials}</AvatarFallback>
                      </Avatar>
                      <span className='truncate text-base'>{user.user}</span>
                    </div>
                    {selectedValues.includes(user.value) && <CheckIcon className='size-5 stroke-[1.5]' />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default AssignDropdown
