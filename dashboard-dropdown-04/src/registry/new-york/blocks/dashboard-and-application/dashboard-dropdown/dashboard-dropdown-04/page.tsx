import { CirclePlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import AppDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-04/app-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-120 items-start justify-center p-8'>
      <AppDropdown
        defaultOpen
        align='center'
        trigger={
          <Button className='bg-primary/10 text-primary hover:bg-primary/20 size-12.5 shadow-none'>
            <CirclePlusIcon className='size-6.5' />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
