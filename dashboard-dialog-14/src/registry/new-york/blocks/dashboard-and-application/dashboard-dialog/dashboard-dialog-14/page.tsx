import { Button } from '@/components/ui/button'
import AddAddressDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-14/dialog-add-address'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <AddAddressDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Add new address</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
