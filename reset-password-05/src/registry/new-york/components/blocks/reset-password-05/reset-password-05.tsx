import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Logo from '@/components/shadcn-studio/logo'
import AuthLines from '@/assets/svg/auth-lines'
import ResetPasswordForm from '@/components/shadcn-studio/blocks/reset-password-05/reset-password-form'

const ResetPassword = () => {
  return (
    <div className='bg-muted flex h-auto min-h-screen items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <Card className='relative w-full max-w-md overflow-hidden border-none pt-12 shadow-lg'>
        <div className='to-primary/10 pointer-events-none absolute top-0 h-52 w-full rounded-t-xl bg-gradient-to-t from-transparent'></div>

        <AuthLines className='pointer-events-none absolute inset-x-0 top-0' />

        <CardHeader className='justify-center gap-6 text-center'>
          <Logo className='justify-center gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>Reset Password</CardTitle>
            <CardDescription className='text-base'>
              Time for a fresh start! Go ahead and set a new password.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='space-y-4'>
          <ResetPasswordForm />

          <Button variant='ghost' className='w-full' asChild>
            <a href='#'>Back to login</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPassword
