import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import PortfolioContent from '@/components/shadcn-studio/blocks/portfolio-06/portfolio-content'

export type PortfolioItem = {
  image: string
  title: string
  description: string
}

export type PortfolioCategories = {
  [key: string]: PortfolioItem[]
}

type PortfolioProps = {
  portfolios: PortfolioCategories
}

const Portfolio = ({ portfolios }: PortfolioProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-4 text-center'>
          <h2 className='inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Transforming Visions into Reality
          </h2>

          <p className='text-muted-foreground text-xl'>
            Explore our diverse portfolio of projects that push boundaries and inspire change.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue='applications' className='gap-6'>
          {/* Tab List */}
          <div className='overflow-x-auto min-[518px]:flex min-[518px]:justify-center'>
            <ScrollArea className='max-w-129.5 *:data-[slot="scroll-area-viewport"]:p-0.75'>
              <TabsList className='bg-background mb-2 rounded-none border-b p-0'>
                {Object.keys(portfolios).map(category => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className='bg-background! data-[state=active]:border-primary data-[state=active]:text-primary! text-foreground! dark:data-[state=active]:border-primary hover:border-muted-foreground/30 h-full rounded-none border-0 border-b-2 border-transparent focus-visible:z-1 data-[state=active]:shadow-none'
                  >
                    {category
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>

          {/* Tab Content All Projects */}
          {Object.entries(portfolios).map(([category, projects]) => (
            <TabsContent key={category} value={category}>
              <PortfolioContent portfolios={projects} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Portfolio
