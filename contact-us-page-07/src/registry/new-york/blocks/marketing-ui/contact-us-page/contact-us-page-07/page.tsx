import { PencilIcon, Clock7Icon, MapPinIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-07/contact-us-page-07'

// Contact methods data
const contactMethods = [
  {
    icon: PencilIcon,
    title: 'Drop us a line',
    description: 'Check out cool new spots, try out yummy local foods, and dive into different cultures.'
  },
  {
    icon: Clock7Icon,
    title: 'Business hours',
    description: 'Check out cool new spots, try out yummy local foods, and dive into different cultures.'
  },
  {
    icon: MapPinIcon,
    title: 'Visit our office',
    description: 'Check out cool new spots, try out yummy local foods, and dive into different cultures.'
  }
]

// Location data
const locations = [
  {
    name: 'Paris',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-8.png',
    address: '908 New Hampshire Avenue, 95872',
    phone: '+1 308-785-2145',
    email: 'johndoe@gmail.com'
  },
  {
    name: 'London',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-7.png',
    address: '908 New Hampshire Avenue, 95872',
    phone: '+1 308-785-2145',
    email: 'johndoe@gmail.com'
  },
  {
    name: 'New York',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-6.png',
    address: '908 New Hampshire Avenue, 95872',
    phone: '+1 308-785-2145',
    email: 'johndoe@gmail.com'
  }
]

const ContactUsPage = () => {
  return <ContactUs contactMethods={contactMethods} locations={locations} />
}

export default ContactUsPage
