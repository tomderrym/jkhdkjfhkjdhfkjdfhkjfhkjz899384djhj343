import { UserPlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

const Team = ({ teamMembers }: { teamMembers: string[] }) => {
  return (
    <section className='max-md:py-16 max-sm:py-8'>
      <div className='mx-auto flex max-w-7xl items-center gap-12 max-md:flex-col md:gap-16 md:px-6 lg:gap-24 lg:px-8'>
        <div className='space-y-4 max-md:px-6 max-sm:px-4'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            Our Team
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            We collaborate effectively, as a dynamic global team
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.6}
          >
            We thrive as a dynamic global team, leveraging diverse expertise to tackle challenges from all angles.
          </MotionPreset>

          <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.9}>
            <Button asChild size='lg' className='rounded-lg text-base shadow-sm has-[>svg]:px-6'>
              <a href='#'>
                <UserPlusIcon />
                Join Our Team
              </a>
            </Button>
          </MotionPreset>
        </div>

        <div className='flex shrink-0 max-md:hidden'>
          <Marquee vertical pauseOnHover duration={20} gap={1.75} className='h-120'>
            {teamMembers.slice(0, 5).map((member, index) => (
              <div key={index}>
                <img src={member} alt={`Avatar ${index + 1}`} className='size-44.5 rounded-lg object-cover' />
              </div>
            ))}
          </Marquee>

          <Marquee vertical pauseOnHover duration={20} gap={1.75} reverse className='h-120'>
            {teamMembers.slice(5, 11).map((member, index) => (
              <div key={index}>
                <img src={member} alt={`Avatar ${index + 1}`} className='size-44.5 rounded-lg object-cover' />
              </div>
            ))}
          </Marquee>
        </div>

        <div className='w-full overflow-hidden md:hidden'>
          <Marquee pauseOnHover duration={20} gap={1.75}>
            {teamMembers.slice(0, 5).map((member, index) => (
              <div key={index}>
                <img src={member} alt={`Avatar ${index + 1}`} className='size-44.5 rounded-lg object-cover' />
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover duration={20} gap={1.75} reverse>
            {teamMembers.slice(5, 11).map((member, index) => (
              <div key={index}>
                <img src={member} alt={`Avatar ${index + 1}`} className='size-44.5 rounded-lg object-cover' />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Team
