import { FacebookIcon, GithubIcon, TwitterIcon } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

type TeamMember = {
  name: string
  role: string
  image: string
  socialLinks: {
    facebook: string
    twitter: string
    github: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        className='mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'
        opts={{
          align: 'start',
          slidesToScroll: 1
        }}
      >
        <div className='sm:w-1/2'>
          <h2 className='mb-4 text-2xl font-semibold sm:text-3xl lg:text-4xl'>Brains behind our success team</h2>
          <p className='text-muted-foreground mb-10 text-xl'>
            We have a diverse group of talented individuals who bring unique skills and perspectives to our projects.
          </p>

          <div className='flex items-center gap-4'>
            <CarouselPrevious
              variant='default'
              className='disabled:text-primary static size-9 translate-y-0 rounded-lg disabled:border disabled:bg-transparent disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:text-primary static size-9 translate-y-0 rounded-lg disabled:border disabled:bg-transparent disabled:opacity-100'
            />
          </div>
        </div>

        <div className='relative sm:w-1/2'>
          <CarouselContent className='sm:-ml-6'>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className='sm:pl-6 lg:basis-1/2'>
                <div className='flex flex-col gap-3'>
                  <img src={member.image} alt={member.name} className='max-h-110 rounded-md object-cover sm:max-h-80' />
                  <div className='flex items-center justify-between gap-1 px-2'>
                    <div>
                      <h4 className='text-card-foreground mb-1 text-lg font-semibold'>{member.name}</h4>
                      <p className='text-muted-foreground'>{member.role}</p>
                    </div>
                    <div className='text-card-foreground flex items-center gap-3'>
                      <a href={member.socialLinks.facebook}>
                        <FacebookIcon className='size-5' />
                      </a>
                      <a href={member.socialLinks.twitter}>
                        <TwitterIcon className='size-5' />
                      </a>
                      <a href={member.socialLinks.github}>
                        <GithubIcon className='size-5' />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  )
}

export default Team
