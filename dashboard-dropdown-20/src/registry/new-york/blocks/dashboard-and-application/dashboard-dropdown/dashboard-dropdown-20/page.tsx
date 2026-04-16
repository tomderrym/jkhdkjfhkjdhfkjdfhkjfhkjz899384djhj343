import TagDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-20/tag-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-132 items-start justify-center p-8'>
      <TagDropdown defaultOpen={true} />
    </div>
  )
}

export default DropdownPage
