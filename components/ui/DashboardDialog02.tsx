import React from 'react';
import { Button } from './button'

// // // import ConfirmationDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-02/dialog-confirmation'
// Placeholder - original component not available
const ConfirmationDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ConfirmationDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Join</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
