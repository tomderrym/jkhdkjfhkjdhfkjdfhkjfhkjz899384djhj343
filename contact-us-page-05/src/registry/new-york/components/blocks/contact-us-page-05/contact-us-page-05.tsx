import type { JSX } from 'react/jsx-runtime'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

import { MotionPreset } from '@/components/ui/motion-preset'

type Location = {
  svg: JSX.Element
  location: string
  email: string
  phone: string
  locationLink: string
  bgColor: string
  buttonColor?: string
}[]

const ContactUs = ({ locations }: { locations: Location }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade slide={{ direction: 'down', offset: 50 }} blur transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-full text-sm font-normal'>
              Get in touch with us
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Reach Out for More Information!
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            We&apos;re here to provide answers, guidance, and support—contact us today!
          </MotionPreset>
        </div>

        {/* Location Cards Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {locations.map((loc, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              slide={{ direction: 'down' }}
              zoom={{ initialScale: 0.85 }}
              delay={0.9 + index * 0.1}
              transition={{ duration: 0.6 }}
              className='max-lg:last:col-span-full'
            >
              <Card className='h-full border-none shadow-none'>
                <CardContent>
                  <div className={cn('mb-6 flex h-44 items-center justify-center rounded-lg', loc.bgColor)}>
                    {loc.svg}
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-2xl font-semibold'>{loc.location}</h3>
                    <Separator />
                    <p>{loc.email}</p>
                    <p>{loc.phone}</p>
                    <Button className={cn('w-full rounded-lg text-base shadow-sm', loc.buttonColor)} size='lg' asChild>
                      <a href={loc.locationLink}>View Location in Map</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactUs
