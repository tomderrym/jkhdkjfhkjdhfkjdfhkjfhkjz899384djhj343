'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'
import { NumberTicker } from '@/components/ui/number-ticker'

type Plan = {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  popular?: boolean
}[]

const PricingCards = ({ plans }: { plans: Plan }) => {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-192.25 flex-col gap-24 rounded-[14px] bg-[linear-gradient(0deg,color-mix(in_oklab,var(--primary)40%,transparent)_0%,color-mix(in_oklab,var(--primary)40%,transparent)_100%),linear-gradient(315deg,var(--primary)_17.53%,var(--secondary)_36.13%,var(--primary)_62.6%)] px-6 pt-24 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)])]'>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center gap-4'>
              <MotionPreset
                className='flex flex-col gap-0.5'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className='text-primary-foreground text-center text-4xl font-semibold'>Pricing details</h2>
                <Separator />
              </MotionPreset>

              <MotionPreset
                component='p'
                className='text-primary-foreground text-center text-xl'
                fade
                blur
                slide={{ direction: 'down', offset: 50 }}
                delay={0.3}
                transition={{ duration: 0.5 }}
              >
                A Comprehensive Breakdown of Our Pricing Plans to Help You Make the Best Choice!
              </MotionPreset>
            </div>

            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              <div className='relative flex items-center gap-2'>
                <Tabs
                  value={isYearly ? 'yearly' : 'monthly'}
                  onValueChange={value => setIsYearly(value === 'yearly')}
                  className='bg-muted rounded-full p-1'
                >
                  <TabsList className='h-auto bg-transparent p-0'>
                    <TabsTrigger value='monthly' className='rounded-full px-2 py-1'>
                      <span className='text-sm'>Monthly</span>
                    </TabsTrigger>
                    <TabsTrigger value='yearly' className='rounded-full px-3 py-1'>
                      <span className='text-sm'>Yearly</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className='absolute top-10 left-1/2 flex translate-x-[45%] items-center gap-2'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='44' height='16' viewBox='0 0 44 16' fill='none'>
                    <path
                      d='M42.7527 12.6148C43.2711 12.4243 43.5368 11.8496 43.3463 11.3312C43.1557 10.8128 42.5811 10.5471 42.0627 10.7376L42.7527 12.6148ZM1.6175 0.661136C1.06522 0.661964 0.618177 1.11035 0.619003 1.66263L0.632479 10.6626C0.633305 11.2149 1.08169 11.662 1.63397 11.6611C2.18626 11.6603 2.6333 11.2119 2.63247 10.6596L2.6205 2.65964L10.6205 2.64766C11.1728 2.64683 11.6198 2.19845 11.619 1.64616C11.6182 1.09388 11.1698 0.646836 10.6175 0.647662L1.6175 0.661136ZM42.4077 11.6762L42.0627 10.7376C29.2913 15.4319 20.2525 13.7998 14.005 10.6645C7.68596 7.49328 4.17019 2.79259 2.32505 0.95297L1.619 1.66114L0.912955 2.3693C2.54848 3.99994 6.41085 9.0911 13.1079 12.452C19.8764 15.8488 29.4917 17.4891 42.7527 12.6148L42.4077 11.6762Z'
                      fill='#FAFAFA'
                    />
                  </svg>
                  <Badge className='bg-card text-primary rounded-full'>20% off</Badge>
                </div>
              </div>
            </MotionPreset>
          </div>
        </div>
        <div className='-mt-95 grid grid-cols-1 items-center gap-6 px-8 sm:px-16 lg:grid-cols-3 lg:px-24'>
          {plans.map((plan, index) => (
            <MotionPreset
              key={plan.name}
              fade
              blur
              slide={{ offset: 50 }}
              transition={{ duration: 0.8 }}
              delay={0.9 + index * 0.2}
            >
              <Card
                className={cn('relative h-max max-lg:mx-auto max-lg:max-w-lg', {
                  'border-primary border-2': plan.popular
                })}
              >
                {plan.popular && <Badge className='absolute top-5 -right-3 rounded-r-none px-3 py-1'>Popular</Badge>}
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-card-foreground text-3xl font-semibold'>{plan.name}</h3>
                    <p className='text-muted-foreground text-base'>{plan.description}</p>
                  </div>

                  <div className='flex gap-0.5'>
                    <span className='text-muted-foreground text-lg font-medium'>$</span>
                    <NumberTicker
                      value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      delay={1 + index * 0.2}
                      className='text-card-foreground text-5xl font-bold'
                    />
                    <span className='text-muted-foreground self-end text-lg'>/month</span>
                  </div>

                  <Button variant={plan.popular ? 'default' : 'secondary'}>Subscribe Now</Button>
                  <Separator className='bg-border' />

                  <div className='flex flex-col gap-1.5'>
                    <h4 className='text-card-foreground text-lg font-medium'>Features Included</h4>
                    {plan.features.map((feature, index) => (
                      <div className='flex items-center gap-2 py-1' key={index}>
                        <div className='bg-primary size-2 rounded-full'></div>
                        <span className='text-card-foreground text-base'>{feature}</span>
                      </div>
                    ))}
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

export default PricingCards
