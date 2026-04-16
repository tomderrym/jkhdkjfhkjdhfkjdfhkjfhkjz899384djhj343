/**
 * Shadcn Block: cta-section-05
 * Black card with white badge and text, decorative side images, and floating email input form with get started button positioned below the card
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/cta-section-05/cta-section-05.tsx
 * Dependencies: lucide-react, motion
 * Registry Dependencies: badge, button, card, input
 */

import { SendIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

// // import LogoVector from '@/assets/svg/logo-vector'
// Placeholder - asset not available
const LogoVector = () => null;
const CTASection = () => {
  return (
    <section className='pt-8 pb-16 sm:py-16 lg:py-24'>
      <div className='bg-background mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='relative overflow-hidden rounded-3xl border-none bg-black pt-20 pb-32 text-center shadow-2xl max-sm:pt-10 max-sm:pb-15'>
          <CardContent className='px-6'>
            <div className='flex flex-col items-center justify-center gap-4'>
              <MotionPreset
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                <Badge variant='outline' className='rounded-full border-white text-sm font-normal text-white'>
                  Subscribe now
                </Badge>
              </MotionPreset>
              <MotionPreset
                component='h2'
                className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.6}
                transition={{ duration: 0.5 }}
              >
                Stay Updated with Shadcn studio
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-xl text-balance text-white lg:w-10/12'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.9}
                transition={{ duration: 0.5 }}
              >
                Want to be the first to know when we add new components, features, blocks, or releases? Sign up for our
                newsletter and stay in the loop.
              </MotionPreset>
            </div>
            <MotionPreset
              className='absolute top-0 -left-64 text-[#F4F4F5]/10 max-sm:-left-60'
              fade
              slide
              transition={{ duration: 0.8 }}
            >
              <LogoVector className='size-150 rotate-143 max-sm:size-100' />
            </MotionPreset>

            <MotionPreset
              className='absolute top-0 -right-64 text-[#F4F4F5]/10 max-sm:-right-60'
              fade
              slide={{ direction: 'right' }}
              transition={{ duration: 0.8 }}
            >
              <LogoVector className='size-150 rotate-25 max-sm:size-100' />
            </MotionPreset>
          </CardContent>
        </Card>

        <MotionPreset fade blur zoom={{ initialScale: 0.95 }} delay={1.2} transition={{ duration: 0.7 }}>
          <div className='border-primary bg-background relative mx-auto -mt-9.25 flex size-fit gap-2.5 rounded-xl border-2 p-3'>
            <Input type='email' placeholder='Your email address' className='h-10' required />
            <Button size='lg' className='hidden rounded-lg text-base shadow-sm sm:inline-flex'>
              Get started
            </Button>
            <Button size='icon' className='hidden size-10 rounded-lg shadow-sm max-sm:inline-flex'>
              <SendIcon className='size-5' />
            </Button>
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default CTASection
