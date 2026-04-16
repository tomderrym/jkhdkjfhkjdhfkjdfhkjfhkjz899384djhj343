import { CheckCircle2Icon, RocketIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type PricingData = {
  title: string
  price: string
  features: string[]
  isHighlighted?: boolean
}[]

const Pricing = ({ pricingData }: { pricingData: PricingData }) => {
  return (
    <div className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col gap-4'>
          <p className='text-primary text-sm font-medium tracking-wide uppercase'>Pricing Details</p>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Choose your right plan!</h2>
          <p className='text-muted-foreground text-xl'>
            Select from best plans, ensuring a perfect match. Need more or less?
            <br />
            Customize your subscription for a seamless fit!
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          {pricingData.map((plan, idx) => (
            <Card
              key={idx}
              className={cn('sm:max-md:mx-auto sm:max-md:w-sm', {
                'shadow-primary border-primary': plan.isHighlighted
              })}
            >
              <CardContent className='flex flex-row items-baseline gap-6 max-md:flex-col'>
                <div className='flex w-54 flex-col items-start justify-center gap-3'>
                  <h3 className='text-muted-foreground text-2xl font-semibold'>{plan.title}</h3>
                  <div className='flex items-end gap-0.5'>
                    <span className='text-card-foreground text-4xl font-bold'>{plan.price}</span>
                    <span className='text-muted-foreground text-lg'>/month</span>
                  </div>
                </div>

                <div className='flex flex-1 flex-row gap-6 max-lg:flex-col max-lg:gap-2'>
                  <div className='flex flex-1 flex-col gap-2'>
                    {plan.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className='flex items-center gap-3 py-1'>
                        <CheckCircle2Icon className='text-card-foreground size-4.5 shrink-0' />
                        <span className='text-card-foreground text-base font-medium'>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className='flex flex-1 flex-col gap-2'>
                    {plan.features.slice(3).map((feature, i) => (
                      <div key={i} className='flex items-center gap-3 py-1'>
                        <CheckCircle2Icon className='text-card-foreground size-4.5 shrink-0' />
                        <span className='text-card-foreground text-base font-medium'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant={plan.isHighlighted ? 'default' : 'secondary'} size='lg'>
                  Get started
                  <RocketIcon />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
