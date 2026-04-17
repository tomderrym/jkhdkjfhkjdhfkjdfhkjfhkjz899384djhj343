import type { ComponentType } from 'react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-06/contact-form'

type ContactInfo = {
  icon: ComponentType
  title: string
  description: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <p className='text-primary text-sm font-medium uppercase'>Get in touch with us</p>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Have Questions? Get in Touch!</h2>
          <p className='text-muted-foreground text-xl'>
            Our team is ready to help—connect with us to learn more about our services and solutions.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className='mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {contactInfo.map((item, index) => (
            <Card key={index} className='border-none shadow-none max-lg:last:col-span-full'>
              <CardContent className='flex items-center gap-6'>
                <Avatar className='size-12 rounded-md'>
                  <AvatarFallback className='rounded-md'>
                    <item.icon />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className='mb-0.5 text-xl font-medium'>{item.title}</CardTitle>
                  <p>{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className='relative flex justify-center md:justify-start'>
          <div className='relative'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-5.png'
              alt='Modern office hallway'
              className='rounded-md max-md:hidden md:h-[42rem] md:w-[40rem] lg:w-full'
            />
          </div>

          <Card className='border-none md:absolute md:top-1/2 md:right-0 md:w-3/4 md:max-w-128 md:-translate-y-1/2'>
            <CardHeader className='gap-2'>
              <CardTitle className='text-2xl'>Send us a message</CardTitle>
              <CardDescription className='text-base'>
                Get in touch with us for any inquiries or support. We&apos;re here to assist you and ensure your
                experience is exceptional.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ContactForm />
            </CardContent>
            <CardFooter>
              <p className='text-muted-foreground text-lg'>
                I understand that my data will be hold securely in accordance with the{' '}
                <a href='#' className='text-card-foreground font-semibold underline'>
                  privacy policy
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
