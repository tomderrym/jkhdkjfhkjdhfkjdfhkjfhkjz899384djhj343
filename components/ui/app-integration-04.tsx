/**
 * Shadcn Block: app-integration-04
 * Designer-focused app integration grid with colorful blur effects, tool cards featuring icons, titles, and interactive arrow buttons
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/app-integration-04/app-integration-04.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: card, utils
 */

import { CircleArrowRightIcon } from 'lucide-react'

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type DesignTools = {
  name: string
  description: string
  image: string
  classNames: string
  toolLink: string
}[]

const AppIntegration = ({ designTools }: { designTools: DesignTools }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Designer&apos;s App Integration</h2>
          <p className='text-muted-foreground text-xl'>Perfect for designer - all in one integration tool</p>
        </div>

        {/* Apps */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {designTools.map((tool, index) => (
            <Card key={index} className='group relative overflow-hidden border-none shadow-none'>
              <div className={cn('absolute top-1 left-0 size-22 rounded-full blur-3xl', tool.classNames)} />
              <CardContent className='flex flex-col gap-6'>
                <img src={tool.image} alt={tool.name} className='h-15 w-16 object-contain' />
                <div className='flex items-center gap-3.5'>
                  <CardTitle className='text-2xl'>{tool.name}</CardTitle>
                  <a href={tool.toolLink}>
                    <CircleArrowRightIcon className='size-6 transition-all duration-300 group-hover:-rotate-45' />
                  </a>
                </div>
                <CardDescription className='text-base'>{tool.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
