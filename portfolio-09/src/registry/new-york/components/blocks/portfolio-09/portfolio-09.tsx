import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import type { LucideProps } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

import PortfolioCard from '@/components/shadcn-studio/blocks/portfolio-09/portfolio-card'

export type FeatureItem = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  title: string
  description: string
}

export type PortfolioItem = {
  image: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  title: string
  date: string
}

type PortfolioProps = {
  features: FeatureItem[]
  portfolios: PortfolioItem[]
}

const Portfolio = ({ features, portfolios }: PortfolioProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8'>
        {/* Left Content */}
        <div className='space-y-10 self-center'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Bringing Ideas to Life</h2>

            <p className='text-muted-foreground text-xl'>
              Discover a thoughtfully curated selection of our most exceptional work, meticulously crafted with passion,
              precision, and a clear purpose to drive innovation and meaningful impact.
            </p>
          </div>

          {/* Feature List */}
          <ul className='space-y-10'>
            {features.map((feature, index) => (
              <li key={index} className='flex gap-3'>
                <Avatar className='border-primary/20 size-9 rounded-lg border'>
                  <AvatarFallback className='text-primary bg-transparent'>
                    <feature.icon className='size-5' />
                  </AvatarFallback>
                </Avatar>
                <div className='space-y-2'>
                  <h3 className='text-lg font-medium'>{feature.title}</h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button size='lg' asChild className='rounded-lg text-base shadow-sm'>
            <a href='#'>View Full Details</a>
          </Button>
        </div>

        {/* Right Portfolio Items */}
        <div className='grid gap-6 sm:grid-cols-2'>
          {/* Column 1 */}
          <div className='flex flex-col justify-center gap-6'>
            {portfolios.slice(0, 3).map((item, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                zoom={{ initialScale: 0.9 }}
                delay={0.1 + index * 0.065}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard portfolio={item} />
              </MotionPreset>
            ))}
          </div>

          {/* Column 2 */}
          <div className='flex flex-col justify-center gap-6'>
            {portfolios.slice(3).map((item, index) => (
              <MotionPreset
                key={index}
                fade
                blur
                zoom={{ initialScale: 0.9 }}
                delay={0.23 + index * 0.065}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard portfolio={item} />
              </MotionPreset>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
