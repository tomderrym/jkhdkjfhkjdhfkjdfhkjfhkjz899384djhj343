import React from 'react';
import { LanguagesIcon } from 'lucide-react'

import { Button } from './button'

// // // import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
// Placeholder - original component not available
const LanguageDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const DropdownPage = () => {
  return (
    <div className='flex h-70 items-start justify-center p-8'>
      <LanguageDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='icon'>
            <LanguagesIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
