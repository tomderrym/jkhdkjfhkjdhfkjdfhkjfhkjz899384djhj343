import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-09/blog-component-09'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogSlides = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-36.png',
    alt: 'Development tools',
    badge: 'Angular',
    badgeStyle:
      'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-transparent text-white',
    title: '15 best tools that will help you build your website',
    author: 'Nolan Carder',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-35.png',
    alt: 'Design systems',
    badge: 'React',
    badgeStyle: 'bg-secondary text-secondary-foreground',
    title: 'Most popular design systems to learn from in 2022',
    author: 'Anika Franci',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-34.png',
    alt: 'Accessibility',
    badge: 'eCommerce',
    badgeStyle:
      'border-none bg-green-600 text-white focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400 dark:focus-visible:ring-green-400/40',
    title: 'Understanding accessibility makes you a better',
    author: 'Phillip George',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-33.png',
    alt: 'IDE Apps',
    badge: 'IOS App',
    badgeStyle:
      'border-none bg-sky-600 text-white focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400 dark:focus-visible:ring-sky-400/40',
    title: 'Learn bootstrap 4 in 30 min by building a landing',
    author: 'Zaire Vetrovs',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-42.png',
    alt: 'Development tools',
    badge: 'UI/UX',
    badgeStyle:
      'border-none bg-amber-600 text-white focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-amber-400 dark:focus-visible:ring-amber-400/40',
    title: 'The best way to learn UI/UX in 2022',
    author: 'Maria Donin',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-41.png',
    alt: 'Design systems',
    badge: 'Vue',
    badgeStyle:
      'border-none bg-green-600 text-white focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400 dark:focus-visible:ring-green-400/40',
    title: 'The best way to learn Vue.js in 2022',
    author: 'Carter Saris',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogSlides={blogSlides} />
}

export default BlogPage
