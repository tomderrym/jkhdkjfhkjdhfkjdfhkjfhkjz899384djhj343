import React from 'react';
import { CirclePlusIcon } from 'lucide-react'

import { Button } from './button'

// // // import AppDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-04/app-dropdown'
// Placeholder - original component not available
const AppDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
