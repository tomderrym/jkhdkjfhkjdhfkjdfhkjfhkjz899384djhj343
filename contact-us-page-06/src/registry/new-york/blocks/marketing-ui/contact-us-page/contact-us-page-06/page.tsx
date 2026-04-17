import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-06/contact-us-page-06'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Call us today',
    description: '+1-316-555-1258'
  },
  {
    icon: MailIcon,
    title: 'Send an Email',
    description: 'johndoe@gmail.com'
  },
  {
    icon: GlobeIcon,
    title: 'Visit Our HQ',
    description: 'La défense, Paris'
  }
]

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
