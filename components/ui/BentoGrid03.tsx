import React from 'react';
// // // import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-03/bento-grid-03'
// Placeholder - original component not available
const BentoGrid = () => <div>Component placeholder</div>;
// Placeholder - original component not available
// // // import type { AvatarItem } from '@/components/shadcn-studio/blocks/bento-grid-03/bento-grid-03'
// Placeholder - original component not available
const type = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const avatars: AvatarItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Howard Lloyd',
    fallback: 'HL',
    designation: 'Product Manager'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Olivia Sparks',
    fallback: 'OS',
    designation: 'Software Engineer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Hallie Richards',
    fallback: 'HR',
    designation: 'UI/UX Designer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Jenny Wilson',
    fallback: 'JW',
    designation: 'Junior Developer'
  }
]

const BentoGridPage = () => {
  return <BentoGrid avatars={avatars} />
}

export default BentoGridPage
