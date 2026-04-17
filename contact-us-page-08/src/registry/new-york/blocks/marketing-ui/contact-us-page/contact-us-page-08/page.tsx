import { GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-08/contact-us-page-08'

// Navigation links data
const topNavLinks = [
  { label: 'Products', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Login', href: '#' }
]

// Footer navigation data
const footerNavigation = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' }
]

// Social media data
const socialMedia = [
  {
    icon: GithubIcon,
    href: '#',
    avatarClasses: 'bg-primary text-primary-foreground'
  },
  {
    icon: InstagramIcon,
    href: '#',
    avatarClasses: 'bg-sky-600 text-white dark:bg-sky-400'
  },
  {
    icon: TwitterIcon,
    href: '#',
    avatarClasses: 'bg-amber-600 text-white dark:bg-amber-400'
  },
  {
    icon: YoutubeIcon,
    href: '#',
    avatarClasses: 'bg-destructive text-white'
  }
]

const ContactUsPage = () => {
  return <ContactUs topNavLinks={topNavLinks} footerNavigation={footerNavigation} socialMedia={socialMedia} />
}

export default ContactUsPage
