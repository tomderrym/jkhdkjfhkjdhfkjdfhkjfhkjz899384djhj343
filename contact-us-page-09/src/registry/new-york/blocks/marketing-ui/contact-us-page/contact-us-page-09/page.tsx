import { PhoneIcon, MailIcon, MapPinIcon, GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-09/contact-us-page-09'

// Contact information data
const contactInfo = [
  {
    icon: PhoneIcon,
    type: 'phone',
    value: '+1-316-555-1258',
    href: 'tel:+1-316-555-1258'
  },
  {
    icon: MailIcon,
    type: 'email',
    value: 'hadams@hotmail.com',
    href: 'mailto:hadams@hotmail.com'
  },
  {
    icon: MapPinIcon,
    type: 'address',
    value: '802 Pension Rd, Maine 96812, USA',
    href: null
  }
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
  return <ContactUs contactInfo={contactInfo} socialMedia={socialMedia} />
}

export default ContactUsPage
