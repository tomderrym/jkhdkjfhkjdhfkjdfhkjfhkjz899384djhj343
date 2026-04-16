import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-03/blog-component-03'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogCards = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-11.png',
    alt: 'Design systems',
    title: 'Most popular design systems to learn from in 2022',
    date: '20 JULY 2022',
    author: 'Nolan Carder',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    role: 'SEO Lead',
    blogLink: '#',
    authorProfileLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-10.png',
    alt: 'Accessibility',
    title: 'Understanding accessibility makes you a better',
    date: '15 OCT 2023',
    author: 'Zaire Vetrovs',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    role: 'Designer',
    blogLink: '#',
    authorProfileLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-6.png',
    alt: 'Design systems',
    title: '15 best tools that will help you build your website',
    date: '20 OCT 2023',
    author: 'Phillip George',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    role: 'Content Writer',
    blogLink: '#',
    authorProfileLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-8.png',
    alt: 'Design systems',
    title: 'Learn bootstrap 4 in 30 min by building a landing',
    date: '20 JULY 2024',
    author: 'Anika Franci',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    role: 'CTO',
    blogLink: '#',
    authorProfileLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} />
}

export default BlogPage
