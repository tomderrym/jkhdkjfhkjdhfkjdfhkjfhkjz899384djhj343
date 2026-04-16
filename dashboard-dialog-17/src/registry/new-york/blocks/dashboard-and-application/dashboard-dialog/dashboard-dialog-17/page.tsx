import { Button } from '@/components/ui/button'
import EmployeeDetailsDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-17/dialog-employee-details'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <EmployeeDetailsDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Edit</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
