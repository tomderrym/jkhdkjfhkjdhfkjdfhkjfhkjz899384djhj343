import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { WobbleCard } from '@/components/ui/wobble-card'

const Portfolio = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8'>
        {/* Section Header */}
        <WobbleCard containerClassName='rounded-xl col-span-full'>
          <div className='flex gap-11 rounded-xl bg-green-600/10 p-6 max-md:flex-col md:items-center dark:bg-green-400/10'>
            <div className='flex-1 space-y-4'>
              <h2 className='text-xl font-semibold'>We Provide Cutting-Edge, Transformative Tech Solutions 🚀</h2>

              <p className='text-muted-foreground text-xl'>
                We provide cutting-edge, transformative tech solutions that drive innovation, optimize processes, and
                accelerate growth, helping businesses stay ahead in a rapidly evolving digital landscape.
              </p>
            </div>

            <div className='h-47 w-full overflow-hidden rounded-lg md:w-70'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-41.png'
                alt='Team collaborating on tech solutions'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </WobbleCard>

        {/* Portfolio Item 1 */}
        <WobbleCard containerClassName='rounded-xl'>
          <Card className='border-none bg-sky-600/10 py-8 shadow-none dark:bg-sky-400/10'>
            <CardContent className='space-y-11 px-8'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-40.png'
                alt='Manufacturing process automation for footwear'
                className='w-full'
              />

              <div className='space-y-3.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-78.png'
                  alt='Relaxo Footwears'
                  className='h-5 w-auto'
                />

                <div className='flex items-center gap-2'>
                  <h3 className='text-primary flex-1 text-xl font-medium'>
                    Manufacturing process automation for footwear
                  </h3>
                  <Button
                    size='icon'
                    className='bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:hover:bg-sky-400/90 dark:focus-visible:ring-sky-400/40'
                    asChild
                  >
                    <a href='#'>
                      <ArrowRightIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </WobbleCard>

        {/* Portfolio Item 2 */}
        <WobbleCard containerClassName='rounded-xl'>
          <Card className='bg-destructive/10 border-none shadow-none'>
            <CardContent className='space-y-11'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-39.png'
                alt='TIMRPE : Payroll management system'
                className='w-full'
              />

              <div className='space-y-3.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-79.png'
                  alt='TIMRPE'
                  className='h-5 w-auto'
                />

                <div className='flex items-center gap-2'>
                  <h3 className='text-primary flex-1 text-xl font-medium'>TIMRPE : Payroll management system</h3>
                  <Button variant='destructive' size='icon' asChild>
                    <a href='#'>
                      <ArrowRightIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </WobbleCard>

        {/* Portfolio Item 3 */}
        <WobbleCard containerClassName='rounded-xl'>
          <Card className='border-none bg-amber-600/10 shadow-none max-lg:col-span-full dark:bg-amber-400/10'>
            <CardContent className='space-y-11'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-38.png'
                alt='Selling Platform for leading Furniture brand'
                className='w-full'
              />

              <div className='space-y-3.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-80.png'
                  alt='Evok Furniture'
                  className='h-5 w-auto'
                />

                <div className='flex items-center gap-2'>
                  <h3 className='text-primary flex-1 text-xl font-medium'>
                    Selling Platform for leading Furniture brand
                  </h3>
                  <Button
                    size='icon'
                    className='bg-amber-600 text-white hover:bg-amber-600/90 focus-visible:ring-amber-600/20 dark:bg-amber-400/60 dark:hover:bg-amber-400/90 dark:focus-visible:ring-amber-400/40'
                    asChild
                  >
                    <a href='#'>
                      <ArrowRightIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </WobbleCard>
      </div>
    </section>
  )
}

export default Portfolio
