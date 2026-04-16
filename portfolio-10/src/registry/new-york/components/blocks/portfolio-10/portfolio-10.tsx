import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Portfolio = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8'>
        {/* Left Content */}
        <div className='space-y-10'>
          <div className='space-y-3'>
            <p className='text-primary font-semibold uppercase'>Our Portfolio</p>

            <h2 className='text-3xl font-semibold'>See What We&apos;ve Built</h2>

            <p className='text-muted-foreground text-xl'>
              From initial concept to flawless execution, explore a diverse range of projects that showcase our
              expertise, creativity, and commitment to innovation, delivering solutions that make a lasting impact.
            </p>
          </div>

          <Button size='lg' asChild className='rounded-lg text-base shadow-sm'>
            <a href='#'>View Full Details</a>
          </Button>
        </div>

        {/* Right Portfolio Items */}
        <div className='space-y-6'>
          {/* Row 1 */}
          <Card className='grid gap-0 overflow-hidden py-0 shadow-none sm:grid-cols-2'>
            <div className='aspect-video sm:aspect-auto'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-2.png'
                alt='AI-Powered DevOps'
                className='h-full w-full object-cover'
              />
            </div>
            <CardContent className='flex flex-col items-center justify-center gap-4 p-6'>
              <h3 className='text-center text-xl font-semibold'>AI-Powered DevOps</h3>
              <p className='text-muted-foreground text-center'>
                Boost DevOps efficiency with AI-driven automation for CI/CD & monitoring response.
              </p>
              <Button
                size='lg'
                className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base shadow-none'
                asChild
              >
                <a href='#'>View Details</a>
              </Button>
            </CardContent>
          </Card>

          {/* Row 2 */}
          <Card className='grid gap-0 overflow-hidden py-0 shadow-none sm:grid-cols-2'>
            <CardContent className='flex flex-col items-center justify-center gap-4 p-6'>
              <h3 className='text-center text-xl font-semibold'>DevSecOps in Action</h3>
              <p className='text-muted-foreground text-center'>
                Integrate security seamlessly into CI/CD pipelines with SAST, DAST, and dependency scanning tools.
              </p>
              <Button
                size='lg'
                className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base shadow-none'
                asChild
              >
                <a href='#'>View Details</a>
              </Button>
            </CardContent>
            <div className='aspect-video max-sm:order-first sm:aspect-auto'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-3.png'
                alt='DevSecOps in Action'
                className='h-full w-full object-cover'
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
