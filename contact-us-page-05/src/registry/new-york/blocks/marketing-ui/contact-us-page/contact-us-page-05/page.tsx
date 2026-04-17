import ContactUsCanada from '@/assets/svg/contact-us-canada'
import ContactUsParis from '@/assets/svg/contact-us-paris'
import ContactUsSanFrancisco from '@/assets/svg/contact-us-san-francisco'
import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-05/contact-us-page-05'

const locations = [
  {
    svg: <ContactUsSanFrancisco />,
    location: 'San Francisco',
    email: 'ygonzalez@aol.com',
    phone: '+1-316-875-6985',
    locationLink: '#',
    bgColor: 'bg-sky-600/20 dark:bg-sky-400/20 text-sky-600 dark:text-sky-400',
    buttonColor:
      'bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:hover:bg-sky-400/90 dark:focus-visible:ring-sky-400/40'
  },
  {
    svg: <ContactUsCanada />,
    location: 'Canada',
    email: 'cwalker@aol.com',
    phone: '+1-316-222-9788',
    locationLink: '#',
    bgColor: 'bg-primary/20 text-primary'
  },
  {
    svg: <ContactUsParis />,
    location: 'Paris',
    email: 'wmitchell@icloud.com',
    phone: '+1-316-666-1258',
    locationLink: '#',
    bgColor: 'bg-amber-600/20 dark:bg-amber-400/20 text-amber-600 dark:text-amber-400',
    buttonColor:
      'bg-amber-600 text-white hover:bg-amber-600/90 focus-visible:ring-amber-600/20 dark:bg-amber-400/60 dark:hover:bg-amber-400/90 dark:focus-visible:ring-amber-400/40'
  }
]

const ContactUsPage = () => {
  return <ContactUs locations={locations} />
}

export default ContactUsPage
