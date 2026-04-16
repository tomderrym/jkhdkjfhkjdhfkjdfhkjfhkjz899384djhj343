import { SendIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const CTASection = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='bg-background rounded-3xl py-8 shadow-none sm:py-16 lg:py-24'>
          <CardContent className='flex justify-between gap-9 px-8 max-lg:flex-col sm:px-16 lg:items-center lg:px-24'>
            <div className='flex flex-col gap-4'>
              <Badge variant='outline' className='rounded-full text-sm font-normal'>
                Subscribe to our email
              </Badge>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Let&apos;s get started building!</h2>
              <p className='text-muted-foreground text-xl'>
                Easily create a unique landing page with no coding required.
              </p>
            </div>
            <div className='border-primary flex size-fit items-center gap-3 rounded-xl border-2 p-3'>
              <Input type='email' placeholder='Your email address' required className='h-10' />
              <Button size='lg' className='hidden rounded-lg text-base shadow-sm sm:inline-flex'>
                Get started
              </Button>
              <Button size='icon' className='hidden size-10 rounded-lg shadow-sm max-sm:inline-flex'>
                <SendIcon className='size-5' />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTASection
