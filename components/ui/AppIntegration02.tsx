import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-02/app-integration-02'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const integrations = [
  {
    name: 'Mailchimp',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/mailchimp-icon-circle.png'
  },
  {
    name: 'Webflow',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/webflow-icon-circle.png'
  },
  { name: 'Airbnb', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-icon-circle.png' },
  { name: 'Tata', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/tata-icon-circle.png' },
  { name: 'Paypal', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon-circle.png' },
  {
    name: 'Stackoverflow',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/stackoverflow-icon-circle.png'
  },
  { name: 'Huawei', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-icon-circle.png' },
  { name: 'Asana', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/asana-icon-circle.png' },
  { name: 'Hopin', image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hopin-icon-circle.png' }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrations} />
}

export default AppIntegrationPage
