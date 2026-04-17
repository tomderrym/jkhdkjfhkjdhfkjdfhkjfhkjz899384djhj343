import type { ComponentType } from 'react'

import { ArrowRightIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

type ContactMethod = {
  title: string
  description: string
  icon: ComponentType
}[]

type Location = {
  name: string
  image: string
  address: string
  phone: string
  email: string
}[]

const ContactUs = ({ contactMethods, locations }: { contactMethods: ContactMethod; locations: Location }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          {/* Contact Header */}
          <Card className='rounded-none shadow-none'>
            <CardContent className='space-y-4'>
              <p className='text-primary text-sm font-medium uppercase'>Contact</p>
              <CardTitle className='text-2xl md:text-3xl lg:text-4xl'>
                Get in touch with us for more information
              </CardTitle>
              <CardDescription className='text-xl'>
                Contact us for inquiries or support we&apos;re here to help and ensure an exceptional experience.
              </CardDescription>
              <Button className='rounded-lg text-base shadow-sm has-[>svg]:px-6' size='lg' asChild>
                <a href='#'>
                  See All Blogs
                  <ArrowRightIcon />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact methods */}
          <div className='bg-muted flex items-center lg:col-span-2'>
            <div className='flex gap-11 px-6 py-5 max-lg:flex-col'>
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon

                return (
                  <div key={index} className='space-y-4'>
                    <div className='flex items-center gap-4 [&>svg]:size-6'>
                      <h3 className='grow text-xl font-semibold'>{method.title}</h3>
                      <IconComponent />
                    </div>
                    <p className='text-muted-foreground'>{method.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Location Cards */}
          {locations.map((location, index) => (
            <div key={index} className='relative h-90 max-lg:last:col-span-full'>
              <img src={location.image} alt={location.name} className='h-full w-full object-cover' />
              <div className='absolute bottom-0 w-full p-6 text-white'>
                <h3 className='mb-6 text-3xl font-bold'>{location.name}</h3>
                <div className='space-y-2 font-medium'>
                  <div className='flex items-center gap-2'>
                    <MapPinIcon className='size-6 shrink-0' />
                    <p>{location.address}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <PhoneIcon className='size-6 shrink-0' />
                    <p>{location.phone}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MailIcon className='size-6 shrink-0' />
                    <p>{location.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactUs
