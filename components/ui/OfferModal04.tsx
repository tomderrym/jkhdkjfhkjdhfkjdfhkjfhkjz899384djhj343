import React from 'react';
// // // import OfferModal from '@/components/shadcn-studio/blocks/offer-modal-04/offer-modal-04'
// Placeholder - original component not available
const OfferModal = () => <div>Component placeholder</div>;
// Placeholder - original component not available
import { Button } from './button'

const OfferModalPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <OfferModal defaultOpen trigger={<Button variant='outline'>Offer Modal</Button>} />
    </div>
  )
}

export default OfferModalPage
