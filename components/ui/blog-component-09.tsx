/**
 * Shadcn Block: blog-component-09
 * Three-column blog grid with category badges, author information, and "See all blogs" button for development content
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/blog-component-09/blog-component-09.tsx
 * Dependencies: none
 * Registry Dependencies: avatar, badge, button, card, carousel, utils
 */

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

type BlogSlide = {
  image: string
  alt: string
  badge: string
  badgeStyle: string
  title: string
  author: string
  authorImg: string
  blogLink: string
}[]

const Blog = ({ blogSlides }: { blogSlides: BlogSlide }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex gap-8 max-lg:flex-col sm:mb-16 lg:mb-24'>
          <div className='space-y-4'>
            <div>
              <Badge variant='outline' className='rounded-full text-sm font-normal'>
                Blog List
              </Badge>
            </div>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Latest From Our Blogs</h2>
            <p className='text-muted-foreground text-xl'>
              Discover tips, best practices, and the latest trends in Laravel development. Unlock your potential with
              expert guidance and technical insights to enhance your projects. Stay ahead of the curve by exploring
              innovative solutions and community-driven resources.
            </p>
          </div>

          <Button className='w-fit rounded-lg text-base shadow-sm' size='lg' asChild>
            <a href='#'>See All Blogs</a>
          </Button>
        </div>

        <Carousel
          opts={{
            align: 'start'
          }}
          className='w-full'
        >
          <CarouselContent>
            {blogSlides.map((slide, index) => (
              <CarouselItem key={index} className='pl-6 md:basis-1/2 lg:basis-1/3'>
                <a href={slide.blogLink}>
                  <Card className='relative h-127 overflow-hidden border-0 p-0 shadow-none'>
                    <CardContent className='h-full p-0'>
                      <img src={slide.image} alt={slide.alt} className='h-full w-full object-cover' />
                      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/40' />
                      <div className='absolute right-6 bottom-6 left-6 space-y-4'>
                        <Badge className={cn('text-sm', slide.badgeStyle)}>{slide.badge}</Badge>
                        <CardTitle className='text-xl text-white'>{slide.title}</CardTitle>
                        <div className='flex items-center gap-2.5'>
                          <Avatar className='size-7'>
                            <AvatarImage src={slide.authorImg} alt={slide.author} />
                            <AvatarFallback className='text-xs'>DA</AvatarFallback>
                          </Avatar>
                          <span className='font-medium text-white'>{slide.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default Blog
