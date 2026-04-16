import { EllipsisIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MoreDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-05/more-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-120 items-start justify-center p-8'>
      <MoreDropdown
        defaultOpen
        align='center'
        trigger={
          <Button className='size-10'>
            <EllipsisIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
