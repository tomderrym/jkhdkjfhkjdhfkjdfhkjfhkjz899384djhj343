'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

type Portfolio = {
  image: string
  title: string
  description: string
}

const PortfolioContent = ({ portfolios }: { portfolios: Portfolio[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const handleResize = () => {
      setCount(api.scrollSnapList().length)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        slidesToScroll: 1
      }}
      className='space-y-12 sm:space-y-16 lg:space-y-24'
    >
      <CarouselContent className='-ml-6'>
        {portfolios.map((project, index) => (
          <CarouselItem key={index} className='pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
            <a href='#'>
              <Card className='group relative aspect-square justify-center overflow-hidden rounded-lg py-0 shadow-none'>
                <img src={project.image} alt={project.title} className='h-full w-full object-cover' />
                <div className='bg-primary/40 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                <CardContent className='absolute inset-0 z-1 flex flex-col justify-center gap-1 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                  <h3 className='text-primary-foreground text-lg font-semibold'>{project.title}</h3>
                  <p className='text-primary-foreground text-xs'>{project.description}</p>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='flex items-center justify-center gap-6'>
        <CarouselPrevious variant='ghost' className='static size-9 translate-y-0' />
        <div className='flex gap-2'>
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'size-3.5 cursor-pointer rounded-full transition-colors',
                index === current ? 'bg-primary' : 'bg-muted'
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselNext variant='ghost' className='static size-9 translate-y-0' />
      </div>
    </Carousel>
  )
}

export default PortfolioContent
