import { NavigationIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'

const HeroSection = () => {
  return (
    <section className='flex flex-1 flex-col py-12 sm:py-16 lg:py-24'>
      <div className='relative mx-auto flex max-w-7xl flex-1 flex-col gap-12 overflow-hidden px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Content */}
        <div className='flex max-w-4xl flex-col items-center gap-8 self-center text-center'>
          <MotionPreset
            component='h1'
            fade
            blur
            slide
            transition={{ duration: 0.5 }}
            className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
          >
            Your Personal Assistant:
            <br />
            Manage Your <span className='text-primary'>Tasks with Ease</span> 🚀
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            blur
            slide
            delay={0.3}
            transition={{ duration: 0.5 }}
            className='text-muted-foreground'
          >
            Showcase the value of your community to the business, Tlakbase sets the stage for successful
            cross-collaboration among community teams working with customer, marketing, sales and product development.
          </MotionPreset>

          {/* Download Section */}
          <MotionPreset
            fade
            blur
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

          {/* Cursor 1 */}
          <MotionPreset
            fade
            blur
            slide={{ offset: 50, direction: 'down' }}
            delay={0.9}
            transition={{ duration: 0.5 }}
            className='absolute top-1/4 left-48 pt-4 max-lg:hidden'
          >
            <Badge className='rounded-full shadow-lg'>Rose Koch</Badge>
            <NavigationIcon className='text-primary fill-primary absolute top-0 -right-4' />
          </MotionPreset>

          {/* Cursor 2 */}
          <MotionPreset
            fade
            blur
            slide={{ offset: 50, direction: 'down' }}
            delay={1.2}
            transition={{ duration: 0.5 }}
            className='absolute top-6 right-15 pt-4 max-lg:hidden'
          >
            <Badge className='rounded-full bg-sky-600 text-white shadow-lg dark:bg-sky-400'>John Anderson</Badge>
            <NavigationIcon className='absolute top-0 -left-4 rotate-y-180 fill-sky-600 text-sky-600 dark:fill-sky-400 dark:text-sky-400' />
          </MotionPreset>
        </div>

        {/* Hero Image */}
        <MotionPreset
          component='img'
          fade
          blur
          slide={{ direction: 'down' }}
          delay={1.6}
          transition={{ duration: 0.5 }}
          motionProps={{
            src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-21.png',
            alt: 'Mobile Phone'
          }}
          className='mx-auto md:w-9/10'
        />
      </div>
    </section>
  )
}

export default HeroSection
