import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'

type FAQs = {
  question: string
  answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </MotionPreset>
          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Leverage artificial intelligence algorithms to provide users with valuable insights.
          </MotionPreset>
        </div>

        {/* FAQ Cards Grid */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {faqItems.map((item, index) => (
            <MotionPreset
              key={index}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={0.6 + index * 0.15}
              transition={{ duration: 0.6 }}
            >
              <Card className='group overflow-hidden pt-0 shadow-none transition-all duration-300 hover:shadow-md'>
                <CardHeader className='bg-muted group-hover:bg-primary group-hover:text-primary-foreground hover:border-b-primary transform grid-rows-1 border-b pt-6 transition-colors duration-300'>
                  <CardTitle className='text-lg font-medium'>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground text-base'>{item.answer}</p>
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
