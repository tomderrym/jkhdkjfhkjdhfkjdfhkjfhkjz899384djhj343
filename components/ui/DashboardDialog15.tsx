import React from 'react';
import { Button } from './button'
// // // import ReferAndEarnDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-15/dialog-refer-and-earn'
// Placeholder - original component not available
const ReferAndEarnDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ReferAndEarnDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Refer friend</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
