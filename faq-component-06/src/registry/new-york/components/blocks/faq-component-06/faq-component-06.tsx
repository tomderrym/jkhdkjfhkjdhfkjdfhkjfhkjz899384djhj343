import type { ComponentType } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MotionPreset } from '@/components/ui/motion-preset'

type FAQs = {
  icon: ComponentType
  question: string
  answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='bg-muted mb-12 space-y-4 rounded-md px-6 py-12 text-center sm:mb-16 lg:mb-24'>
          <Badge className='rounded-full text-sm font-normal' variant='outline'>
            FAQs
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Frequently Inquired Queries</h2>
          <p className='text-muted-foreground mb-8 text-xl'>
            Utilize cutting-edge artificial intelligence techniques to deliver valuable insights for travelers.
          </p>
          <div className='mx-auto flex max-w-sm gap-3 max-sm:flex-col max-sm:items-center'>
            <Input type='text' placeholder='Search your question' className='bg-background h-10 flex-1' />
            <Button size='lg' className='rounded-lg text-base shadow-sm'>
              Search
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {faqItems.map((item, index) => {
            const IconComponent = item.icon

            return (
              <MotionPreset
                key={index}
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={index * 0.15}
                transition={{ duration: 0.7 }}
              >
                <Card className='hover:border-primary shadow-none transition-colors duration-300'>
                  <CardContent className='space-y-4'>
                    <Avatar className='size-10 rounded-md'>
                      <AvatarFallback className='bg-muted rounded-md [&>svg]:size-4'>
                        <IconComponent />
                      </AvatarFallback>
                    </Avatar>
                    <h3 className='text-lg font-semibold'>{item.question}</h3>
                    <p className='text-muted-foreground'>{item.answer}</p>
                  </CardContent>
                </Card>
              </MotionPreset>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
