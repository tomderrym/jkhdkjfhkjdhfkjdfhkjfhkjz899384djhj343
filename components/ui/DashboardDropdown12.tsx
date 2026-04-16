import React from 'react';
import { BellIcon } from 'lucide-react'

import { Button } from './button'
// // // import NotificationDropdown from '@/components/shadcn-studio/blocks/dropdown-notification'
// Placeholder - original component not available
const NotificationDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-150 items-start justify-center p-8'>
      <NotificationDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='icon'>
            <BellIcon className='size-4' />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
