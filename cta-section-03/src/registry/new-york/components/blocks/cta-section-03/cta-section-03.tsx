import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative overflow-hidden rounded-3xl border-none bg-black py-8 shadow-md sm:py-16 lg:py-24'>
          <CardContent className='px-8 sm:px-16 lg:px-24'>
            <MotionPreset
              className='grid grid-cols-1 justify-between gap-6 lg:grid-cols-3'
              fade
              blur
              delay={0.7}
              transition={{ duration: 0.6 }}
            >
              <p className='order-2 max-w-sm text-lg font-medium text-white max-lg:mx-auto max-lg:text-center lg:order-1'>
                Want to be the first to know when we add new components, features, blocks, or releases? Sign up for our
                newsletter and stay in the loop.
              </p>
              <div className='order-1 text-center text-7xl font-bold text-white lg:order-2 lg:py-7'>
                <p>Get In</p>
                <p>Touch</p>
              </div>
              <div className='order-3 self-end justify-self-center lg:order-3 lg:justify-self-end'>
                <Button size='lg' className='rounded-full bg-green-600 text-base shadow-sm'>
                  Get Started for Free
                </Button>
              </div>
            </MotionPreset>
            {/* Hide images on mobile */}
            <MotionPreset
              className='absolute bottom-0 left-14 max-lg:hidden'
              fade
              slide={{ direction: 'down' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-1.png'
                alt='Dashboard Preview1'
                className='w-80'
              />
            </MotionPreset>

            <MotionPreset
              className='absolute top-0 right-4 max-lg:hidden'
              fade
              slide={{ direction: 'up' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-2.png'
                alt='Dashboard Preview2'
                className='w-80'
              />
            </MotionPreset>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
