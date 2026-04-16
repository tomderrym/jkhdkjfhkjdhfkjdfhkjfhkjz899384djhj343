/**
 * Shadcn Block: dashboard-dialog-02
 * A confirmation dialog for critical actions with clear warning message, action confirmation buttons, and user avatar display for personalization.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/dashboard-dialog-02/dialog-confirmation.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: avatar, button, dialog, utils
 */

'use client'

import { useState, type ReactNode } from 'react'

import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  className?: string
}

const ConfirmationDialog = ({ defaultOpen = false, trigger, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn('sm:max-w-145 [&>[data-slot=dialog-close]>svg]:size-5', className)}>
        <DialogHeader className='items-center gap-4'>
          <Avatar className='size-15 border bg-transparent p-2'>
            <AvatarFallback>
              <div className='bg-muted flex items-center justify-center'>
                <CheckIcon className='size-7' />
              </div>
            </AvatarFallback>
          </Avatar>
          <div className='space-y-3.5 text-center'>
            <DialogTitle className='leading-7'>Congratulations!</DialogTitle>
            <DialogDescription className='max-w-sm'>
              You have successfully subscribed! 🎉 You will never miss our updates, latest news, and exclusive offers.
            </DialogDescription>
          </div>
        </DialogHeader>

        <p className='text-center font-medium'>Thank you for joining our community!</p>

        <DialogFooter className='flex-row !justify-center'>
          <Button size='lg'>Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmationDialog
