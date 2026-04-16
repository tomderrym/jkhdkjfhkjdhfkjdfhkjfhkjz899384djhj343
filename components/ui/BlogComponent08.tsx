import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-08/blog-component-08'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogCards = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-29.png',
    alt: 'EduInsights',
    title: 'EduInsights',
    description: 'Sharing expert advice and insights for educational success.',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-28.png',
    alt: 'StudySphere',
    title: 'StudySphere',
    description: 'Exploring innovative study techniques and tools for academic success.',
    classNames: 'md:max-lg:col-span-2',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-32.png',
    alt: 'LearnWise',
    title: 'LearnWise',
    description: 'Empowering students and educators with innovative learning solutions.',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-31.png',
    alt: 'Knowledge Hub',
    title: 'The Knowledge Hub',
    description: 'A comprehensive resource for educational resources and tools.',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-30.png',
    alt: 'Scholarly',
    title: 'Scholarly Steps',
    description: 'Guiding your journey through educational research and resources.',
    classNames: 'md:max-lg:col-span-2',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} />
}

export default BlogPage
