import React from 'react';
// // // import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-06/app-integration-06'
// Placeholder - original component not available
const AppIntegration = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const partnerApps = [
  {
    name: 'Zapier',
    description: 'Automate workflows across apps seamlessly',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/zapier-icon.png',
    bgColor: 'bg-destructive/10',
    link: '#'
  },
  {
    name: 'Notion',
    description: 'Organize your work and ideas efficiently',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/notion-white.png',
    bgColor: 'bg-primary/10',
    link: '#'
  },
  {
    name: 'Slack',
    description: 'Collaborate and communicate in real time',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/slack-icon.png',
    bgColor: 'bg-green-600/10 dark:bg-green-400/10',
    link: '#'
  },
  {
    name: 'Figma',
    description: 'Design and prototype together, remotely',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/figma-icon.png',
    bgColor: 'bg-destructive/10',
    link: '#'
  },
  {
    name: 'Discord',
    description: 'Connect and chat with teams instantly',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/discord-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10',
    link: '#'
  },
  {
    name: 'Google Meet',
    description: 'Host video calls with ease',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/meet-icon.png',
    bgColor: 'bg-amber-600/10 dark:bg-amber-400/10',
    link: '#'
  },
  {
    name: 'Zoom',
    description: 'Connect with others through video meetings',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/camera-icon.png',
    bgColor: 'bg-sky-600/10 dark:bg-sky-400/10',
    link: '#'
  },
  {
    name: 'Gmail',
    description: 'Manage your emails securely and easily',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/gmail-icon.png',
    bgColor: 'bg-amber-600/10 dark:bg-amber-400/10',
    link: '#'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration partnerApps={partnerApps} />
}

export default AppIntegrationPage
