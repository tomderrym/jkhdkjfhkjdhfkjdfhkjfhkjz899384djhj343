'use client'

import { SendIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      <div className='flex w-full flex-wrap gap-6'>
        <div className='w-auto grow space-y-2'>
          <Label htmlFor='name'>Your Name</Label>
          <Input type='text' className='h-10' placeholder='Enter your name' id='name' required />
        </div>
        <div className='w-auto grow space-y-2'>
          <Label htmlFor='email'>Your Email</Label>
          <Input type='email' className='h-10' placeholder='Enter your email' id='email' required />
        </div>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='subject'>Subject</Label>
        <Input type='text' className='h-10' placeholder='Enter subject' id='subject' required />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='message'>Message</Label>
        <Textarea className='h-16 resize-none' placeholder='Type your message here...' id='message' required />
      </div>
      <Button type='submit' className='w-full rounded-lg text-base shadow-sm has-[>svg]:px-6' size='lg'>
        Send Message
        <SendIcon />
      </Button>
    </form>
  )
}

export default ContactForm
