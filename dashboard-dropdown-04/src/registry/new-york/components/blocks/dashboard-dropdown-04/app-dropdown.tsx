import type { ReactNode } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const listItems = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-1.png',
    imgAlt: 'google',
    app: 'search'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-2.png',
    imgAlt: 'youtube',
    app: 'Youtube'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-3.png',
    imgAlt: 'map',
    app: 'maps'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-4.png',
    imgAlt: 'gmail',
    app: 'gmail'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-5.png',
    imgAlt: 'drive',
    app: 'drive'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-6.png',
    imgAlt: 'play',
    app: 'play'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-7.png',
    imgAlt: 'calendar',
    app: 'calendar'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-8.png',
    imgAlt: 'news',
    app: 'news'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-9.png',
    imgAlt: 'meet',
    app: 'meet'
  }
]

const MoreDropdown = ({ defaultOpen, align, trigger }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-64' align={align || 'end'}>
        <div className='bg-muted text-muted-foreground grid grid-cols-3 gap-6 rounded-lg px-4 py-6'>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index} className='flex flex-col items-center gap-2 p-0'>
              <img src={item.image} alt={item.imgAlt} className='h-8' />
              <span className='text-sm font-medium capitalize'>{item.app}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreDropdown
