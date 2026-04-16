import React from 'react';
import { LayoutPanelTopIcon } from 'lucide-react'

import { Button } from './button'

// // // import DragDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-22/drag-dropdown'
// Placeholder - original component not available
const DragDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <DragDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='lg'>
            <LayoutPanelTopIcon className='size-5' />
            Select Columns
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
