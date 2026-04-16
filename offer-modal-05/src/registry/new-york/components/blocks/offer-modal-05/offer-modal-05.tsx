'use client'

import { useState, useEffect, type ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type OfferModalProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
}

const OfferModal05 = ({ trigger, defaultOpen }: OfferModalProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false)
  const [copied, setCopied] = useState(false)

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 18,
    minutes: 48,
    seconds: 31
  })

  // Calculate total seconds for easier countdown management
  const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds

  // Countdown timer effect using the same pattern as OTP component
  useEffect(() => {
    if (totalSeconds > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => {
          const currentTotal = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds

          if (currentTotal <= 1) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
          }

          const newTotal = currentTotal - 1
          const days = Math.floor(newTotal / 86400)
          const hours = Math.floor((newTotal % 86400) / 3600)
          const minutes = Math.floor((newTotal % 3600) / 60)
          const seconds = newTotal % 60

          return { days, hours, minutes, seconds }
        })
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [totalSeconds])

  const couponCode = 'COUNTDOWN20'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot="dialog-close"]]:bg-primary/10 flex w-full flex-col items-center justify-center gap-6 text-center lg:max-w-lg [&_[data-slot="dialog-close"]]:flex [&_[data-slot="dialog-close"]]:size-7 [&_[data-slot="dialog-close"]]:items-center [&_[data-slot="dialog-close"]]:justify-center [&_[data-slot="dialog-close"]]:rounded-full'>
        <DialogTitle className='text-3xl font-semibold'>
          Get 20% off <br /> Before time runs out!
        </DialogTitle>

        {/* Countdown Timer */}
        <div className='grid w-full grid-cols-4 justify-between gap-5'>
          <div className='flex flex-col items-center gap-1 px-4'>
            <h4 className='text-3xl font-medium'>{timeLeft.days}</h4>
            <p>DAYS</p>
          </div>
          <div className='flex flex-col items-center gap-1 px-4'>
            <h4 className='text-3xl font-medium'>{timeLeft.hours}</h4>
            <p>HOURS</p>
          </div>
          <div className='flex flex-col items-center gap-1 px-4'>
            <h4 className='text-3xl font-medium'>{timeLeft.minutes}</h4>
            <p>MIN</p>
          </div>
          <div className='flex flex-col items-center gap-1 px-4'>
            <h4 className='text-3xl font-medium'>{timeLeft.seconds}</h4>
            <p>SEC</p>
          </div>
        </div>

        {/* Product Image */}
        <div className='flex h-48 w-full items-center justify-center rounded-sm bg-sky-300'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/offer-modal/image-4.png'
            alt='Offer Modal 5'
            className='h-38.5 w-auto object-cover drop-shadow-2xl'
          />
        </div>

        <p className='text-muted-foreground underline'>Use this code at checkout:</p>

        {/* Coupon Code Section */}
        <div className='flex w-full flex-col gap-2'>
          <Button
            variant='outline'
            size='lg'
            className='border-2 border-dashed text-lg tracking-wider hover:bg-transparent'
          >
            {couponCode}
          </Button>
          <Button size='lg' onClick={handleCopy} className='w-full'>
            {copied ? 'Copied!' : 'Copy Code'}
          </Button>
        </div>

        <a href='#' className='text-muted-foreground hover:text-primary underline'>
          Remind me later!
        </a>
      </DialogContent>
    </Dialog>
  )
}

export default OfferModal05
