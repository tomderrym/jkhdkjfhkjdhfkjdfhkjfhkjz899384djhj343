import { Button } from '@/components/ui/button'

import SearchDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-14/search-dropdown'

const users = [
  {
    id: 'john-doe',
    name: 'John Doe',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    initials: 'JD'
  },
  {
    id: 'arthur-gauthier',
    name: 'Arthur Gauthier',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    initials: 'AG'
  },
  {
    id: 'james-brown',
    name: 'James Brown',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    initials: 'JB'
  },
  {
    id: 'emma-wright',
    name: 'Emma Wright',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    initials: 'EW'
  },
  {
    id: 'laura-perez',
    name: 'Laura Perez',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    initials: 'LP'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <SearchDropdown
        defaultOpen
        align='center'
        trigger={<Button variant='outline'>Select User</Button>}
        usersData={users}
      />
    </div>
  )
}

export default DropdownPage
