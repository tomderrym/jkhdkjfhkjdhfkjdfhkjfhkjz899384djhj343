/**
 * Shadcn Block: blog-component-08
 * Five-card grid layout featuring educational blog posts with images, titles, descriptions, and "See all blogs" button
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/blog-component-08/blog-component-08.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: button, card, utils
 */

import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type BlogCard = {
  image: string
  alt: string
  title: string
  description: string
  blogLink: string
  classNames?: string
}[]

const Blog = ({ blogCards }: { blogCards: BlogCard }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Blog Grid */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-4 self-center'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>The Blog Corner</h2>
            <p className='text-muted-foreground text-xl'>
              A dedicated space for innovation, learning, and sharing knowledge that makes a difference.
            </p>
            <Button className='group rounded-lg text-base shadow-sm has-[>svg]:px-6' size='lg' asChild>
              <a href='#'>
                See All Blogs
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </Button>
          </div>

          {/* Blog Cards */}
          {blogCards.map((card, index) => (
            <Card key={index} className={cn('group relative overflow-hidden p-0 shadow-none', card.classNames)}>
              <img src={card.image} alt={card.alt} className='h-70 w-full object-cover' />
              {/* Overlay gradients for hover effect */}
              <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-black/0 to-black/85 transition-opacity duration-500 group-hover:opacity-0' />
              <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
              <div className='absolute right-6 bottom-6 left-6 flex items-end justify-between gap-3'>
                <div className='overflow-hidden'>
                  <CardTitle className='mb-1 text-lg font-semibold text-white'>{card.title}</CardTitle>
                  <CardDescription className='truncate text-base text-white'>{card.description}</CardDescription>
                </div>
                <Button size='icon' className='bg-muted text-primary hover:bg-muted/90 rounded-full' asChild>
                  <a href={card.blogLink}>
                    <ExternalLinkIcon className='size-5' />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
