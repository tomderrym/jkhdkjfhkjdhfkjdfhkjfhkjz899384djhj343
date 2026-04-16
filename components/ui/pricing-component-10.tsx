/**
 * Shadcn Block: pricing-component-10
 * Simplified two-tier pricing with emphasis on value proposition and clear call-to-action buttons.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/pricing-component-10/pricing-component-10.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: badge, button, card, utils
 */

import { CircleCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type Plans = {
  name: string
  price: number
  badge: string | null
}[]

type Features = {
  title: string
  description: string
}[]

const Pricing = ({ plans, features }: { plans: Plans; features: Features }) => {
  return (
    <div className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Badge variant='outline' className='rounded-full text-sm font-normal'>
            PRICING
          </Badge>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Gain A Competitive Edge With Better UI!</h2>
          <p className='text-muted-foreground text-xl'>Gain A Competitive Edge With Better UI!</p>
        </div>
        <Card className='border-none shadow-none'>
          <CardContent className='grid grid-cols-1 gap-0 md:grid-cols-2'>
            <div className='flex items-center border-b pb-10 md:border-r md:border-b-0 md:pr-10 md:pb-0'>
              <div className='flex flex-col items-center gap-6'>
                <div className='flex flex-col items-center gap-4'>
                  <h3 className='text-2xl font-semibold'>Access All Features</h3>
                  <p className='text-muted-foreground'>
                    provides you with the tools & resources you need to build a stunning e-commerce site, portfolio, or
                    dashboard for your business.
                  </p>
                </div>
                <div className='flex w-full flex-col gap-6 lg:flex-row'>
                  {plans.map((plan, index) => (
                    <Card
                      key={index}
                      className={cn('flex-1 shadow-none', { 'border-primary': plan.name === 'Starter' })}
                    >
                      <CardContent className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                          <h3 className='text-2xl font-semibold'>{plan.name}</h3>
                          {plan.badge && <Badge className='bg-primary text-primary-foreground'>{plan.badge}</Badge>}
                        </div>
                        <div className='flex items-end gap-0.5'>
                          <span className='text-3xl font-bold'>${plan.price}</span>
                          <span className='text-muted-foreground text-lg'>/month</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button size='lg' className='w-full'>
                  Start 14 days free trial
                </Button>
              </div>
            </div>

            <div className='flex items-center pt-10 md:pt-0 md:pl-10'>
              <div className='flex flex-col gap-6'>
                {features.map((feature, idx) => (
                  <div key={idx} className='flex items-start gap-2'>
                    <CircleCheckIcon className='mt-1 size-5 shrink-0' />
                    <div>
                      <span className='text-lg font-semibold'>{feature.title}: </span>
                      <span>{feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Pricing
