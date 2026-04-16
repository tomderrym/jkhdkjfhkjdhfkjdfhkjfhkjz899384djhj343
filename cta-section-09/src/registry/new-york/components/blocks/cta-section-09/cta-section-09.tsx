import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative overflow-hidden rounded-3xl border-none bg-black py-8 shadow-none sm:py-16 lg:py-24'>
          <CardContent className='px-8 sm:px-16 lg:px-24'>
            <div className='space-y-4 md:max-w-96 xl:max-w-md'>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
                fade
                blur
                slide
                transition={{ duration: 0.5 }}
              >
                Take Your Website to the Next Level!
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-white'
                fade
                blur
                slide
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                With a variety of unique blocks, you can effortlessly create a page without any coding. Build your next
                landing page with ease.
              </MotionPreset>

              <MotionPreset fade blur slide delay={0.6} transition={{ duration: 0.5 }}>
                <Button
                  size='lg'
                  variant='secondary'
                  className='rounded-lg text-base shadow-sm has-[>svg]:px-6'
                  asChild
                >
                  <a href='#' className='inline-flex items-center gap-2'>
                    7 Day Free Trial
                    <ArrowRightIcon className='h-5 w-5' />
                  </a>
                </Button>
              </MotionPreset>
            </div>

            <MotionPreset
              className='absolute -top-20 -right-20 scale-120 max-lg:-bottom-9 max-lg:hidden xl:right-0'
              fade
              blur
              slide={{ direction: 'right' }}
              delay={0.6}
              transition={{ duration: 0.7 }}
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-6.png'
                alt='Website Mockups Grid'
                className='max-h-173 w-full dark:hidden'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-6-dark.png'
                alt='Website Mockups Grid'
                className='hidden max-h-173 w-full dark:inline-block'
              />
            </MotionPreset>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
