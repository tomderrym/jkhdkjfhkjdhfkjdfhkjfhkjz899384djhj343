import React from 'react';
import { Button } from './button'

// // // import BalanceDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-03/dropdown-balance'
// Placeholder - original component not available
const BalanceDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-70 items-start justify-center p-8'>
      <BalanceDropdown defaultOpen align='center' trigger={<Button>Balance</Button>} />
    </div>
  )
}

export default DropdownPage
