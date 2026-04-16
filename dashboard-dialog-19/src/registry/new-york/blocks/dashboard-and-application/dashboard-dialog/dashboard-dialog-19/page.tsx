import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import SearchDialog from '@/components/shadcn-studio/blocks/dialog-search'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <SearchDialog
        defaultOpen
        trigger={
          <Button variant='outline' size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
