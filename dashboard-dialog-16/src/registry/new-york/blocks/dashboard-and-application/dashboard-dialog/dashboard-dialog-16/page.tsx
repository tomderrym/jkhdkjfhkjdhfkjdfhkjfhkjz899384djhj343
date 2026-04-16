import { Button } from '@/components/ui/button'
import CreateAppDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-16/dialog-create-app'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <CreateAppDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Create App</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
