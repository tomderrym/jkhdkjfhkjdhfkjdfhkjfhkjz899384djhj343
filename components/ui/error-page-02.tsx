/**
 * Shadcn Block: error-page-02
 * Centered single-column error page with custom SVG illustration, "Oops!" heading, error message, and back to home button
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/error-page-02/error-page-02.tsx
 * Dependencies: none
 * Registry Dependencies: button
 */

// // import Error02Illustration from '@/assets/svg/error-02-illustration'
// Placeholder - asset not available
const Error02Illustration = () => null;
import { Button } from '@/components/ui/button'

const Error = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-8 sm:py-16 lg:py-24'>
      <Error02Illustration className='h-[clamp(300px,50vh,500px)] max-sm:h-75' />

      <div className='text-center'>
        <h3 className='mb-6 text-5xl font-semibold'>Oops!</h3>
        <h4 className='mb-1.5 text-3xl font-semibold'>Something went wrong</h4>
        <p className='mb-6'>The page you&apos;re looking for isn&apos;t found, we suggest you back to home.</p>
        <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
          <a href='#'>Back to home page</a>
        </Button>
      </div>
    </div>
  )
}

export default Error
