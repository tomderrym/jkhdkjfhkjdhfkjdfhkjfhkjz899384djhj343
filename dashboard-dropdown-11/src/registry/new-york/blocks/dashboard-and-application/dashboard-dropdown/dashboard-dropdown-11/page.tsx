import StatusDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-11/status-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <StatusDropdown defaultOpen align='center' userStatus='in-meeting' />
    </div>
  )
}

export default DropdownPage
