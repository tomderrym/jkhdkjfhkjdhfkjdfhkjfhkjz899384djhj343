import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  'Easy-to-use components',
  'Theming options for customization',
  'Responsive design',
  'Cross-browser compatibility',
  'Comprehensive documentation',
  'Accessibility compliance',
  'Regular updates and improvements',
  'Performance optimization'
]

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='rounded-3xl border-none py-8 shadow-none sm:py-16 lg:py-24'>
          <CardContent className='flex flex-col items-center justify-between gap-16 px-8 sm:px-16 lg:flex-row lg:px-24'>
            <div className='flex grow flex-col gap-8'>
              <h2 className='text-foreground text-2xl font-semibold md:text-3xl lg:text-4xl'>
                Are you ready to enhance your user interface
              </h2>
              <div className='grid gap-2 md:grid-cols-2'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-3 py-1'>
                    <div className='bg-primary flex size-5 items-center justify-center rounded-full p-0.5'>
                      <CheckIcon className='text-primary-foreground size-4' />
                    </div>
                    <span className='font-medium'>{feature}</span>
                  </div>
                ))}
              </div>
              <div className='grid gap-4 md:grid-cols-2'>
                <Button size='lg' className='rounded-lg text-base shadow-sm'>
                  Explore Components
                </Button>
                <Button
                  size='lg'
                  className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 rounded-lg text-base shadow-none'
                >
                  View Documentation
                </Button>
              </div>
            </div>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-5.png'
              alt='UI Enhancement'
              className='max-h-82 rounded-xl dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/cta/image-5-dark.png'
              alt='UI Enhancement'
              className='hidden max-h-82 rounded-xl dark:inline-block'
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
