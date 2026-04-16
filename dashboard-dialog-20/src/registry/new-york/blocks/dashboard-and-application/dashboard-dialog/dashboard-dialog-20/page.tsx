import { Button } from '@/components/ui/button'
import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'

const DialogPage = () => {
  return (
    <div className='flex h-dvh justify-center p-8'>
      <ActivityDialog defaultOpen trigger={<Button variant='outline'>Open</Button>} />
    </div>
  )
}

export default DialogPage
