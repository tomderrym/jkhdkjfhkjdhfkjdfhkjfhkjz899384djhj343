import type { ComponentType } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type Feature = {
  icon: ComponentType
  title: string
  description: string
}[][]

const Pricing = ({ features }: { features: Feature }) => {
  return (
    <div className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 flex flex-col gap-4 sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Make the best investment</h2>
          <p className='text-muted-foreground w-2/3 text-xl'>
            Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a
            seamless fit!
          </p>
        </div>

        <Card className='py-0'>
          <CardContent className='grid grid-cols-1 justify-between divide-y px-0 lg:grid-cols-3 lg:divide-x'>
            <div className='flex gap-10 p-6 max-md:flex-col lg:col-span-2'>
              {features.map((column, columnIndex) => (
                <div key={columnIndex} className='space-y-6'>
                  {column.map((feature, index) => (
                    <div key={index} className='flex items-center gap-4'>
                      <Avatar className='bg-primary/10 size-12 rounded-md border'>
                        <AvatarFallback className='rounded-md'>
                          <feature.icon />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className='text-lg font-medium'>{feature.title}</h3>
                        <p className='text-muted-foreground'>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className='flex flex-col items-center justify-center gap-3 p-6 text-center'>
              <h3 className='text-primary text-5xl font-bold'>$99</h3>
              <span className='text-sm font-medium'>Lifetime Account</span>
              <Button size='lg'>Subscribe Now</Button>
              <span className='text-muted-foreground text-sm'>30 Days Money back Guarantee</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Pricing
