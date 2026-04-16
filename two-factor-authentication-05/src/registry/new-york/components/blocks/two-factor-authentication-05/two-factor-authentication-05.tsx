import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Logo from '@/components/shadcn-studio/logo'
import AuthLines from '@/assets/svg/auth-lines'
import TwoFactorAuthenticationForm from '@/components/shadcn-studio/blocks/two-factor-authentication-05/two-factor-authentication-form'

const TwoFactorAuthentication = () => {
  return (
    <div className='bg-muted flex h-auto min-h-screen items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <Card className='relative w-full max-w-md overflow-hidden border-none pt-12 shadow-lg'>
        <div className='to-primary/10 pointer-events-none absolute top-0 h-52 w-full rounded-t-xl bg-gradient-to-t from-transparent'></div>

        <AuthLines className='pointer-events-none absolute inset-x-0 top-0' />

        <CardHeader className='justify-center gap-6 text-center'>
          <Logo className='justify-center gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>Two Factor Authentication</CardTitle>
            <CardDescription className='text-base'>
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.{' '}
              <span className='font-semibold'>*******1234</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='space-y-4'>
          <TwoFactorAuthenticationForm />

          <p className='text-muted-foreground text-center'>
            Didn&apos;t get the mail?{' '}
            <a href='#' className='text-card-foreground hover:underline'>
              Resend
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default TwoFactorAuthentication
