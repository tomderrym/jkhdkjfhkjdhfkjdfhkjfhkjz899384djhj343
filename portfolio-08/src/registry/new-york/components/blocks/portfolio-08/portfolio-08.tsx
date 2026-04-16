import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type PortfolioItem = {
  image: string
  type: string
  title: string
  description: string
}

type PortfolioProps = {
  portfolios: PortfolioItem[]
}

const Portfolio = ({ portfolios }: PortfolioProps) => {
  const types = [...new Set(portfolios.map(portfolio => portfolio.type))]

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-3 text-center'>
          <p className='text-primary text-sm font-medium uppercase'>Our portfolio</p>
          <h2 className='inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'>Our Work Speaks for Itself</h2>
          <p className='text-muted-foreground text-xl'>
            Explore a carefully curated collection of our finest projects, where creativity seamlessly blends with
            functionality to deliver impactful solutions, drive meaningful results, and set new benchmarks in
            innovation.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue='all-projects' className='gap-6'>
          {/* Tab List */}
          <div className='min-[476px]:flex min-[476px]:justify-center'>
            <ScrollArea className='max-w-119'>
              <TabsList className='mb-2'>
                <TabsTrigger value='all-projects'>All Projects</TabsTrigger>
                {types.map(type => (
                  <TabsTrigger key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>

          {/* Tab Content All Projects */}
          <TabsContent value='all-projects' className='grid gap-6 sm:grid-cols-2'>
            {portfolios.map((project, index) => (
              <Card key={index} className='grid gap-0 overflow-hidden py-0 shadow-none lg:grid-cols-2'>
                <div className='aspect-video lg:aspect-auto'>
                  <img src={project.image} alt={project.title} className='h-full w-full object-cover' />
                </div>
                <CardContent className='flex flex-col items-start justify-center gap-4 p-6'>
                  <h3 className='text-xl font-semibold'>{project.title}</h3>
                  <p className='text-muted-foreground'>{project.description}</p>
                  <Button
                    size='lg'
                    className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base shadow-none'
                    asChild
                  >
                    <a href='#'>View Details</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Tab Content by Type */}
          {types.map(type => (
            <TabsContent key={type} value={type} className='grid gap-6 sm:grid-cols-2'>
              {portfolios
                .filter(p => p.type === type)
                .map((project, index) => (
                  <Card key={index} className='grid gap-0 overflow-hidden py-0 shadow-none lg:grid-cols-2'>
                    <div className='aspect-video lg:aspect-auto'>
                      <img src={project.image} alt={project.title} className='h-full w-full object-cover' />
                    </div>
                    <CardContent className='flex flex-col items-start justify-center gap-4 p-6'>
                      <h3 className='text-xl font-semibold'>{project.title}</h3>
                      <p className='text-muted-foreground'>{project.description}</p>
                      <Button size='lg' className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg' asChild>
                        <a href='#'>View Details</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Portfolio
