/**
 * Shadcn Block: portfolio-04
 * Motion-preset portfolio grid with animated cards and smooth transitions for modern project presentations
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/portfolio-04/portfolio-04.tsx
 * Dependencies: motion
 * Registry Dependencies: button, card, utils
 */

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
export type PortfolioItem = {
  image: string
  date: string
  title: string
}

type PortfolioProps = {
  portfolios: PortfolioItem[]
}

const Portfolio = ({ portfolios }: PortfolioProps) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset
            component='h2'
            fade
            slide={{ direction: 'down', offset: 50 }}
            transition={{ duration: 0.4 }}
            className='inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'
          >
            Our Works
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.4 }}
            className='text-muted-foreground text-xl'
          >
            A showcase of our innovative projects, creative solutions, and impactful collaborations that drive success,
            inspire change, and redefine industry standards.
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.4 }}
            className='flex justify-center'
          >
            <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
              <a href='#'>View Full Details</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Portfolio Items */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={cn('space-y-6', {
                'sm:mt-24': colIndex === 1 || colIndex === 3
              })}
            >
              {portfolios
                .filter((_, index) => index % 4 === colIndex)
                .map((project, index) => (
                  <MotionPreset
                    key={index}
                    fade
                    delay={
                      0.9 +
                      ((Array.from({ length: colIndex }).reduce(
                        (sum: number, _, i) => sum + portfolios.filter((_, idx) => idx % 4 === i).length,
                        0
                      ) +
                        index) *
                        5) /
                        100
                    }
                    slide={{ direction: 'up', offset: 6 }}
                    blur
                    transition={{ duration: 0.4 }}
                    className='group relative overflow-hidden rounded-xl transition-shadow duration-500 hover:shadow-2xl'
                  >
                    <img src={project.image} alt={project.title} className='aspect-auto w-full object-cover' />

                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                    <Card className='border-primary group-hover:animate-in group-hover:slide-in-from-bottom-4 group-hover:fade-in absolute inset-x-6 bottom-6 py-4 opacity-0 transition-all duration-500 group-hover:opacity-100'>
                      <CardContent className='space-y-1 px-4 text-center'>
                        <span className='text-muted-foreground text-xs'>{project.date}</span>
                        <h3 className='text-lg font-semibold'>{project.title}</h3>
                      </CardContent>
                    </Card>
                    <div className='bg-card absolute top-0 left-0 px-2'>{}</div>
                  </MotionPreset>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
