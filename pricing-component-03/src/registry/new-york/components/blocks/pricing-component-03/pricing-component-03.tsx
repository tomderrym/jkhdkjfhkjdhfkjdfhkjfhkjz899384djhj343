import type { ComponentType } from 'react'

import { CircleCheckIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type Features = {
  icon: ComponentType
  title: string
  description: string
}[]

type PlanFeature = string[][]

const Pricing = ({ features, planFeatures }: { features: Features; planFeatures: PlanFeature }) => {
  return (
    <div className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex gap-16 max-md:flex-col md:gap-20 lg:gap-28'>
          <div className='max-w-121.5 flex-1 space-y-12'>
            <div className='flex flex-col gap-4'>
              <Badge variant='outline' className='rounded-full text-sm font-normal'>
                Pricing detail
              </Badge>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Access All Features</h2>
              <p className='text-muted-foreground text-xl'>
                Insight provides you with the tools & resources you need to build a stunning e-commerce site, portfolio,
                or dashboard for your business.
              </p>
            </div>

            <div className='space-y-8'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start gap-4 [&>svg]:size-6.5 [&>svg]:shrink-0'>
                  <feature.icon />
                  <p>
                    <span className='font-semibold'>{feature.title}</span> {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className='h-fit border-none shadow-lg'>
            <CardContent>
              <div className='flex flex-wrap items-center gap-4 pb-1'>
                <div className='flex-1 space-y-2'>
                  <h3 className='text-3xl font-bold text-nowrap'>Pro Plan</h3>
                  <p className='text-muted-foreground'>per user, billed annually</p>
                </div>
                <div className='flex items-baseline gap-1'>
                  <span className='text-muted-foreground mb-auto text-lg font-medium'>$</span>
                  <span className='text-6xl font-bold'>49</span>
                  <span className='text-muted-foreground text-lg font-medium'>/month</span>
                </div>
              </div>

              <Separator className='-mx-6 mb-6 w-auto' />

              <div className='space-y-4'>
                <h6 className='text-muted-foreground text-xs font-medium'>EVERYTHING IN FREE, PLUS</h6>
                <div className='flex gap-x-6 gap-y-2 max-lg:flex-col'>
                  {planFeatures.map((column, columnIndex) => (
                    <ul key={columnIndex} className='space-y-2'>
                      {column.map((feature, index) => (
                        <li key={index} className='flex items-start gap-3 py-1'>
                          <CircleCheckIcon className='text-primary mt-0.5 size-5 shrink-0' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              <Button className='mt-6 w-full' size='lg'>
                Start 14 days free trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Pricing
