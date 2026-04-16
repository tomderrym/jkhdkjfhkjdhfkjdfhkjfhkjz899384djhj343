import { Button } from '@/components/ui/button'
import ReferAndEarnDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-15/dialog-refer-and-earn'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ReferAndEarnDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Refer friend</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
