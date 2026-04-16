import React from 'react';
import { Button } from './button'
// // // import AddAddressDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-14/dialog-add-address'
// Placeholder - original component not available
const AddAddressDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <AddAddressDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Add new address</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
