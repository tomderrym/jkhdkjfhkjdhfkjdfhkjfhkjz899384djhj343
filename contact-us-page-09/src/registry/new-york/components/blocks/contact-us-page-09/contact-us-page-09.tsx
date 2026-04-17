import type { ComponentType } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'

import { GlowEffect } from '@/components/ui/glow-effect'

import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-09/contact-form'

type ContactInfo = {
  icon: ComponentType
  type: string
  value: string
}[]

type SocialMedia = {
  icon: ComponentType
  href: string
  avatarClasses: string
}[]

const ContactUs = ({ contactInfo, socialMedia }: { contactInfo: ContactInfo; socialMedia: SocialMedia }) => {
  return (
    <section className='bg-muted pt-30 pb-8 sm:pb-16 lg:pb-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-x-0 top-0 h-69 overflow-hidden rounded-b-3xl'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-10.png'
            alt='Office interior with modern workspace'
            className='h-full w-full object-cover'
          />
        </div>

        <div className='relative grid gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-24'>
          {/* Contact Information */}
          <div className='space-y-24'>
            <div className='space-y-4 text-white'>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Reach Out to Us</h2>
              <p className='max-w-sm text-xl'>
                Need support, have a query, or looking for collaboration? Let&apos;s talk!
              </p>
            </div>

            <div className='space-y-7'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-semibold'>Contact Information</h2>
                <p className='text-muted-foreground'>
                  Explore new destinations, indulge in local cuisines, and immerse yourself in diverse cultures.
                </p>
              </div>

              <div className='space-y-4'>
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon

                  return (
                    <div key={index} className='flex items-center gap-4 [&>svg]:size-5'>
                      <IconComponent />
                      <span className='font-medium'>{contact.value}</span>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className='flex gap-4' aria-label='Social media links'>
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon

                  return (
                    <a key={index} href={social.href}>
                      <Avatar className='size-10'>
                        <AvatarFallback className={cn('[&>svg]:size-6', social.avatarClasses)}>
                          <IconComponent />
                        </AvatarFallback>
                      </Avatar>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='group relative h-fit'>
            <GlowEffect
              colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
              mode='colorShift'
              blur='medium'
              className='opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            />
            <Card className='relative h-fit border-none'>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
