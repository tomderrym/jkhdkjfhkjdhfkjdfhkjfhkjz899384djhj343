/**
 * Shadcn Block: dashboard-dialog-08
 * An authenticator setup dialog for two-factor authentication with QR code display, input fields, and security configuration options.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/dashboard-dialog-08/dialog-authenticator.tsx
 * Dependencies: none
 * Registry Dependencies: button, dialog, input, label, utils
 */

'use client'

import { useState, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  className?: string
}

const AuthenticatorDialog = ({ defaultOpen = false, trigger, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn('sm:max-w-145 [&>[data-slot=dialog-close]>svg]:size-5', className)}>
        <DialogHeader>
          <DialogTitle className='leading-7'>Add Authenticator App</DialogTitle>
          <DialogDescription className='max-w-sm'>
            Enter your mobile phone number with country code, and we will send you a verification code.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-1'>
          <Label htmlFor='number'>Phone Number</Label>
          <Input id='number' type='tel' maxLength={10} placeholder='Phone number' />
        </div>

        <DialogFooter className='flex-row gap-4'>
          <Button size='lg'>Submit</Button>
          <DialogClose asChild>
            <Button variant='outline' size='lg'>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuthenticatorDialog
