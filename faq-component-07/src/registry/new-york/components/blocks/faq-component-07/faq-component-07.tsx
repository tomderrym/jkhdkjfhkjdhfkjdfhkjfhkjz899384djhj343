import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FAQs = {
  question: string
  answer: string
}[]

const FAQ = ({ faqItems }: { faqItems: FAQs }) => {
  const halfLength = Math.ceil(faqItems.length / 2)
  const firstHalf = faqItems.slice(0, halfLength)
  const secondHalf = faqItems.slice(halfLength)

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* FAQ Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge className='rounded-full text-sm font-normal' variant='outline'>
            FAQs
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Answers to Your Most Common Questions</h2>
          <p className='text-muted-foreground text-xl'>Find Clear Answers to Your Most Frequently Asked Questions</p>
        </div>

        <div className='grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
          {/* Left Accordion */}
          <div>
            <Accordion type='single' collapsible className='w-full rounded-lg border' defaultValue='item-1'>
              {firstHalf.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className='px-5 text-base'>{item.question}</AccordionTrigger>
                  <AccordionContent className='text-muted-foreground px-5 text-base'>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Accordion */}
          <div>
            <Accordion type='single' collapsible className='w-full rounded-lg border'>
              {secondHalf.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className='px-5 text-base'>{item.question}</AccordionTrigger>
                  <AccordionContent className='text-muted-foreground px-5 text-base'>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
