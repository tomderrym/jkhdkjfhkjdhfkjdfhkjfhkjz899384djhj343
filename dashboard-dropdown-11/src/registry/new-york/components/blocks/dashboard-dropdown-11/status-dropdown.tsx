import { CircleIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

type Props = {
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
  userStatus: 'offline' | 'busy' | 'available' | 'on-break' | 'in-meeting'
}

const statusOptions = [
  {
    value: 'offline',
    statusClasses:
      'fill-[color-mix(in_oklab,var(--primary)50%,var(--card))] stroke-[color-mix(in_oklab,var(--primary)50%,var(--card))]',
    label: 'Offline'
  },
  {
    value: 'busy',
    statusClasses: 'fill-destructive stroke-destructive',
    label: 'Busy'
  },
  {
    value: 'available',
    statusClasses: 'fill-green-600 stroke-green-600 dark:fill-green-400 dark:stroke-green-400',
    label: 'Available'
  },
  {
    value: 'on-break',
    statusClasses: 'fill-amber-600 stroke-amber-600 dark:fill-amber-400 dark:stroke-amber-400',
    label: 'On Break'
  },
  {
    value: 'in-meeting',
    statusClasses: 'fill-sky-600 stroke-sky-600 dark:fill-sky-400 dark:stroke-sky-400',
    label: 'In Meeting'
  }
]

const StatusDropdown = ({ defaultOpen, align, userStatus }: Props) => {
  const getStatusIndicatorClasses = (currentStatus: Props['userStatus']) => {
    const statusOption = statusOptions.find(option => option.value === currentStatus)

    return statusOption?.statusClasses || statusOptions[0].statusClasses
  }

  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>
        <div className='relative'>
          <Avatar className='size-10 cursor-pointer rounded-lg'>
            <AvatarImage
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
              alt='John Doe'
              className='rounded-lg'
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <CircleIcon
            className={cn(
              'ring-card absolute -top-1 right-0 size-2 rounded-full ring-2',
              getStatusIndicatorClasses(userStatus)
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-74.5' align={align || 'end'}>
        <DropdownMenuRadioGroup value={userStatus} className='space-y-0.5'>
          {statusOptions.map(option => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className='data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground px-4 py-2.5 text-base [&>span]:hidden'
            >
              <CircleIcon className={cn('size-2.5', option.statusClasses)} />
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusDropdown
