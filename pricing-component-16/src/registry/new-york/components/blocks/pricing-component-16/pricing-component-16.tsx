import { CheckIcon, CircleDotIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

type Plan = {
  name: string
  description: string
  price: string
  currency: string
  duration: string
  users: string
  features: {
    name: string
    items: string[]
  }[]
  isPopular?: boolean
}

type PaymentMethod = {
  name: string
  imageUrl: string
}

const Pricing = ({ plans, paymentMethods }: { plans: Plan[]; paymentMethods: PaymentMethod[] }) => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='space-y-4 text-center'>
          <p className='text-primary text-sm font-medium uppercase'>Pricing Details</p>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Pick the plan that suits you best</h2>
          <p className='text-muted-foreground text-xl'>* All plans include a free trial.</p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {plans.map(plan => (
            <Card
              key={plan.name}
              className={cn('border-border flex flex-col border-2 shadow-none max-lg:last:col-span-full', {
                'border-primary border shadow-lg': plan.isPopular
              })}
            >
              <CardContent className='flex flex-1 flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    {plan.isPopular ? (
                      <div className='flex items-center gap-4'>
                        <h3 className='text-[30px] font-semibold'>{plan.name}</h3>
                        {plan.isPopular && (
                          <Badge className='bg-destructive/10 text-destructive rounded-lg px-3 py-1 text-xs'>
                            Popular
                          </Badge>
                        )}
                      </div>
                    ) : (
                      <h3 className='text-[30px] font-semibold'>{plan.name}</h3>
                    )}
                    <p className='text-muted-foreground text-base'>{plan.description}</p>
                  </div>
                  <div className='flex gap-0.5'>
                    <span className='text-muted-foreground text-lg font-medium'>{plan.currency}</span>
                    <span className='text-5xl font-semibold'>{plan.price}</span>
                    <span className='text-muted-foreground self-end text-lg'>{plan.duration}</span>
                  </div>
                </div>
                <Separator className='bg-border' />
                <div className='flex justify-start'>
                  <p className='text-lg font-medium'>{plan.users}</p>
                </div>
                <div className='flex flex-1 flex-col gap-5'>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <div className='flex items-center gap-2 py-1'>
                        <CircleDotIcon className='size-2.5 shrink-0' />
                        <span className='text-base font-medium'>{feature.name}</span>
                      </div>
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className='flex items-center gap-2 px-3.5 py-0.5'>
                          <CheckIcon className='size-2.5' />
                          <span className='text-base font-normal'>{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-5 gap-2.5'>
                  {paymentMethods.map((method, methodIndex) => (
                    <div
                      key={methodIndex}
                      className='bg-muted flex h-8 items-center justify-center rounded-sm px-3 py-1'
                    >
                      <img src={method.imageUrl} alt={method.name} className='max-h-full w-full object-contain' />
                    </div>
                  ))}
                </div>
                <Button
                  variant={plan.isPopular ? 'default' : 'secondary'}
                  size='lg'
                  className={
                    !plan.isPopular
                      ? 'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40'
                      : ''
                  }
                >
                  Purchase Now
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
