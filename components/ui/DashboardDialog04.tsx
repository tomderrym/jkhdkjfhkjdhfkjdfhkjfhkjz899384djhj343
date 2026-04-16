import React from 'react';
import { Button } from './button'
// // // import WorkspaceDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-04/dialog-workspace'
// Placeholder - original component not available
const WorkspaceDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <WorkspaceDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Connect</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
