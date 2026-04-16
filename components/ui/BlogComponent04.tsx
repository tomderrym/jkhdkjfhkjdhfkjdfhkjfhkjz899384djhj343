import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-04/blog-component-04'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const featuredArticles = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-12.png',
    alt: 'UX Design Trends',
    badge: 'Design',
    title: 'User Experience Trends for 2024',
    author: 'Alex Smith',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-13.png',
    alt: 'Accessibility in Design',
    badge: 'UI/UX',
    title: 'Why Accessibility in Design Matters',
    author: 'Nolan Carder',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-18.png',
    alt: 'User Testing Methods',
    badge: 'Research',
    title: 'The Importance of User Testing Methods',
    author: 'Chris Patel',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    blogLink: '#'
  }
]

const editorChoicesCards = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-14.png',
    alt: 'Phone',
    author: 'Alberto Mangini',
    title: 'Designing for Best Practices',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-15.png',
    alt: 'Laptop',
    author: 'Lindsay Stanton',
    title: 'Understanding Visual Hierarchy',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-16.png',
    alt: 'Website',
    author: 'Alfredo George',
    title: 'The Role of Color in UI Design',
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-17.png',
    alt: 'Tablet',
    author: 'Nolan Russell',
    title: 'Tools for Every Designer',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog editorChoicesCards={editorChoicesCards} featuredArticles={featuredArticles} />
}

export default BlogPage
