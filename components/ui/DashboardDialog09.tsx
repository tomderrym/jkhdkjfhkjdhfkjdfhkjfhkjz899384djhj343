import React from 'react';
import { Button } from './button'
// // // import VerifyDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-09/dialog-verify'
// Placeholder - original component not available
const VerifyDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <VerifyDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Verify user</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
