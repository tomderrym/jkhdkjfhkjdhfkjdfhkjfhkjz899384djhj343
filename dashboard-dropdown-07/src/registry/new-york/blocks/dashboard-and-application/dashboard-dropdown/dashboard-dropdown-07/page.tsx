import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import UserStatDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-07/user-stat-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-154.5 items-start justify-center p-8'>
      <UserStatDropdown
        defaultOpen
        align='center'
        trigger={
          <Avatar className='size-10 cursor-pointer rounded-lg'>
            <AvatarImage
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
              alt='John Doe'
              className='rounded-lg'
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        }
      />
    </div>
  )
}

export default DropdownPage
