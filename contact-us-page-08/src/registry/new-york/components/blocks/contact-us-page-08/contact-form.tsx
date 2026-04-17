'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      <div className='w-full space-y-2'>
        <Label htmlFor='username'>Full Name</Label>
        <Input type='text' id='username' className='h-10' placeholder='Enter your name here...' />
      </div>

      <div className='w-full space-y-2'>
        <Label htmlFor='useremail'>Your Email</Label>
        <Input type='email' id='useremail' className='h-10' placeholder='Enter your email here...' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='usermessage'>Message</Label>
        <Textarea id='usermessage' className='h-20 resize-none' placeholder='Enter your message' />
      </div>

      <Button type='submit' size='lg'>
        Send Your Message
      </Button>
    </form>
  )
}

export default ContactForm
