import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import Logo from '@/components/shadcn-studio/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 md:py-24'>
        <div className='mb-10 grid items-center gap-4 sm:grid-cols-2'>
          <div className='space-y-2'>
            <h6 className='text-2xl font-semibold'>Subscribe to newsletter</h6>
            <p className='text-muted-foreground'>
              We&apos;ll send you a friendly note once a week—no spam, just good vibes!
            </p>
          </div>
          <div className='flex gap-3'>
            <Input type='email' placeholder='Your Email' className='h-10' />
            <Button className='rounded-lg text-base shadow-sm' type='submit' size='lg'>
              Subscribe
            </Button>
          </div>
        </div>

        <div className='grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
          <div className='flex flex-col gap-5'>
            <div className='text-lg font-medium'>Product</div>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                <a href='#'>Overview</a>
              </li>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Solutions</a>
              </li>
              <li>
                <a href='#'>Tutorials</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Releases</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-lg font-medium'>Company</div>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Press</a>
              </li>
              <li>
                <a href='#'>News</a>
              </li>
              <li>
                <a href='#'>Media Kit</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-lg font-medium'>Resources</div>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Newsletter</a>
              </li>
              <li>
                <a href='#'>Events</a>
              </li>
              <li>
                <a href='#'>Help Centre</a>
              </li>
              <li>
                <a href='#'>Tutorials</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-lg font-medium'>Social</div>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                <a href='#'>Twitter</a>
              </li>
              <li>
                <a href='#'>LinkedIn</a>
              </li>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>GitHub</a>
              </li>
              <li>
                <a href='#'>AngelList</a>
              </li>
              <li>
                <a href='#'>Dribbble</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='text-lg font-medium'>Legal</div>
            <ul className='text-muted-foreground space-y-3'>
              <li>
                <a href='#'>Terms</a>
              </li>
              <li>
                <a href='#'>Privacy</a>
              </li>
              <li>
                <a href='#'>Cookies</a>
              </li>
              <li>
                <a href='#'>Licenses</a>
              </li>
              <li>
                <a href='#'>Settings</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-6 sm:px-6'>
        <a href='#'>
          <Logo className='gap-3' />
        </a>
        <p className='font-medium'>
          {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default Footer
