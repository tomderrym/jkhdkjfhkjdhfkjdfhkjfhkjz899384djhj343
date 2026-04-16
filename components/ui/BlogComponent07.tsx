import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-07/blog-component-07'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogCards = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-26.png',
    alt: 'Search and Discovery',
    title: 'Search and Discovery',
    description:
      'Website visitors expect a seamless search experience, necessitating high usability and efficiency standards for quick...',
    author: 'Nolan Carder',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    role: 'Designer',
    blogLink: '#',
    authorProfileLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-27.png',
    alt: 'Last visits in US',
    title: 'Last visits in US',
    description:
      'Wealth creation is a relatively recent positive-sum game, and those criticizing it are often motivated by a desire for...',
    author: 'Anika Franci',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    role: 'Developer',
    blogLink: '#',
    authorProfileLink: '#'
  }
]

const popularArticles = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-38.png',
    alt: 'US Search',
    title: 'US Search and Discovery Trends',
    author: 'Jonathan Hope',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-39.png',
    alt: 'Search and Discovery',
    title: 'Latest in US Search and Discovery',
    author: 'Jonathan Hope',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-40.png',
    alt: 'US Search Update',
    title: 'US Search and Discovery Update',
    author: 'Jonathan Hope',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} popularArticles={popularArticles} />
}

export default BlogPage
