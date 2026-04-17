import { MessageSquareMoreIcon, PhoneIcon, MailIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-10/contact-us-page-10'

// Contact information data
const contactInfo = [
  {
    icon: MessageSquareMoreIcon,
    title: 'Ready for some coffee?',
    details: ['401 Broadway, 24th floor', 'Church View, London']
  },
  {
    icon: PhoneIcon,
    title: "Don't hesitate to reach out!",
    details: ['Phone : 310-2568-4578', 'Fax : 310-1298-4836']
  },
  {
    icon: MailIcon,
    title: 'How can we assist you?',
    details: ['johndoe@gmail.com', 'smithjohn@gmail.com']
  }
]

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
