import { Button } from '@/components/ui/button'
import AddPaymentMethodDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-03/dialog-add-payment-method'

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <AddPaymentMethodDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Add payment method</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
