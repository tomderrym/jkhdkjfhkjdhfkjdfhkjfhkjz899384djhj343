import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='flex h-full min-h-screen flex-1 flex-col py-24'>
      <div className='mx-auto flex w-full max-w-7xl flex-1 items-center px-4 sm:px-6 lg:px-8'>
        {/* Hero Content */}
        <div className='space-y-12 lg:w-1/2 lg:max-w-2xl'>
          <div className='space-y-6'>
            <MotionPreset
              component='h1'
              fade
              slide
              transition={{ duration: 0.5 }}
              className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
            >
              <span className='text-primary'>Effortless SaaS 🚀</span>
              <br />
              Launch Like a Pro in Days
            </MotionPreset>

            <MotionPreset
              component='p'
              fade
              slide
              delay={0.3}
              transition={{ duration: 0.5 }}
              className='text-muted-foreground text-xl font-medium'
            >
              Ship Faster and Focus on Growth with the All-In-One <span className='text-foreground'>TALL Stack</span>{' '}
              Boilerplate.
            </MotionPreset>

            <MotionPreset fade slide delay={0.6} transition={{ duration: 0.5 }} className='flex items-center gap-3'>
              {/* Avatar Group */}
              <div className='flex -space-x-4'>
                {avatars.map((avatar, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                        <AvatarImage src={avatar.src} alt={avatar.name} />
                        <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>{avatar.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>

              <div className='space-y-1'>
                <span className='text-sm'>Loved by great clients</span>

                {/* Rating */}
                <Rating readOnly variant='yellow' size={24} value={4.5} precision={0.5} />
              </div>
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            slide
            delay={0.9}
            transition={{ duration: 0.5 }}
            className='flex flex-wrap items-center gap-4'
          >
            <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
              <a href='#'>Get Started Now</a>
            </Button>
            <Button
              size='lg'
              asChild
              className='bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-base shadow-none'
            >
              <a href='#'>Live Demo</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Hero Image */}
        <div className='absolute top-1/2 right-0 flex max-w-1/2 -translate-y-1/2 flex-col items-center gap-4 overflow-hidden max-lg:hidden'>
          <MotionPreset fade slide={{ direction: 'right' }} zoom delay={1.3} transition={{ duration: 0.5 }}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-1.png'
              alt='hero-image'
              className='max-h-135 translate-x-13 rounded-xl border-[6px] object-cover dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-1-dark.png'
              alt='hero-image'
              className='hidden max-h-135 translate-x-13 rounded-xl border-[6px] object-cover dark:inline-block'
            />
          </MotionPreset>

          {/* Trusted Partners */}
          <MotionPreset
            fade
            slide={{ direction: 'up' }}
            delay={1.6}
            transition={{ duration: 0.5 }}
            className='bg-primary/10 flex translate-x-6.5 gap-2 rounded-full px-3 py-2'
          >
            <a href='#' className='bg-card flex size-9 items-center justify-center rounded-full'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/tailwind-logo.png'
                alt='TailwindCSS Logo'
                className='w-7'
              />
            </a>
            <a href='#' className='bg-card flex size-9 items-center justify-center rounded-full'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/nextjs-logo.png'
                alt='Next.js Logo'
                className='w-5.5'
              />
            </a>
            <a href='#' className='bg-card flex size-9 items-center justify-center rounded-full'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shadcn-logo.png'
                alt='Shadcn Logo'
                className='w-5.5'
              />
            </a>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
