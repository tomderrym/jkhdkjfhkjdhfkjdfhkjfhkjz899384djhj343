import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import UserDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-08/user-dropdown'

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
