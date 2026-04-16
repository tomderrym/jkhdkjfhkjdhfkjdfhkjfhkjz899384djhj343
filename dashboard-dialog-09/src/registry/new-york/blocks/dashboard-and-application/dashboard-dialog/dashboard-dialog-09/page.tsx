import { Button } from '@/components/ui/button'
import VerifyDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-09/dialog-verify'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <VerifyDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Verify user</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
