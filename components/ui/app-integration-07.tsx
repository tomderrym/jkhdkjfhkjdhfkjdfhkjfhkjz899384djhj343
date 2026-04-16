/**
 * Shadcn Block: app-integration-07
 * Business growth through app connections with marquee display and extensive integration showcase
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/app-integration-07/app-integration-07.tsx
 * Dependencies: none
 * Registry Dependencies: avatar, button, card, utils
 */

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
import { Marquee } from '@/components/ui/marquee'

type Integration = {
  name: string
  image: string
  bgColor: string
}[]

const AppIntegration = ({ integrations }: { integrations: Integration }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex gap-6 max-md:flex-col sm:mb-16 md:items-center md:justify-between lg:mb-24'>
          <div className='max-w-4xl space-y-4'>
            <p className='text-primary text-sm font-medium tracking-wide uppercase'>App Integration</p>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Boost your business by building meaningful connections!
            </h2>
            <p className='text-muted-foreground text-xl'>
              Elevate your business by forging valuable relationships! Unlock new opportunities and watch your success
              soar!
            </p>
          </div>
          <div>
            <Button
              size='lg'
              className='bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 rounded-lg text-base shadow-none'
            >
              Check all 50+ apps
            </Button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className='relative'>
        <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-gradient-to-r to-transparent max-sm:hidden' />
        <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-gradient-to-l to-transparent max-sm:hidden' />
        <div className='w-full overflow-hidden'>
          <Marquee pauseOnHover duration={20} gap={1.5}>
            {integrations.map((app, index) => (
              <Card key={index} className='bg-muted border-none shadow-none'>
                <CardContent className='flex flex-col items-center gap-2.5'>
                  <Avatar className='size-12 rounded-lg'>
                    <AvatarFallback className={cn('rounded-lg', app.bgColor)}>
                      <img src={app.image} alt={app.name} className='size-7 object-contain' />
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className='text-2xl font-medium'>{app.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
