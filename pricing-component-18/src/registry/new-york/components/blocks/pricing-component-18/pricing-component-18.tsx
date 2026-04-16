'use client'

import { useState } from 'react'

import { CircleCheckIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

import { cn } from '@/lib/utils'

type PricingData = {
  intro: { monthly: number; annual: number }
  base: { monthly: number; annual: number }
  pro: { monthly: number; annual: number }
  enterprise: { monthly: number; annual: number }
}

type Plans = {
  key: string
  name: string
  description: string
  isPopular?: boolean
}[]

const Pricing = ({ plans, pricingData }: { plans: Plans; pricingData: PricingData }) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const renderPricing = (planKey: string) => {
    const { monthly, annual } = pricingData[planKey as keyof PricingData]

    return isAnnual ? annual : monthly
  }

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto flex max-w-7xl gap-12 px-4 max-md:flex-col sm:px-6 lg:gap-24 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col gap-8 md:w-140'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                Check out our simple pricing options for your business!
              </h2>
              <p className='text-muted-foreground text-xl'>
                Explore our top subscription plans and choose the one that best suits your needs! Whether you need more
                features or prefer a streamlined option, you can easily tailor your subscription for the perfect fit.
                Adjust your plan today for an enhanced experience!
              </p>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <span className='font-medium'>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span className='font-medium'>Annually</span>
            </div>
          </div>

          <Card>
            <CardContent className='flex flex-col gap-5'>
              <div className='flex flex-row items-center gap-2'>
                <CircleCheckIcon className='size-5 shrink-0' />
                <span className='font-medium'>Free 1 month trial for new users</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <CircleCheckIcon className='size-5 shrink-0' />
                <span className='font-medium'>Cancel anytime you want</span>
              </div>
              <Button className='w-full'>Full Pricing Comparison</Button>
            </CardContent>
          </Card>
        </div>

        <Accordion type='single' collapsible defaultValue='pro' className='space-y-6 md:w-xl'>
          {plans.map(({ key, name, description, isPopular }) => (
            <AccordionItem
              key={key}
              value={key}
              className={cn('bg-card rounded-lg border-0 shadow-md', { 'bg-primary': isPopular })}
            >
              <AccordionTrigger
                className={cn('px-5 py-4 hover:no-underline', { '[&>svg]:text-primary-foreground': isPopular })}
              >
                {isPopular ? (
                  <div className='flex flex-row items-center gap-3'>
                    <span className='text-primary-foreground text-lg font-medium'>{name}</span>
                    {isPopular && (
                      <Badge variant='secondary' className='rounded-full'>
                        Popular
                      </Badge>
                    )}
                  </div>
                ) : (
                  <span className='text-lg font-medium'>{name}</span>
                )}
              </AccordionTrigger>
              <AccordionContent className='px-5 pb-4'>
                <div className={cn('flex flex-col gap-3', { 'text-primary-foreground': isPopular })}>
                  <p className='text-lg'>{description}</p>
                  <div className='flex flex-row items-end justify-between'>
                    <div className='flex gap-1'>
                      <span className='text-sm font-medium'>$</span>
                      <span className='text-3xl font-bold'>{renderPricing(key)}</span>
                      <span className='self-end text-sm font-medium'>/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    <Button variant={isPopular ? 'secondary' : 'default'}>
                      {isPopular ? 'Try 1 month' : `Choose ${name}`}
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Pricing
