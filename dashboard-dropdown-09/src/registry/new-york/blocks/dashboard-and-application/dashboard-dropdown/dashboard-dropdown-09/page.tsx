import { SwatchBookIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MoreDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-09/theme-dropdown'

const DropdownPage = () => {
  return (
    <div className='flex h-160 items-start justify-center p-8'>
      <MoreDropdown
        defaultOpen
        align='center'
        trigger={
          <Button className='size-10'>
            <SwatchBookIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
