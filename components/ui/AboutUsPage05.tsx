import React from 'react';
import { CheckCircleIcon, CreditCardIcon, WalletIcon } from 'lucide-react'

// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-05/about-us-page-05'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const features = [
  {
    icon: CheckCircleIcon,
    title: 'Quick Summaries',
    description: 'Offers concise summaries of over 6,500 nonfiction books, each designed to be read or listened.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-14.png',
    imageAlt: 'Quick summaries illustration'
  },
  {
    icon: CreditCardIcon,
    title: 'Request Payments',
    description:
      'Online tool that summarizes texts such as articles, scientific papers, and books. It identifies key ideas and facts.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-13.png',
    imageAlt: 'Request payments illustration'
  },
  {
    icon: WalletIcon,
    title: 'Manage your wallets',
    description: 'Provides summaries of popular nonfiction books, focusing on actionable insights for personal growth.',
    imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-12.png',
    imageAlt: 'Manage wallets illustration'
  }
]

const AboutUsPage = () => {
  return <AboutUs features={features} />
}

export default AboutUsPage
