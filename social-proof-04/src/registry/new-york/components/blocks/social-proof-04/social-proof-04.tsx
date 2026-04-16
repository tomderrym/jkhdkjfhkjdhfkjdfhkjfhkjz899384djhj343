import { ArrowDownIcon, ArrowUpIcon, EllipsisIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'

export type StatCard = {
  title: string
  value: string
  description: string
  change: string
  trend: 'up' | 'down'
}

export type TabData = {
  name: string
  value: string
  stats: StatCard[]
}

const SocialProof = ({ tabs }: { tabs: TabData[] }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Engagement and Growth Metrics</h2>
          <p className='text-muted-foreground text-xl'>
            Performance Analysis of Followers, Likes, and Shares for the Current Month
          </p>
        </div>

        <div className='w-full'>
          <Tabs defaultValue='instagram' className='gap-8'>
            <TabsList className='self-center'>
              {tabs.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value} className='rounded-lg text-base!'>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map(tab => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                  {tab.stats.map((stat, index) => (
                    <Card key={index} className='gap-0 pt-4 max-lg:last:col-span-full'>
                      <CardHeader className='flex items-center justify-between gap-3'>
                        <CardTitle className='text-muted-foreground text-xl font-medium'>{stat.title}</CardTitle>
                        <Button variant='ghost' size='icon'>
                          <EllipsisIcon />
                        </Button>
                      </CardHeader>
                      <Separator className='mt-4 mb-6' />
                      <CardContent>
                        <div className='mb-2.5 text-2xl font-semibold md:text-3xl lg:text-4xl'>{stat.value}</div>
                        <div className='flex items-center justify-between gap-2'>
                          <p className='text-muted-foreground text-xl font-medium'>{stat.description}</p>
                          <div
                            className={cn('flex items-center gap-0.5 text-xl font-medium', {
                              'text-green-600 dark:text-green-400': stat.trend === 'up',
                              'text-destructive': stat.trend === 'down'
                            })}
                          >
                            {stat.trend === 'up' ? (
                              <ArrowUpIcon className='size-4' />
                            ) : (
                              <ArrowDownIcon className='size-4' />
                            )}
                            <p>{stat.change}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
