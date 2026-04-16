import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type PortfolioItem = {
  image: string
  type: string
  category: string
  title: string
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
        <div className='space-y-4 text-center'>
          <p className='text-primary text-sm font-medium uppercase'>Our portfolio</p>

          <h2 className='relative z-1 inline-block text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Our{' '}
            <span className='relative'>
              Recent
              <span
                className='from-primary absolute bottom-0 left-0 -z-1 h-0.5 w-full rounded-full bg-gradient-to-r to-transparent'
                aria-hidden='true'
              />
            </span>{' '}
            Projects
          </h2>

          <p className='text-muted-foreground text-xl'>
            Welcome to our portfolio! Here, you will find a curated selection of our innovative applications and
            projects that showcase our commitment to quality, creativity, and user-centric design.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs defaultValue='all-projects' className='gap-8'>
          {/* Tab List */}
          <div className='flex overflow-x-auto min-[475px]:justify-center'>
            <TabsList>
              <TabsTrigger value='all-projects'>All Projects</TabsTrigger>

              {types.map(type => (
                <TabsTrigger key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content All Projects */}
          <TabsContent value='all-projects' className='grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3'>
            {portfolios.map((project, index) => (
              <div key={index} className='relative mb-24'>
                <div className='aspect-square overflow-hidden rounded-xl'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <Card className='absolute inset-x-6 -bottom-24 py-8 shadow-none'>
                  <CardContent className='space-y-4 text-center'>
                    <p className='text-primary'>{project.category}</p>
                    <h3 className='text-xl font-medium'>{project.title}</h3>
                    <Button
                      size='lg'
                      className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base shadow-none'
                      asChild
                    >
                      <a href='#'>View Details</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </TabsContent>

          {/* Tab Content by Type */}
          {types.map(type => (
            <TabsContent key={type} value={type} className='grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3'>
              {portfolios
                .filter(p => p.type === type)
                .map((project, index) => (
                  <div key={index} className='relative mb-24'>
                    <div className='aspect-square overflow-hidden rounded-xl'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                      />
                    </div>
                    <Card className='absolute inset-x-6 -bottom-24 py-8 shadow-none'>
                      <CardContent className='space-y-4 text-center'>
                        <p className='text-primary'>{project.category}</p>
                        <h3 className='text-xl font-medium'>{project.title}</h3>
                        <Button
                          size='lg'
                          className='text-primary bg-primary/10 hover:bg-primary/20 rounded-lg text-base shadow-none'
                          asChild
                        >
                          <a href='#'>View Details</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Portfolio
