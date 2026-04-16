import { ShieldCheckIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

import Logo from '@/components/shadcn-studio/logo'

const MegaFooter = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-8 max-sm:flex-col sm:px-6 sm:py-16 md:py-24'>
        <a href='#' className='grow'>
          <Logo className='gap-3' />
        </a>
        <div className='flex grow gap-3 sm:justify-end'>
          <Input type='email' placeholder='your email' className='h-10 w-full max-w-xs px-3.5 py-1.5' />
          <Button type='submit' size='lg'>
            Subscribe
          </Button>
        </div>
      </div>
      <Separator />
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-4'>
        {/* First Row */}
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-medium'>Development Easier</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Explore Our Components</a>
            </li>
            <li>
              <a href='#'>Tailwind CSS Integration</a>
            </li>
            <li>
              <a href='#'>Customizable Themes</a>
            </li>
            <li>
              <a href='#'>Documentation & Guides</a>
            </li>
            <li>
              <a href='#'>Community Support</a>
            </li>
            <li>
              <a href='#'>Quick Start Guides</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-medium'>Product</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>About Shadcn/studio</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Press Releases</a>
            </li>
            <li>
              <a href='#'>Sustainability Initiatives</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-medium'>Support</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Documentation</a>
            </li>
            <li>
              <a href='#'>FAQs</a>
            </li>
            <li>
              <a href='#'>Community Forum</a>
            </li>
            <li>
              <a href='#'>GitHub Repository</a>
            </li>
            <li>
              <a href='#'>Report an Issue</a>
            </li>
            <li>
              <a href='#'>Live Chat Support</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-medium'>Payment Methods</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Visa & Mastercard</a>
            </li>
            <li>
              <a href='#'>Amex Card</a>
            </li>
            <li>
              <a href='#'>Platinum Visa & Mastercard</a>
            </li>
            <li>
              <a href='#'>Gift Cards</a>
            </li>
            <li>
              <a href='#'>Money Store</a>
            </li>
            <li>
              <a href='#'>Shop with Points</a>
            </li>
          </ul>
        </div>

        {/* Second Row */}
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Orders & Shipment</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>My Account</a>
            </li>
            <li>
              <a href='#'>Order History</a>
            </li>
            <li>
              <a href='#'>Download Components</a>
            </li>
            <li>
              <a href='#'>License Information</a>
            </li>
            <li>
              <a href='#'>Support Tickets</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Developer Resources</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>API Documentation</a>
            </li>
            <li>
              <a href='#'>Code Snippets</a>
            </li>
            <li>
              <a href='#'>Design Guidelines</a>
            </li>
            <li>
              <a href='#'>Contribution Guidelines</a>
            </li>
            <li>
              <a href='#'>Changelog</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>User Community</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Community Forum</a>
            </li>
            <li>
              <a href='#'>User Groups</a>
            </li>
            <li>
              <a href='#'>Meetups & Events</a>
            </li>
            <li>
              <a href='#'>Showcase Your Projects</a>
            </li>
            <li>
              <a href='#'>Feedback & Suggestions</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Learning & Tutorials</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Getting Started Guides</a>
            </li>
            <li>
              <a href='#'>Advanced Techniques</a>
            </li>
            <li>
              <a href='#'>Best Practices</a>
            </li>
            <li>
              <a href='#'>Webinars & Workshops</a>
            </li>
            <li>
              <a href='#'>Resource Library</a>
            </li>
          </ul>
        </div>

        {/* Third Row */}
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Featured Components</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>UI Kits</a>
            </li>
            <li>
              <a href='#'>Form Elements</a>
            </li>
            <li>
              <a href='#'>Navigation Bars</a>
            </li>
            <li>
              <a href='#'>Modals & Popups</a>
            </li>
            <li>
              <a href='#'>Cards & Grids</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Update & News</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Product Announcements</a>
            </li>
            <li>
              <a href='#'>Release Notes</a>
            </li>
            <li>
              <a href='#'>Blog Highlights</a>
            </li>
            <li>
              <a href='#'>Upcoming Features</a>
            </li>
            <li>
              <a href='#'>Community Spotlights</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Get Involved</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Contribute to Our Community</a>
            </li>
            <li>
              <a href='#'>Join Our Beta Testing Program</a>
            </li>
            <li>
              <a href='#'>Share Your Feedback</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 max-lg:hidden'>
          <div className='text-lg font-medium'>Stay Updated</div>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <a href='#'>Subscribe to Our Newsletter</a>
            </li>
            <li>
              <a href='#'>Follow Us on Social Media</a>
            </li>
            <li>
              <a href='#'>Join Our Community Forum</a>
            </li>
            <li>
              <a href='#'>Check Our Blog for Updates</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='mx-auto max-w-360'>
        <div className='flex flex-wrap items-center justify-center gap-4 px-4 py-6'>
          <Badge variant='outline' className='rounded-full text-base font-normal'>
            <ShieldCheckIcon className='!size-4.5 text-green-600' /> Secure Payment
          </Badge>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/lemon-squeezy.png'
            alt='Lemon Squeezy'
            className='h-6'
          />
          <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png' alt='Visa' className='h-5' />
          <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal.png' alt='Paypal' className='h-5' />
          <img src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png' alt='Mastercard' className='h-5' />
        </div>
        <div className='flex flex-wrap items-center justify-between gap-3 p-4 sm:p-6 lg:p-8'>
          <p>
            {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
          </p>

          <div className='flex items-center gap-11'>
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
    </footer>
  )
}

export default MegaFooter
