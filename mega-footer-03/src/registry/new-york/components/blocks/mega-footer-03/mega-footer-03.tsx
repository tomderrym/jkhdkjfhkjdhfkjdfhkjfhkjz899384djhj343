import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

import Logo from '@/components/shadcn-studio/logo'

const MegaFooter = () => {
  return (
    <footer>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-16 md:grid-cols-2 md:py-24 lg:grid-cols-5'>
        <div className='grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3'>
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

          {/* Second Row */}
          <div className='flex flex-col gap-5'>
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
        </div>
        {/* card */}
        <Card className='bg-muted h-fit rounded-lg border-0 p-6 shadow-none lg:col-span-2'>
          {/* Sign In Section */}
          <a href='#' className='text-lg font-medium underline underline-offset-4'>
            Sign In or Create Account
          </a>
          <Separator />
          {/* Newsletter Section */}
          <div className='flex items-end gap-3 max-md:flex-wrap'>
            <div className='w-full max-w-xs space-y-2'>
              <Label htmlFor='emailAddress'>Get the latest deals and more.</Label>
              <Input
                id='emailAddress'
                type='email'
                placeholder='Type here'
                className='h-9.5 bg-white dark:bg-white/5'
              />
            </div>
            <Button type='submit'>Subscribe</Button>
          </div>
          <Separator />
          {/* App Download Section */}
          <div className='text-lg font-medium'>Trade on the go with Shadcn/studio</div>
          <div className='itemask-center flex flex-wrap justify-center gap-6'>
            <Button asChild className='rounded-sm bg-black px-6 py-3 hover:bg-black'>
              <a href='#' className='flex h-16 items-center gap-4'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                  className='size-8.5 invert'
                  alt='App Store'
                />
                <div>
                  <div className='text-xs font-normal text-white'>Download on the</div>
                  <div className='text-base font-medium text-white'>App Store</div>
                </div>
              </a>
            </Button>
            <Button asChild className='rounded-sm bg-black px-6 py-3 hover:bg-black'>
              <a href='#' className='flex h-16 items-center gap-4'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                  className='size-7.5'
                  alt='Google Play Store'
                />
                <div>
                  <div className='text-xs font-normal text-white'>Download on the</div>
                  <div className='text-base font-medium text-white'>Google Play</div>
                </div>
              </a>
            </Button>
          </div>
          <Separator />
          {/* Social Media Icons */}
          <div className='flex gap-4'>
            <a href='#' className='p-2'>
              <FacebookIcon className='size-4.5' />
            </a>
            <a href='#' className='p-2'>
              <InstagramIcon className='size-4.5' />
            </a>
            <a href='#' className='p-2'>
              <TwitterIcon className='size-4.5' />
            </a>
            <a href='#' className='p-2'>
              <YoutubeIcon className='size-4.5' />
            </a>
          </div>
        </Card>
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-8 max-md:flex-col sm:px-6 lg:px-8'>
        <a href='#'>
          <Logo className='gap-3' />
        </a>
        <div className='flex items-center gap-6 whitespace-nowrap *:font-semibold'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Works</a>
          <a href='#'>Career</a>
        </div>
      </div>
      <Separator />
      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default MegaFooter
