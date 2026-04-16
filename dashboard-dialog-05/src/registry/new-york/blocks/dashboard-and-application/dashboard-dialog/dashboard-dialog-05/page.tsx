import { Button } from '@/components/ui/button'
import ChooseSeatsDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-05/dialog-choose-seats'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ChooseSeatsDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Choose Seats</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
