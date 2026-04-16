import React from 'react';
// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-09/about-us-page-09'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const stats = [
  {
    title: 10,
    value: 'Completed Projects'
  },
  {
    title: 15,
    value: 'Satisfied Customers'
  },
  {
    title: 48,
    value: 'Years of Mastery'
  }
]

const AboutUsPage = () => {
  return <AboutUs avatars={avatars} stats={stats} />
}

export default AboutUsPage
