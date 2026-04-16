import React from 'react';
// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-07/about-us-page-07'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const statCards = [
  {
    title: '50+ years',
    description: 'Bringing architectural visions to life for 50 years.'
  },
  {
    title: '100+ Projects',
    description: 'Delivered precisely with quality commitment.'
  },
  {
    title: '20+ Awards',
    description: 'Recognizing our innovation and dedication.'
  },
  {
    title: '99% Success',
    description: 'Showing our commitment to client satisfaction.'
  }
]

const featureCards = [
  {
    title: 'Why Choose Us?',
    description: 'Our project management tools boost collaboration and streamline processes.'
  },
  {
    title: 'Our Vision',
    description: 'Our project management tools boost collaboration and streamline processes.'
  },
  {
    title: 'Our Team',
    description: 'Our professionals are dedicated to exceptional results and service.'
  }
]

const AboutUsPage = () => {
  return <AboutUs statCards={statCards} featureCards={featureCards} />
}

export default AboutUsPage
