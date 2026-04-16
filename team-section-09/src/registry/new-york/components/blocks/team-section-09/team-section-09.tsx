import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type TeamMember = {
  name: string
  role: string
  image: string
  classNames: string
  iconHoverColor: string
  socialLinks: {
    github: string
    twitter: string
    linkedin: string
    instagram: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 flex items-center gap-6 max-md:flex-col max-md:text-center sm:mb-16 md:justify-between lg:mb-24'>
          <MotionPreset
            className='space-y-4 md:basis-1/2'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            <div>
              <Badge className='rounded-full text-sm font-normal' variant='outline'>
                Our team
              </Badge>
            </div>
            <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
              The Magic Devs
              <br />
              <span className='font-semibold'>
                You{`'`}ve Been
                <br />
                Searching for
              </span>
            </h2>
          </MotionPreset>

          <MotionPreset
            className='flex flex-col gap-6 max-md:items-center md:basis-1/2'
            fade
            slide={{ direction: 'right', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            <p className='text-muted-foreground text-xl'>
              At the heart of our success is a diverse and talented team dedicated to innovation and excellence.
            </p>
            <Button asChild size='lg' className='w-fit rounded-lg text-base shadow-sm'>
              <a href='#'>Join Our Team</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Team Members */}
        <div className='flex place-content-center gap-6 max-lg:flex-wrap'>
          {teamMembers.map((member, index) => (
            <MotionPreset
              key={index}
              fade
              slide={{ direction: 'down', offset: 50 }}
              delay={0.3 + index * 0.15}
              blur
              transition={{ duration: 0.9 }}
            >
              <div
                className={cn(
                  'group h-max max-w-60 overflow-hidden rounded-full pt-16 text-center transition-all duration-300 hover:ring-2',
                  member.classNames,
                  {
                    'lg:mt-20': index % 2 !== 0
                  }
                )}
              >
                <h3 className='text-card-foreground mb-1 text-lg font-semibold'>{member.name}</h3>
                <p className='text-muted-foreground mb-4'>{member.role}</p>
                <div
                  className={cn(
                    'text-card-foreground mb-10 flex justify-center gap-3 transition-all duration-300',
                    member.iconHoverColor
                  )}
                >
                  <a href={member.socialLinks.github}>
                    <GithubIcon className='size-5' />
                  </a>
                  <a href={member.socialLinks.twitter}>
                    <TwitterIcon className='size-5' />
                  </a>
                  <a href={member.socialLinks.linkedin}>
                    <LinkedinIcon className='size-5' />
                  </a>
                  <a href={member.socialLinks.instagram}>
                    <InstagramIcon className='size-5' />
                  </a>
                </div>
                <img src={member.image} alt={member.name} />
              </div>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
