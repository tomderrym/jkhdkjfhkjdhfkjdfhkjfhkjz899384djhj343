import React from 'react';
import { DownloadIcon, UsersIcon, MessageSquareTextIcon, BoxIcon } from 'lucide-react'

// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-08/about-us-page-08'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const stats = [
  {
    icon: DownloadIcon,
    number: '17M+',
    label: 'Downloads'
  },
  {
    icon: UsersIcon,
    number: '08M+',
    label: 'Followers'
  },
  {
    icon: MessageSquareTextIcon,
    number: '2300+',
    label: 'Reviews'
  },
  {
    icon: BoxIcon,
    number: '150+',
    label: 'Couriers'
  }
]

const AboutUsPage = () => {
  return <AboutUs stats={stats} />
}

export default AboutUsPage
