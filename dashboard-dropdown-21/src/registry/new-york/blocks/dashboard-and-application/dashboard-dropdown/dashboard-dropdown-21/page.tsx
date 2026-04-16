import AssignDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-21/assign-dropdown'

const users = [
  {
    value: 'john-doe',
    user: 'John Doe',
    imgSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    initials: 'JD'
  },
  {
    value: 'moris-tom',
    user: 'Moris Tom',
    imgSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    initials: 'MT'
  },
  {
    value: 'emma-wright',
    user: 'Emma Wright',
    imgSrc: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    initials: 'EW'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <AssignDropdown defaultOpen={true} userData={users} />
    </div>
  )
}

export default DropdownPage
