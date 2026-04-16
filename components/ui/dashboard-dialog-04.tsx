/**
 * Shadcn Block: dashboard-dialog-04
 * A workspace creation dialog with form inputs for workspace name, description, settings configuration, and team collaboration setup.
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/dashboard-dialog-04/dialog-workspace.tsx
 * Dependencies: none
 * Registry Dependencies: button, dialog, input, label, utils
 */

'use client'

import { useState, type ReactNode } from 'react'

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

const WorkspaceDialog = ({ defaultOpen = false, trigger, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent
        className={cn(
          'sm:max-w-115 [&>[data-slot=dialog-close]]:top-2.5 [&>[data-slot=dialog-close]]:right-2.5 [&>[data-slot=dialog-close]>svg]:size-5',
          className
        )}
      >
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-2.png'
          alt='connect-workspace'
          className='rounded-md'
        />
        <DialogHeader className='text-left'>
          <DialogTitle className='leading-7'>Connect Workspace</DialogTitle>
          <DialogDescription className='text-base'>
            Send a connection request to another workspace to share content, sessions, and community spaces.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-1'>
          <Label htmlFor='url-input'>Workspace URL</Label>
          <Input
            id='url-input'
            type='text'
            placeholder='Workspace URL'
            defaultValue='github.shadcnstudio.com'
            className='h-10'
          />
        </div>

        <DialogFooter className='gap-4'>
          <Button variant='outline' size='lg' className='sm:f{cn(lex-, className1'>
            Cancel
          </Button>
          <Button size='lg' className='sm:flex-1'>
            Send request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default WorkspaceDialog
