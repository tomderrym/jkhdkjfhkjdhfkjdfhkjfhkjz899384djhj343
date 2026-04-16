'use client'

import { useEffect, useState } from 'react'

import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

type Team = {
  image: string
  alt: string
  name: string
  role: string
  description: string
  socialLinks: {
    facebook: string
    twitter: string
    github: string
    instagram: string
  }
}[]

const TeamCard = ({ teamMembers }: { teamMembers: Team }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Carousel
      className='relative w-full space-y-12 sm:space-y-16 lg:space-y-24'
      setApi={setApi}
      opts={{
        align: 'start',
        slidesToScroll: 1
      }}
    >
      <CarouselContent className='-ml-16'>
        {teamMembers.map((member, index) => (
          <CarouselItem key={index} className='pl-16 lg:basis-1/2'>
            <div className='flex items-center justify-center gap-6 max-md:flex-col'>
              <div className='shrink-0'>
                <img src={member.image} alt={member.alt} className='h-76 w-62.5 rounded-2xl object-cover' />
              </div>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-card-foreground mb-1 text-xl font-semibold'>{member.name}</h3>
                  <p className='text-muted-foreground'>{member.role}</p>
                </div>
                <div className='bg-border h-px w-15' />
                <p className='text-muted-foreground'>{member.description}</p>
                <div className='flex gap-3'>
                  <Button
                    size='icon'
                    asChild
                    className='size-7 bg-sky-600/10 text-sky-600 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40'
                  >
                    <a href={member.socialLinks.facebook}>
                      <FacebookIcon className='size-4.5' />
                      <span className='sr-only'>Check</span>
                    </a>
                  </Button>
                  <Button
                    size='icon'
                    asChild
                    className='size-7 bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400/20 dark:focus-visible:ring-amber-400/40'
                  >
                    <a href={member.socialLinks.twitter}>
                      <TwitterIcon className='size-4.5' />
                      <span className='sr-only'>Check</span>
                    </a>
                  </Button>
                  <Button
                    size='icon'
                    asChild
                    className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 size-7'
                  >
                    <a href={member.socialLinks.github}>
                      <GithubIcon className='size-4.5' />
                      <span className='sr-only'>Check</span>
                    </a>
                  </Button>
                  <Button
                    size='icon'
                    asChild
                    className='bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 size-7'
                  >
                    <a href={member.socialLinks.instagram}>
                      <InstagramIcon className='size-4.5' />
                      <span className='sr-only'>Check</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex items-center justify-center gap-4'>
        <CarouselPrevious variant='ghost' className='static size-9 translate-y-0 [&>svg]:!size-6' />
        <Progress
          value={
            isSmallScreen
              ? (current * 100) / teamMembers.length
              : (current * 100) / teamMembers.length + 100 / teamMembers.length
          }
          className='h-1.5 w-50'
        />
        <CarouselNext variant='ghost' className='static size-9 translate-y-0 [&>svg]:!size-6' />
      </div>
    </Carousel>
  )
}

export default TeamCard
