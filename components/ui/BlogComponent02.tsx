import React from 'react';
// // // import Blog from '@/components/shadcn-studio/blocks/blog-component-02/blog-component-02'
// Placeholder - original component not available
const Blog = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const blogPosts = [
  {
    author: 'Dulce Vetrovs',
    date: '5 Sep, 202',
    title: 'Sustainability in Tech: Innovations Driving Change',
    tags: ['Sustainable Future', 'Green Tech'],
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-6.png',
    alt: 'Sustainability',
    blogLink: '#'
  },
  {
    author: 'Emerson Dias',
    date: '16 Nov, 2020',
    title: 'Cybersecurity in the Age of Digital Transformation',
    tags: ['Sustainable Cyber Safe', 'Data Protection'],
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-5.png',
    alt: 'Cybersecurity',
    blogLink: '#'
  },
  {
    author: 'Angel Septimus',
    date: '04 Aug, 2021',
    title: 'The Evolution of Smart Homes: Trends to Watch',
    tags: ['Smart Living', 'Home Automation'],
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-4.png',
    alt: 'Smart Homes',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogPosts={blogPosts} />
}

export default BlogPage
