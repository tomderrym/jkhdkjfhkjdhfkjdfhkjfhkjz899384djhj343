import React from 'react';
import { Button } from './button'
// // // import ActivityDialog from '@/components/shadcn-studio/blocks/dialog-activity'
// Placeholder - original component not available
const ActivityDialog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DialogPage = () => {
  return (
    <div className='flex h-dvh justify-center p-8'>
      <ActivityDialog defaultOpen trigger={<Button variant='outline'>Open</Button>} />
    </div>
  )
}

export default DialogPage
