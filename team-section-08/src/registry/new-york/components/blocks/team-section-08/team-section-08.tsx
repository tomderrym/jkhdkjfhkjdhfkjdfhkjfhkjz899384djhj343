import * as motion from 'motion/react-client'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type TeamMember = {
  src: string
  alt: string
  className: string
  size: string
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between gap-12 max-lg:flex-col md:gap-16 lg:gap-24'>
          <div className='max-w-xl space-y-4 self-start'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Meet the Experts Behind Our Success!</h2>
            <p className='text-muted-foreground text-xl'>
              A dynamic team of innovators, strategists, and problem-solvers working together to create impactful
              solutions, drive growth, and shape the future of our industry.
            </p>
            <Button asChild size='lg' className='rounded-lg text-base shadow-sm'>
              <a href='#'>Join Our Team</a>
            </Button>
          </div>

          {/* Team Member */}
          <div className='relative h-108 w-100'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={member.className}
                initial={{ scale: 1.1 }}
                animate={{ scale: [1.1, 1.0, 1.1] }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Tooltip>
                  <TooltipTrigger>
                    <img src={member.src} alt={member.alt} className={cn('rounded-full object-cover', member.size)} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{member.alt}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
