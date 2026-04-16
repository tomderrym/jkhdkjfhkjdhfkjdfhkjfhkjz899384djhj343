import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-10/blog-component-10'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogSlides = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-46.png',
    alt: 'EduInsights',
    author: 'Maya Smith',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    role: 'Lead Developer',
    date: 'Nov 11, 2023',
    readTime: '4 min read',
    title: 'Creating Awesome Apps with Laravel Boilerplate',
    tags: ['Laravel Basics', 'Best Practices'],
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-37.png',
    alt: 'Laravel Features',
    author: 'Kadin Vetrovs',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    role: 'Software Engineer',
    date: 'Sep 24, 2021',
    readTime: '10 min read',
    title: '10 Essential Features of Laravel Boilerplate',
    tags: ['API Integration', 'Case Studies'],
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-45.png',
    alt: 'Security Practices',
    author: 'Justin George',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    role: 'Cybersecurity Expert',
    date: 'Dec 15, 2020',
    readTime: '8 min read',
    title: 'Security Best Practices for Laravel Applications',
    tags: ['Security Tips', 'Community Insights'],
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-44.png',
    alt: 'EduInsights',
    author: 'Carter Saris',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    role: 'Product Manager',
    date: 'Oct 03, 2023',
    readTime: '5 min read',
    title: 'The Future of Laravel Development',
    tags: ['Laravel Basics', 'Best Practices'],
    blogLink: '#'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-43.png',
    alt: 'Security Practices',
    author: 'Maria Donin',
    authorImg: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    role: 'UI/UX Designer',
    date: 'Jan 22, 2024',
    readTime: '7 min read',
    title: 'Things to know about UI/UX Design',
    tags: ['Tips', 'Design'],
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogSlides={blogSlides} />
}

export default BlogPage
