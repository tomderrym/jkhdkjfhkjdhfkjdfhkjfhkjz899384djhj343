import React from 'react';
// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-10/about-us-page-10'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const achievementsList = [
  { number: '20+', description: 'Years of Valuable Experience' },
  { number: '70+', description: 'Successful Projects and Initiatives' },
  { number: '85+', description: 'Trusted Employees Network' },
  { number: '35+', description: 'Positive Customer Reviews' },
  { number: '15', description: 'Achieve Recognition and Awards' }
]

const AboutUsPage = () => {
  return <AboutUs achievementsList={achievementsList} />
}

export default AboutUsPage
