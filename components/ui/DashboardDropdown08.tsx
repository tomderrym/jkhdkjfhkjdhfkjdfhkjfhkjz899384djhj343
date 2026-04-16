import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

// // // import UserDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-08/user-dropdown'
// Placeholder - original component not available
const UserDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-167 items-start justify-center p-8'>
      <UserDropdown
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
