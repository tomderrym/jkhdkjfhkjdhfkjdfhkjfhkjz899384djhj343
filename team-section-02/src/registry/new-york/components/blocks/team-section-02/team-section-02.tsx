import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type TeamMember = {
  image: string
  alt: string
  name: string
  role: string
  socialLinks: {
    facebook: string
    twitter: string
    instagram: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            Our Team
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Meet Our{' '}
            <span className='relative z-10'>
              <span>Incredible</span>
              <span className='bg-primary absolute bottom-1 left-0 -z-10 h-px w-full' aria-hidden='true' />
            </span>{' '}
            Team
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            We have a diverse group of talented individuals who bring unique skills and perspectives to our projects.
          </MotionPreset>
        </div>

        {/* Team Members */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              slide={{ offset: 50 }}
              delay={0.8 + index * 0.15}
              transition={{ duration: 0.7 }}
            >
              <Card className='group relative overflow-hidden border-0 py-0 shadow-none'>
                <CardContent className='aspect-4/5 max-h-100 w-full px-0'>
                  <img
                    src={member.image}
                    alt={member.alt}
                    className='scale-110 object-cover transition-all duration-500 group-hover:scale-100'
                  />
                </CardContent>
                <div className='absolute right-6 bottom-6 left-6'>
                  <CardHeader className='bg-card group-hover:ring-background ring-card group-hover:bg-primary gap-3 rounded-md py-6 text-center ring-2 transition-all duration-500 group-hover:shadow-xl'>
                    <div>
                      <CardTitle className='group-hover:text-primary-foreground text-lg transition-all duration-500'>
                        {member.name}
                      </CardTitle>
                      <CardDescription className='group-hover:text-primary-foreground text-base transition-all duration-500'>
                        {member.role}
                      </CardDescription>
                    </div>
                    <div className='flex justify-center gap-2'>
                      <Button
                        size='icon'
                        asChild
                        className='size-7 bg-sky-600/10 text-sky-600 transition-all duration-500 hover:bg-sky-600/20 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20 dark:focus-visible:ring-sky-400/40'
                      >
                        <a href={member.socialLinks.facebook}>
                          <FacebookIcon className='size-4.5' />
                          <span className='sr-only'>Facebook</span>
                        </a>
                      </Button>
                      <Button
                        size='icon'
                        asChild
                        className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 group-hover:text-primary-foreground size-7 transition-all duration-500'
                      >
                        <a href={member.socialLinks.twitter}>
                          <TwitterIcon className='size-4.5' />
                          <span className='sr-only'>Twitter</span>
                        </a>
                      </Button>
                      <Button
                        size='icon'
                        asChild
                        className='bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 size-7 transition-all duration-500'
                      >
                        <a href={member.socialLinks.instagram}>
                          <InstagramIcon className='size-4.5' />
                          <span className='sr-only'>Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </div>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
