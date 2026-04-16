import React from 'react';
import { Button } from './button'
// // // import ScheduleMeetingDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-18/dialog-schedule-meeting'
// Placeholder - original component not available
const ScheduleMeetingDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ScheduleMeetingDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Schedule meeting</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
