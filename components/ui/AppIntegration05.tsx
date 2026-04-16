import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-05/app-integration-05'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const integrationApps = [
  {
    name: 'Notion',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/notion-white.png'
  },
  {
    name: 'Shopify',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-icon.png'
  },
  {
    name: 'Figma',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png'
  },
  {
    name: 'Airbnb',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-icon-circle.png'
  },
  {
    name: 'Zapier',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/zapier-icon.png'
  },
  {
    name: 'Slack',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/slack-icon.png'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrationApps} />
}

export default AppIntegrationPage
