import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

const HeroSection = () => {
  return (
    <section className='min-h-screen flex-1 overflow-hidden pt-49 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-22 px-4 sm:gap-49 sm:px-6 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center gap-8 text-center'>
          <MotionPreset
            fade
            slide
            transition={{ duration: 0.5 }}
            className='flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-3 py-2'
          >
            <span className='rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-medium text-neutral-50'>
              AI-Powered
            </span>
            <span className='text-neutral-500'>Solution for client-facing businesses</span>
          </MotionPreset>

          <h1 className='relative text-3xl leading-[1.29167] font-bold text-white sm:text-4xl lg:text-5xl'>
            <MotionPreset component='span' fade slide delay={0.4} transition={{ duration: 0.7 }} className='block'>
              Unlimited email design
            </MotionPreset>

            <MotionPreset component='span' fade slide delay={0.7} transition={{ duration: 0.7 }} className='block'>
              One low-priced monthly rate.
            </MotionPreset>

            <svg
              width='402'
              height='15'
              viewBox='0 0 402 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute -bottom-2.5 left-[28%] max-md:hidden'
            >
              <MotionPreset
                component='path'
                delay={0.9}
                transition={{ duration: 0.7 }}
                motionProps={{
                  d: 'M2.11657 12.6443C77.7735 6.50977 148.406 3.60813 224.607 2.20872C280.919 1.17455 340.804 6.03954 396.499 8.54297M396.499 8.54297C407.66 8.73244 384.031 7.50791 396.499 8.54297Z',
                  stroke: 'white',
                  strokeWidth: '3.19044',
                  strokeLinecap: 'round',
                  variants: {
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1
                    }
                  }
                }}
              />
            </svg>
          </h1>

          <MotionPreset component='p' fade slide delay={1.4} transition={{ duration: 0.5 }} className='text-white'>
            Dive into a world of flavor this summer with our collection of Sizzling
            <br />
            Summer Delights! From refreshing appetizers to delightful desserts
          </MotionPreset>

          <MotionPreset fade slide delay={1.7} transition={{ duration: 0.5 }}>
            <Button
              size='lg'
              className='rounded-lg bg-white text-base text-black shadow-sm hover:bg-white/90 max-md:hidden'
              asChild
            >
              <a href='#'>Join the waitlist</a>
            </Button>
          </MotionPreset>
        </div>

        {/* List of Companies */}
        <div className='flex flex-col items-center gap-10 text-center'>
          <MotionPreset
            component='p'
            fade
            slide
            delay={2.2}
            transition={{ duration: 0.5 }}
            className='font-semibold text-white uppercase'
          >
            Trusted by this great Companies
          </MotionPreset>

          <MotionPreset
            fade
            slide
            delay={2.5}
            transition={{ duration: 0.5 }}
            className='flex flex-wrap items-center justify-center gap-8'
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png'
              alt='University of Mississippi'
              className='h-10.5 w-auto shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png'
              alt='Star Health'
              className='h-13 w-auto shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png'
              alt='DHL'
              className='h-5 w-auto shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png'
              alt='Sense Arena'
              className='h-15 w-auto shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png'
              alt='Shemaroo'
              className='h-10.5 w-auto shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/mercedes-benz-logo.png'
              alt='Mercedes Benz'
              className='h-10.5 w-auto shrink-0'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
