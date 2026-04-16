import { Button } from '@/components/ui/button'
import AddCardDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-07/dialog-add-card'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <AddCardDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Add card</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
