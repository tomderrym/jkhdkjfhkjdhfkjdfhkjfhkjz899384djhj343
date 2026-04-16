import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-04/app-integration-04'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const designTools = [
  {
    name: 'Sketch',
    description: 'Easily connect your design files across platforms',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/sketch-logo.png',
    classNames: 'bg-[#FDB300]',
    toolLink: '#'
  },
  {
    name: 'Figma',
    description: 'integrate your design files and collabs effortlessly',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png',
    classNames: 'bg-gradient-to-r from-[#7357CB] via-[#1ABCFE] to-[#A259FF]',
    toolLink: '#'
  },
  {
    name: 'Framer',
    description: 'Integrate your design files & enhance collabs',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/framer-logo.png',
    classNames: 'bg-[#1FB6FF]',
    toolLink: '#'
  },
  {
    name: 'Marvel',
    description: 'Simplify your design process with high integrations',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/marvel-logo.png',
    classNames: 'bg-[#1FB6FF]',
    toolLink: '#'
  },
  {
    name: 'Procreate',
    description: 'Bring your designs to life with seamless integration',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/procreate-logo.png',
    classNames: 'bg-[#7357CB]',
    toolLink: '#'
  },
  {
    name: 'Zeplin',
    description: 'Connect your design and development workflows',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/zeplin-logo.png',
    classNames: 'bg-[#FDB300]',
    toolLink: '#'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration designTools={designTools} />
}

export default AppIntegrationPage
