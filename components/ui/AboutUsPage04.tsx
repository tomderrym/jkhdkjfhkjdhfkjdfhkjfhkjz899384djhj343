import React from 'react';
// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-04/about-us-page-04'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const tabs = [
  {
    name: 'Our Story',
    value: 'our-story',
    content: {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-6.png',
      title: 'Our story begins with a passion for excellence',
      description:
        "We started with a small team of dedicated professionals committed to making a difference. Through years of hard work and perseverance, we've grown into a community of innovators and problem-solvers. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of quality in everything we do.",
      buttonText: 'Learn More',
      buttonLink: '#'
    }
  },
  {
    name: 'Our Mission',
    value: 'our-mission',
    content: {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-15.png',
      title: "We're all about creating awesome resources that help you succeed!",
      description:
        "We understand the immense importance of high-quality educational materials in fostering effective learning experiences. That's why we are deeply committed to supporting educators in their vital roles. Our mission is to provide our users with exceptional resources, comprehensive tools, and steadfast support, ensuring they have everything they need to thrive in their teaching endeavors. We believe that by empowering educators with the best materials and assistance, we can significantly enhance the learning journey for students everywhere.",
      buttonText: 'Get started',
      buttonLink: '#'
    }
  },
  {
    name: 'Our Vision',
    value: 'our-vision',
    content: {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-16.png',
      title: 'Our vision is to transform how people learn and grow',
      description:
        'We envision a world where quality education is accessible to everyone, regardless of their background or circumstances. We strive to create innovative solutions that break down barriers to learning and enable individuals to reach their full potential. By combining cutting-edge technology with human-centered design, we aim to build a future where education is engaging, effective, and empowering for all.',
      buttonText: 'Discover more',
      buttonLink: '#'
    }
  }
]

const AboutUsPage = () => {
  return <AboutUs data={tabs} />
}

export default AboutUsPage
