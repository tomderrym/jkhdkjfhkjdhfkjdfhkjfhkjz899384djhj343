import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

// // // import SimpleProfileDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-10/simple-profile-dropdown'
// Placeholder - original component not available
const SimpleProfileDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <SimpleProfileDropdown
        defaultOpen
        align='center'
        trigger={
          <Avatar className='size-10 cursor-pointer'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' alt='John Doe' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        }
      />
    </div>
  )
}

export default DropdownPage
