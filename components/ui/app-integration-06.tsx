/**
 * Shadcn Block: app-integration-06
 * Partner app showcase with four-column grid featuring branded avatars, descriptions, and connect buttons for app partnerships
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/app-integration-06/app-integration-06.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: avatar, button, card, utils
 */

import { ChevronRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type PartnerApp = {
  name: string
  description: string
  image: string
  bgColor: string
  link: string
}[]

const AppIntegration = ({ partnerApps }: { partnerApps: PartnerApp }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <p className='text-primary text-sm font-medium uppercase'>App Integration</p>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Browse our partner apps</h2>
          <p className='text-muted-foreground text-xl'>
            Explore integrated apps that enhance productivity, streamline workflows, and simplify collaboration
            effortlessly.
          </p>
          <Button size='lg' className='rounded-lg text-base shadow-sm'>
            Browse All Apps
          </Button>
        </div>

        {/* Apps */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {partnerApps.map((app, index) => (
            <Card key={index} className='hover:bg-muted group border-none shadow-none transition-colors'>
              <CardContent className='flex flex-col gap-6'>
                <Avatar className='size-12 rounded-lg'>
                  <AvatarFallback className={cn('rounded-lg', app.bgColor)}>
                    <img src={app.image} alt={app.name} className='size-7 object-contain' />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className='mb-3.5 text-2xl font-medium'>{app.name}</CardTitle>
                  <CardDescription className='text-xl'>{app.description}</CardDescription>
                </div>
                <Button variant='outline' asChild className='h-7 w-fit gap-1.5 px-2 py-1 text-xs'>
                  <a href={app.link}>
                    Connect
                    <ChevronRightIcon className='transition-transform group-hover:translate-x-1' />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
