import React from 'react';
import { Button } from './button'
// // // import AuthenticatorDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-08/dialog-authenticator'
// Placeholder - original component not available
const AuthenticatorDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <AuthenticatorDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Verify</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
