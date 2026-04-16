/**
 * Shadcn Block: logo-cloud-09
 * A neatly arranged logo cloud showcasing prominent global brands, reflecting the diversity and reach of the company's collaborations with leading enterprises. The logos are presented in a grid layout, highlighting the companies the organization partners with to drive growth and innovation.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/logo-cloud-09/logo-cloud-09.tsx
 * Dependencies: none
 * Registry Dependencies: button, utils
 */

import { Button } from '@/components/ui/button'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type brandLogos = {
  image: string
  name: string
}

const LogoCloud = ({ brandLogos }: { brandLogos: brandLogos[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Header */}
          <div className='space-y-4 md:col-span-2'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Join 50,000+ diverse companies making a difference in business today.
            </h2>
            <p className='text-muted-foreground text-xl'>
              Fueling progress by working with global leaders who are redefining innovation, success, and customer
              experiences worldwide.
            </p>
            <Button className='rounded-lg text-base shadow-sm' size='lg'>
              Explore more
            </Button>
          </div>

          <div className='grid grid-cols-3 gap-4'>
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className={cn('bg-muted flex items-center justify-center rounded-md px-2 py-7', {
                  'col-span-2': index === 1 || index === 2 || index == 5
                })}
              >
                <img src={logo.image} alt={logo.name} className='h-7.5 shrink-0 grayscale' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
