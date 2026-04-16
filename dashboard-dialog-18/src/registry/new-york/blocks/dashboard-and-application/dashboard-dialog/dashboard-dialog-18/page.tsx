import { Button } from '@/components/ui/button'
import ScheduleMeetingDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-18/dialog-schedule-meeting'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ScheduleMeetingDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Schedule meeting</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
