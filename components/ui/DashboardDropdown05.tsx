import React from 'react';
import { EllipsisIcon } from 'lucide-react'

import { Button } from './button'

// // // import MoreDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-05/more-dropdown'
// Placeholder - original component not available
const MoreDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-120 items-start justify-center p-8'>
      <MoreDropdown
        defaultOpen
        align='center'
        trigger={
          <Button className='size-10'>
            <EllipsisIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
