'use client'

import { useEffect, useRef, useState } from 'react'

import { annotate } from 'rough-notation'

import { Button } from '@/components/ui/button'
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

  const elementRef = useRef<HTMLHeadingElement>(null)
  const annotationRef = useRef<any>(null)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    const element = elementRef.current

    if (annotationRef.current) {
      annotationRef.current.remove()
      annotationRef.current = null
    }

    if (element) {
      const timer = setTimeout(() => {
        const annotation = annotate(element, {
          type: 'underline',
          color: 'var(--primary)',
          strokeWidth: 2,
          animationDuration: 700,
          iterations: 2,
          padding: 2,
          multiline: true
        })

        annotation.show()
        annotationRef.current = annotation
      }, 300)

      return () => {
        clearTimeout(timer)

        if (annotationRef.current) {
          annotationRef.current.remove()
          annotationRef.current = null
        }
      }
    }

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
        annotationRef.current = null
      }
    }
  }, [current])

  return (
    <Carousel setApi={setApi} className='space-y-12 sm:space-y-16 lg:space-y-24'>
      <CarouselContent>
        {portfolios.map((project, index) => (
          <CarouselItem key={index} className='grid items-center gap-6 md:grid-cols-2 md:gap-14'>
            <img src={project.image} alt={project.title} className='h-96 w-full rounded-lg object-cover' />
            <div className='space-y-8'>
              <h3 ref={index === current ? elementRef : null} className='relative inline-block text-2xl font-semibold'>
                {project.title}
              </h3>
              <p className='text-muted-foreground'>{project.description}</p>
              <Button size='lg' asChild>
                <a href='#'>View Details</a>
              </Button>
            </div>
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
