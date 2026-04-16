import React from 'react';
import { Button } from './button'
// // // import AddPaymentMethodDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-03/dialog-add-payment-method'
// Placeholder - original component not available
const AddPaymentMethodDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
