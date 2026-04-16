/**
 * Shadcn Block: error-page-04
 * Centered single-column layout with custom cat playing SVG illustration, "Page Not Found" heading with warning emoji, and back to home button
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/error-page-04/error-page-04.tsx
 * Dependencies: none
 * Registry Dependencies: button
 */

// // import Error04Illustration from '@/assets/svg/error-04-illustration'
// Placeholder - asset not available
const Error04Illustration = () => null;
import { Button } from '@/components/ui/button'

const Error = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-8 sm:py-16 lg:justify-between lg:py-24'>
      <Error04Illustration className='h-[clamp(300px,50vh,600px)]' />

      <div className='text-center'>
        <h4 className='mb-1.5 text-2xl font-semibold'>Page Not Found️ ⚠</h4>
        <p className='mb-5'>We couldn&apos;t find the page you are looking for </p>
        <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
          <a href='#'>Back to home page</a>
        </Button>
      </div>
    </div>
  )
}

export default Error
