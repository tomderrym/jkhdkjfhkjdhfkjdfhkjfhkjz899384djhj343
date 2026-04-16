import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex flex-col items-center gap-6 py-8 text-center sm:py-16 md:py-24'>
          <h2 className='max-w-5xl text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Feel free to reach out—our doors are open for creative minds and collaborations!
          </h2>
          <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
            <a href='#'>Get Shadcn/studio</a>
          </Button>
        </div>

        <div className='flex items-center justify-between gap-4 py-6 max-md:flex-col'>
          <a href='#'>
            <Logo className='gap-3' />
          </a>
          <div className='flex items-center gap-5 whitespace-nowrap'>
            <a href='#'>About</a>
            <a href='#'>Features</a>
            <a href='#'>Works</a>
            <a href='#'>Career</a>
          </div>
          <div className='flex items-center gap-4'>
            <a href='#'>
              <FacebookIcon className='size-5' />
            </a>
            <a href='#'>
              <InstagramIcon className='size-5' />
            </a>
            <a href='#'>
              <TwitterIcon className='size-5' />
            </a>
            <a href='#'>
              <YoutubeIcon className='size-5' />
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 max-sm:flex-col sm:px-6'>
        <p className='text-balance max-sm:text-center'>
          {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
        </p>

        <div className='flex items-center gap-6 text-nowrap'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
