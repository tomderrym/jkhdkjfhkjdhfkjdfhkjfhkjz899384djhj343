import { HelpCircleIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { MotionPreset } from '@/components/ui/motion-preset'

type FAQs = {
  question: string
  answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* FAQ Header */}
        <div className='mx-auto mb-12 max-w-4xl space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            slide={{ offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </MotionPreset>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Common Inquiries Regarding Our Travel Agency
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.6}
          >
            Utilize advanced artificial intelligence algorithms to deliver meaningful insights for travelers, enhancing
            their experience with our travel agency.
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {faqItems.map((item, index) => (
            <MotionPreset
              key={index}
              fade
              slide={{ offset: 50 }}
              delay={0.9 + index * 0.15}
              transition={{ duration: 0.7 }}
            >
              <Card className='group border-l-primary gap-4 border-0 shadow-none transition-all hover:border-l-4 hover:shadow-md'>
                <CardHeader className='flex items-center justify-between gap-4'>
                  <h3 className='group-hover:text-primary text-lg font-medium transition-colors duration-300'>
                    {item.question}
                  </h3>
                  <Avatar className='size-7'>
                    <AvatarFallback className='bg-muted group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300'>
                      <HelpCircleIcon className='size-4' />
                    </AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <Separator />
                  <p className='text-muted-foreground'>{item.answer}</p>
                </CardContent>
              </Card>
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
