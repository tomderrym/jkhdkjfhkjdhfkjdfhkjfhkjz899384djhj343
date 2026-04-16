import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-09/app-integration-09'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const appGroups = [
  [
    {
      name: 'Microsoft',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png'
    },
    {
      name: 'Ola',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-icon.png'
    }
  ],
  [
    {
      name: 'Shopify',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-icon.png'
    },
    {
      name: 'Paypal',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png'
    },
    {
      name: 'Spotify',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png'
    }
  ],
  [
    {
      name: 'Whatsapp',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/whatsapp-icon.png'
    },
    {
      name: 'Github',
      image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png'
    }
  ]
]

const AppIntegrationPage = () => {
  return <AppIntegration appGroups={appGroups} />
}

export default AppIntegrationPage
