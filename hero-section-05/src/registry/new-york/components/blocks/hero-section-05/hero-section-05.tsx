import { ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='bg-muted relative flex h-full items-center overflow-x-hidden pt-16 lg:min-h-screen'>
      <div className='mx-auto grid h-full max-w-7xl justify-center gap-12 px-4 py-12 pt-16 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24'>
        {/* Left Content */}
        <div className='flex flex-col justify-center gap-8 max-lg:items-center max-lg:text-center'>
          <MotionPreset
            component='h1'
            fade
            slide
            transition={{ duration: 0.5 }}
            className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
          >
            Unlock Your Learning:
            <br />
            The Online Course Companion 🚀
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            slide
            delay={0.3}
            transition={{ duration: 0.5 }}
            className='text-muted-foreground'
          >
            Showcase the value of your community to the business, Talkbase sets the stage for successful
            cross-collaboration among community teams working with customer, marketing, sales and product development.
          </MotionPreset>

          {/* Download Section */}
          <MotionPreset
            fade
            slide
            delay={0.6}
            transition={{ duration: 0.5 }}
            className='flex flex-wrap gap-6 max-lg:justify-center'
          >
            <a href='#' className='text-primary-foreground bg-primary flex items-center gap-4 rounded-md px-6 py-2.5'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                alt='App Store Icon'
                className='h-7 invert dark:invert-0'
              />
              <div>
                <span className='block text-xs'>Download on the</span>
                <span className='font-medium'>App Store</span>
              </div>
            </a>

            <a href='#' className='text-primary-foreground bg-primary flex items-center gap-4 rounded-md px-6 py-2.5'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                alt='Google Play Icon'
                className='h-7'
              />
              <div>
                <span className='block text-xs'>Download on the</span>
                <span className='font-medium'>Google Play</span>
              </div>
            </a>
          </MotionPreset>

          <MotionPreset
            fade
            slide
            delay={0.9}
            transition={{ duration: 0.5 }}
            className='mt-1.5 flex items-center gap-8 max-lg:justify-center'
          >
            <div className='space-y-1'>
              <h3 className='text-4xl font-bold'>1.5M</h3>
              <span className='text-muted-foreground font-medium'>Users using this app</span>
            </div>

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

              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                    <AvatarFallback>
                      <ArrowRightIcon />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>Get the App</TooltipContent>
              </Tooltip>
            </div>
          </MotionPreset>
        </div>

        <div className='flex items-center justify-center lg:justify-end'>
          {/* Right Background */}
          <MotionPreset
            fade
            slide={{ direction: 'right' }}
            delay={1.3}
            transition={{ duration: 0.5 }}
            className='bg-primary absolute inset-y-0 right-0 w-1/3 rounded-tl-[110px] max-lg:hidden'
          />

          {/* Right Image */}
          <MotionPreset
            component='img'
            fade
            blur
            zoom={{ initialScale: 0.8 }}
            delay={1.6}
            transition={{ duration: 0.5 }}
            className='z-1 w-full max-w-[470px]'
            motionProps={{
              src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-14.png',
              alt: 'Person Profile'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
