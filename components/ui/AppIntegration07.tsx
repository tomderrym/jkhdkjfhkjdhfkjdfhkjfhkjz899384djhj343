import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-07/app-integration-07'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const integrationApps = [
  {
    name: 'Notion',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/notion-white.png',
    bgColor: 'bg-primary/10'
  },
  {
    name: 'Spotify',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png',
    bgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    name: 'Github',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png',
    bgColor: 'bg-primary/10'
  },
  {
    name: 'PayPal',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'Zoom',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/camera-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'Zapier',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/zapier-icon.png',
    bgColor: 'bg-destructive/10'
  },
  {
    name: 'Figma',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png',
    bgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    name: 'Discord',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/discord-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    name: 'Shopify',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-icon.png',
    bgColor: 'bg-green-600/10 dark:bg-green-400/10'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrationApps} />
}

export default AppIntegrationPage
