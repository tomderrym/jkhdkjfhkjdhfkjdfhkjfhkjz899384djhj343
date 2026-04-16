import React from 'react';
import { MoreVerticalIcon } from 'lucide-react'

import { Button } from './button'
// // // import MoreOptionsDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-15/dropdown-more-options'
// Placeholder - original component not available
const MoreOptionsDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-150 items-start justify-center p-8'>
      <MoreOptionsDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='icon'>
            <MoreVerticalIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
