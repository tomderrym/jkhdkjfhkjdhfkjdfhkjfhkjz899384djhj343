import { Button } from '@/components/ui/button'
import WorkspaceDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-04/dialog-workspace'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <WorkspaceDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Connect</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
