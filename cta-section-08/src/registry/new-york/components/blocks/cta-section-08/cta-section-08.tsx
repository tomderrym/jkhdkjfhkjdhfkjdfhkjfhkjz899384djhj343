import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='overflow-hidden rounded-3xl border-none pt-6 pb-0 shadow-lg sm:pt-20'>
          <CardContent className='flex gap-10 px-6 max-lg:flex-col max-lg:text-center sm:px-20'>
            <div className='flex-1 space-y-4'>
              <Badge variant='outline' className='rounded-full text-sm font-normal'>
                Subscribe Now
              </Badge>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Stay Updated with Shadcn Studio</h2>
              <p className='text-muted-foreground mb-8 text-xl'>
                Want to be the first to know when we add new components, features, blocks, or releases? Sign up for our
                newsletter and stay in the loop.
              </p>
              <div className='flex flex-wrap items-center gap-6 max-lg:justify-center max-md:w-full max-md:flex-col'>
                <div className='bg-card-foreground flex w-[200px] items-center gap-4 rounded-sm px-5 py-[7px]'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                    alt='App Store'
                    className='size-8.5 invert dark:invert-0'
                  />
                  <div className='flex flex-col items-start'>
                    <p className='text-card text-xs leading-4'>Download on the</p>
                    <p className='text-card text-base leading-6 font-medium opacity-90'>App Store</p>
                  </div>
                </div>
                <div className='bg-card-foreground flex w-[200px] items-center gap-4 rounded-sm px-5 py-[7px]'>
                  <img
                    src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                    alt='Google Play'
                    className='size-8.5'
                  />
                  <div className='flex flex-col items-start'>
                    <p className='text-card text-xs leading-4'>Download on the</p>
                    <p className='text-card text-base leading-6 font-medium opacity-90'>Google Play</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-1 items-end justify-center'>
              <MotionPreset fade blur slide={{ direction: 'down' }} delay={0.6} transition={{ duration: 0.5 }}>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-8.png'
                  alt='Shadcn Studio App Interface'
                  className='w-75'
                />
              </MotionPreset>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
