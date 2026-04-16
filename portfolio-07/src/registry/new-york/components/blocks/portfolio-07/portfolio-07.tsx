import { Badge } from '@/components/ui/badge'

import PortfolioContent from '@/components/shadcn-studio/blocks/portfolio-07/portfolio-content'

export type PortfolioItem = {
  image: string
  title: string
  description: string
}

type PortfolioProps = {
  portfolios: PortfolioItem[]
}

const Portfolio = ({ portfolios }: PortfolioProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-4 text-center'>
          <Badge variant='outline' className='rounded-full text-sm font-normal'>
            Our portfolio
          </Badge>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Our Creative Showcase</h2>

          <p className='text-muted-foreground text-xl'>
            Dive into our extensive portfolio showcasing a diverse range of innovative projects, cutting-edge designs,
            and impactful solutions that push boundaries, drive success, and redefine industry standards.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <PortfolioContent portfolios={portfolios} />
      </div>
    </section>
  )
}

export default Portfolio
