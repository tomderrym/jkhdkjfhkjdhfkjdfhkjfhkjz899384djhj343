import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-01/app-integration-01'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const integrations = [
  {
    name: 'Microsoft',
    description: 'Empowering Innovation and Connectivity',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png',
    alt: 'Microsoft'
  },
  {
    name: 'Spotify',
    description: 'Your soundtrack to every moment.',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png',
    alt: 'Spotify'
  },
  {
    name: 'Github',
    description: 'Your Hub for Open Source Innovation',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png',
    alt: 'Github'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrations} />
}

export default AppIntegrationPage
