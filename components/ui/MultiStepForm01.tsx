import React from 'react';
import Logo // Logo component - replace with your logo
// // import MultiStep01SVG from '@/assets/svg/multi-step-01'
// Placeholder - asset not available
const MultiStep01SVG = () => null;
// // // import MultiStepForm from '@/components/shadcn-studio/blocks/multi-step-form-01/MultiStepForm'
// Placeholder - original component not available
const MultiStepForm = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const MultiStepFormPage = () => {
  return (
    <div className='flex size-full min-h-dvh flex-col lg:grid lg:grid-cols-12'>
      <div className='bg-muted col-span-4 flex flex-col overflow-hidden max-lg:hidden'> style={{ backgroundColor: theme?.backgroundColor }}
        <div className='flex items-start p-6'>
          <a href='#'>
            <Logo className='gap-3' />
          </a>
        </div>
        <div className='flex size-full items-center justify-center p-6'>
          <MultiStep01SVG />
        </div>
      </div>
      <div className='flex items-start p-4 sm:p-6 lg:hidden'>
        <a href='#'>
          <Logo className='gap-3' />
        </a>
      </div>
      <div className='col-span-8 flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8'>
        <MultiStepForm />
      </div>
    </div>
  )
}

export default MultiStepFormPage
