import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type PortfolioItem = {
  image: string
  date: string
  title: string
  className?: string
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
          <h2 className='inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'>Experience Our Excellence</h2>

          <p className='text-muted-foreground text-xl'>
            A portfolio that highlights our dedication to innovation, quality, and meaningful solutions.
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
            <TabsContent key={category} value={category} className='grid gap-6 sm:grid-cols-2 lg:grid-cols-6'>
              {projects.map((project, index) => (
                <a key={index} href='#' className={project.className}>
                  <Card className='group relative h-full overflow-hidden border-none py-0 shadow-none'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <CardContent className='absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-b from-transparent to-black/75 pt-14 pb-6'>
                      <p className='text-xs text-white'>{project.date}</p>
                      <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Portfolio
