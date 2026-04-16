import React from 'react';
import { MedalIcon, NewspaperIcon, NotepadTextIcon, StarIcon } from 'lucide-react'

// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-06/about-us-page-06'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const stats = [
  {
    icon: NewspaperIcon,
    title: '33+ years',
    description: 'Influencing Digital Landscapes Together'
  },
  {
    icon: NotepadTextIcon,
    title: '125+ projects',
    description: 'Excellence Achieved Through Success'
  },
  {
    icon: StarIcon,
    title: '96% Reviews',
    description: 'Mirrors our Focus on Client Satisfaction'
  },
  {
    icon: MedalIcon,
    title: '15+ Awards',
    description: 'Our Dedication to Innovation Wins'
  }
]

const AboutUsPage = () => {
  return <AboutUs stats={stats} />
}

export default AboutUsPage
