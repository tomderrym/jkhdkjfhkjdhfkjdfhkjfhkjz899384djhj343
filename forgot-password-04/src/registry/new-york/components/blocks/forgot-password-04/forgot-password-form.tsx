'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const ForgotPasswordForm = () => {
  return (
    <form className='space-y-4' onSubmit={e => e.preventDefault()}>
      {/* Email */}
      <Input type='email' placeholder='Enter your email address' />

      <Button className='w-full' type='submit'>
        Send Reset Link
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
