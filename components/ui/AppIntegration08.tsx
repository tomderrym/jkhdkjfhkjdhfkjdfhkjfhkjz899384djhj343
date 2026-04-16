import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-08/app-integration-08'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const apps = [
  {
    name: 'Ola',
    description: 'Ola Tech reshapes our access to information.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-icon.png'
  },
  {
    name: 'Apple',
    description: 'Apple has transformed our tech connections.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
  },
  {
    name: 'Notion',
    description: 'Google changed how we find information.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/notion-white.png'
  },
  {
    name: 'Meta',
    description: 'Meta changed how we connect.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/meta-icon.png'
  },
  {
    name: 'Zoom',
    description: 'Zoom changed how we connect.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/camera-icon.png'
  },
  {
    name: 'Framer',
    description: 'Framer revolutionized our data collection.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/framer-logo.png'
  },
  {
    name: 'Slack',
    description: 'Team collaboration tool.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/slack-icon.png'
  },
  {
    name: 'Github',
    description: 'GitHub enhances collaboration.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png'
  },
  {
    name: 'Discord',
    description: 'Discord transforms our connections.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/discord-icon.png'
  },
  {
    name: 'Figma',
    description: 'Figma transformed our connections.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration apps={apps} />
}

export default AppIntegrationPage
