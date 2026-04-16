import { MoreVerticalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import MoreOptionsDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-15/dropdown-more-options'

const DropdownPage = () => {
  return (
    <div className='flex h-150 items-start justify-center p-8'>
      <MoreOptionsDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='icon'>
            <MoreVerticalIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
