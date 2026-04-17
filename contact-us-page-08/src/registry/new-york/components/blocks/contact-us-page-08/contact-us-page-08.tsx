import type { ComponentType } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { cn } from '@/lib/utils'

import ContactForm from '@/components/shadcn-studio/blocks/contact-us-page-08/contact-form'

type TopNavLink = {
  label: string
  href: string
}[]

type FooterNavigation = {
  label: string
  href: string
}[]

type SocialMedia = {
  icon: ComponentType
  href: string
  avatarClasses: string
}[]

const ContactUs = ({
  topNavLinks,
  footerNavigation,
  socialMedia
}: {
  topNavLinks: TopNavLink
  footerNavigation: FooterNavigation
  socialMedia: SocialMedia
}) => {
  return (
    <div className='bg-background'>
      <div className='grid lg:grid-cols-2'>
        {/* Image Section with Logo */}
        <div className='relative h-180 max-lg:h-96'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-9.png'
            alt='Modern office interior'
            className='size-full object-cover'
          />
          <div className='absolute top-6 left-6'>
            <a href='#' className='flex items-center gap-3 text-xl font-bold text-white'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/logo/logo-square.png'
                className='size-8 rounded-full'
                alt='shadcnstudio'
              />
              <span>shadcn/studio</span>
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className='my-auto p-6'>
          <div className='mb-16 flex items-center gap-6'>
            {topNavLinks.map((link, index) => (
              <a key={index} href={link.href} className='font-medium underline-offset-4 hover:underline'>
                {link.label}
              </a>
            ))}
          </div>

          <div className='mb-6 space-y-4'>
            <h2 className='mb-4 text-3xl font-semibold'>Contact Us for More Insights!</h2>
            <p className='text-muted-foreground text-lg font-medium'>
              Want to dive deeper? Reach out for personalized assistance and expert guidance.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-muted mx-auto px-4 py-12 md:px-6 lg:px-8'>
        <div className='flex gap-9 max-md:flex-col md:items-center'>
          <div className='grid w-full flex-1 grid-cols-3 grid-rows-3 gap-x-3 gap-y-3 text-start sm:gap-x-10'>
            {footerNavigation.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='text-foreground font-medium underline-offset-4 hover:underline'
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className='flex flex-col gap-3 md:items-end lg:flex-1'>
            <p>Follow us on</p>
            <div className='flex items-center gap-2'>
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
      </footer>
    </div>
  )
}

export default ContactUs
