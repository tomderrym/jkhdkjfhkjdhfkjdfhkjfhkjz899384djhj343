/**
 * Shadcn Block: forgot-password-01
 * Centered card layout with logo header, title, description, and form input for password reset functionality with decorative background shape
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/forgot-password-01/forgot-password-01.tsx
 * Dependencies: none
 * Registry Dependencies: button, card, input, label, utils
 */

import { ChevronLeftIcon } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import ForgotPasswordForm from '@/components/builder-components'
// // import AuthBackgroundShape from '@/assets/svg/auth-background-shape'
// Placeholder - asset not available
const AuthBackgroundShape = () => null;
import Logo from '@/components/builder-components'

const ForgotPassword = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
        <CardHeader className='gap-6'>
          <Logo className='gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>Forgot Password?</CardTitle>
            <CardDescription className='text-base'>
              Enter your email and we&apos;ll send you instructions to reset your password
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='space-y-4'>
          {/* ForgotPassword Form */}
          <ForgotPasswordForm />

          <a href='#' className='group mx-auto flex w-fit items-center gap-2'>
            <ChevronLeftIcon className='size-5 transition-transform duration-200 group-hover:-translate-x-0.5' />
            <span>Back to login</span>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}

export default ForgotPassword
