/**
 * Shadcn Block: category-filter-03
 * Dialog-based advanced filter with removable badge filters, job status select, mode/frequency dropdowns, schedule toggle, and clear all functionality in scrollable content area
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/category-filter-03/category-filter-03.tsx
 * Dependencies: lucide-react, react-aria-components
 * Registry Dependencies: badge, button, checkbox, dialog, label, scroll-area, select, utils
 */

'use client'

import { useState, type ReactNode } from 'react'

import { FunnelIcon, XIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type OrderSummaryProps = {
  trigger: ReactNode
  defaultOpen?: boolean
  className?: string
  data: {
    id: string
    name: string
    price: number
    image: string
    color: string
    size: string
  }[]
  orderID: number
}

const CategoryFilter = ({ defaultOpen = false, trigger, className }: OrderSummaryProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [jobStatus, setJobStatus] = useState('running')
  const [mode, setMode] = useState('automatic')
  const [frequency, setFrequency] = useState('daily')
  const [hasSchedule, setHasSchedule] = useState('yes')

  const clearAllFilters = () => {
    setJobStatus('')
    setMode('')
    setFrequency('')
    setHasSchedule('')
  }

  const removeBadge = (filterType: 'jobStatus' | 'mode' | 'frequency' | 'hasSchedule') => {
    switch (filterType) {
      case 'jobStatus':
        setJobStatus('')
        break
      case 'mode':
        setMode('')
        break
      case 'frequency':
        setFrequency('')
        break
      case 'hasSchedule':
        setHasSchedule('')
        break
    }
  }

  const hasActiveFilters = jobStatus || mode || frequency || hasSchedule

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent
        className={cn(
          'flex max-h-[min(900px,95vh)] flex-col p-0 max-sm:max-h-[min(650px,80vh)] md:max-w-180 lg:max-w-197.5 [&>[data-slot=dialog-close]>svg]:size-5',
          className
        )}
      >
        <ScrollArea className='flex max-h-full flex-col overflow-hidden'>
          <div className='p-6'>
            <DialogHeader>
              <DialogTitle className='flex items-center gap-2 py-4 text-xl'>
                <FunnelIcon className='size-6' />
                Advanced Filter
              </DialogTitle>
            </DialogHeader>
            {hasActiveFilters && (
              <div className='flex items-center justify-between border-b py-4'>
                <div className='flex flex-wrap items-center gap-2'>
                  {jobStatus && (
                    <Badge variant='secondary' className='gap-1.5 rounded-sm px-3 py-1'>
                      <span className='font-medium capitalize'>{jobStatus}</span>
                      <button
                        onClick={() => removeBadge('jobStatus')}
                        className='ring-offset-background focus:ring-ring rounded-sm focus:ring-2 focus:ring-offset-2 focus:outline-none'
                      >
                        <XIcon className='size-3' />
                        <span className='sr-only'>Remove job status filter</span>
                      </button>
                    </Badge>
                  )}
                  {mode && (
                    <Badge variant='secondary' className='gap-1.5 rounded-sm px-3 py-1'>
                      <span className='font-medium capitalize'>{mode}</span>
                      <button
                        onClick={() => removeBadge('mode')}
                        className='ring-offset-background focus:ring-ring ml-0.5 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none'
                      >
                        <XIcon className='size-3' />
                        <span className='sr-only'>Remove mode filter</span>
                      </button>
                    </Badge>
                  )}
                  {frequency && (
                    <Badge variant='secondary' className='gap-1.5 rounded-sm px-3 py-1'>
                      <span className='font-medium capitalize'>{frequency}</span>
                      <button
                        onClick={() => removeBadge('frequency')}
                        className='ring-offset-background focus:ring-ring ml-0.5 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none'
                      >
                        <XIcon className='size-3' />
                        <span className='sr-only'>Remove frequency filter</span>
                      </button>
                    </Badge>
                  )}
                  {hasSchedule && (
                    <Badge variant='secondary' className='gap-1.5 rounded-sm px-3 py-1'>
                      <span className='font-medium capitalize'>{hasSchedule}</span>
                      <button
                        onClick={() => removeBadge('hasSchedule')}
                        className='ring-offset-background focus:ring-ring ml-0.5 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none'
                      >
                        <XIcon className='size-3' />
                        <span className='sr-only'>Remove schedule filter</span>
                      </button>
                    </Badge>
                  )}
                </div>
                <Badge className='bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive gap-1.5 rounded-sm border-none px-3 py-1 focus-visible:outline-none'>
                  <span className='font-medium capitalize'>Clear</span>
                  <button
                    onClick={clearAllFilters}
                    className='ring-offset-background focus:ring-ring rounded-sm focus:ring-2 focus:ring-offset-2 focus:outline-none'
                  >
                    <XIcon className='size-3' />
                    <span className='sr-only'>Remove job status filter</span>
                  </button>
                </Badge>
              </div>
            )}
            <div className='flex gap-6 border-b py-4 max-md:flex-col md:items-center'>
              <div className='flex items-center gap-3'>
                <Checkbox id='important' className='size-5' defaultChecked />
                <Label htmlFor='important'>Important</Label>
              </div>
              <div className='flex items-center gap-3'>
                <Checkbox id='toReview' className='size-5' defaultChecked />
                <Label htmlFor='toReview'>To Review</Label>
              </div>
              <div className='flex items-center gap-3'>
                <Checkbox id='notWorking' className='size-5' defaultChecked />
                <Label htmlFor='notWorking'>Not Working</Label>
              </div>
            </div>
            <div className='flex gap-6 border-b py-4 max-md:flex-col md:items-center'>
              <div className='w-full space-y-2'>
                <Label htmlFor='jobStatus'>Job Status</Label>
                <Select value={jobStatus} onValueChange={setJobStatus}>
                  <SelectTrigger id='jobStatus' className='w-full'>
                    <SelectValue placeholder='Select status...' />
                  </SelectTrigger>
                  <SelectContent className='data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
                    <SelectGroup>
                      <SelectItem value='pending'>Pending</SelectItem>
                      <SelectItem value='running'>Running</SelectItem>
                      <SelectItem value='completed'>Completed</SelectItem>
                      <SelectItem value='failed'>Failed</SelectItem>
                      <SelectItem value='cancelled'>Cancelled</SelectItem>
                      <SelectItem value='quarterly'>Quarterly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='w-full space-y-2'>
                <Label htmlFor='jobMode'>Mode</Label>
                <Select value={mode} onValueChange={setMode}>
                  <SelectTrigger id='jobMode' className='w-full'>
                    <SelectValue placeholder='Select mode...' />
                  </SelectTrigger>
                  <SelectContent className='data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
                    <SelectGroup>
                      <SelectItem value='manual'>Manual</SelectItem>
                      <SelectItem value='automatic'>Automatic</SelectItem>
                      <SelectItem value='scheduled'>Scheduled</SelectItem>
                      <SelectItem value='eventBased'>Event Based</SelectItem>
                      <SelectItem value='recurring'>Recurring</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='flex gap-6 py-4 max-md:flex-col md:items-center'>
              <div className='w-full space-y-2'>
                <Label htmlFor='frequency'>Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger id='frequency' className='w-full'>
                    <SelectValue placeholder='Select frequency' />
                  </SelectTrigger>
                  <SelectContent className='data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
                    <SelectGroup>
                      <SelectItem value='oneTime'>One Time</SelectItem>
                      <SelectItem value='hourly'>Hourly</SelectItem>
                      <SelectItem value='daily'>Daily</SelectItem>
                      <SelectItem value='monthly'>Monthly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='w-full space-y-2'>
                <Label htmlFor='hasSchedule'>Has Schedule</Label>
                <Select value={hasSchedule} onValueChange={setHasSchedule}>
                  <SelectTrigger id='hasSchedule' className='w-full'>
                    <SelectValue placeholder='Select schedule...' />
                  </SelectTrigger>
                  <SelectContent className='data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400'>
                    <SelectGroup>
                      <SelectItem value='yes'>Yes</SelectItem>
                      <SelectItem value='no'>No</SelectItem>
                      <SelectItem value='unknown'>Unknown</SelectItem>
                      <SelectItem value='inherited'>Inherited</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className='gap-6 max-sm:flex-col'>
              <Button variant='outline' size='lg' className='sm:flex-1'>
                Schedule
              </Button>
              <Button size='lg' className='sm:flex-1'>
                Save
              </Button>
            </DialogFooter>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default CategoryFilter
