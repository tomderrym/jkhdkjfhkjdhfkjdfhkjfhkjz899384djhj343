import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-03/app-integration-03'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const integrations = [
  {
    name: 'Facebook',
    description: 'Connect & engage effortlessly',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png',
    alt: 'Facebook'
  },
  {
    name: 'Github',
    description: 'Streamline your development',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png',
    alt: 'Github'
  },
  {
    name: 'Spotify',
    description: 'Enjoy seamless music integration',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png',
    alt: 'Spotify'
  },
  {
    name: 'Dribble',
    description: 'Showcase your creative work',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/dribbble-icon.png',
    alt: 'Dribble'
  },
  {
    name: 'Slack',
    description: 'Collaborate & stay productive',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/slack-icon.png',
    alt: 'Slack'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrations} />
}

export default AppIntegrationPage
