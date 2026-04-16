import React from 'react';
import { Button } from './button'
// // // import ChooseSeatsDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-05/dialog-choose-seats'
// Placeholder - original component not available
const ChooseSeatsDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ChooseSeatsDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Choose Seats</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
