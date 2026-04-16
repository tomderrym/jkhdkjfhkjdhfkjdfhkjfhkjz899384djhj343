'use client'

import { type ReactNode, useState } from 'react'

import {
  ArrowLeftRightIcon,
  Clock8Icon,
  MessageCircleQuestionIcon,
  MinusIcon,
  PlusIcon,
  Share2Icon,
  TruckIcon,
  UserCheckIcon
} from 'lucide-react'

import { Button as AriaButton, Group, Input, Label, NumberField } from 'react-aria-components'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Rating } from '@/components/ui/rating'

type ProductQuickViewProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
  productImages: string[]
  colors: { value: string; colorOption: string }[]
  paymentMethods: { name: string; imageUrl: string }[]
}

const ProductQuickView = ({
  defaultOpen = false,
  trigger,
  productImages,
  colors,
  paymentMethods
}: ProductQuickViewProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [selectedColor, setSelectedColor] = useState('blue')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot="dialog-close"]]:bg-primary/10 flex max-h-[calc(100%-3rem)] justify-center overflow-hidden overflow-y-auto p-0 lg:w-[calc(100%-3rem)] lg:max-w-6xl [&_[data-slot="dialog-close"]]:flex [&_[data-slot="dialog-close"]]:size-7 [&_[data-slot="dialog-close"]]:items-center [&_[data-slot="dialog-close"]]:justify-center [&_[data-slot="dialog-close"]]:rounded-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Image Carousel */}
          <Carousel
            className='h-full w-full'
            opts={{
              align: 'start',
              loop: true
            }}
          >
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className='relative h-162 overflow-hidden bg-gray-100 max-sm:h-96'>
                    <img src={image} alt={`Product view ${index + 1}`} className='h-full w-full object-cover' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant='default'
              size='lg'
              className='disabled:bg-primary/10 disabled:text-primary left-6 translate-y-0 rounded-md disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary right-6 translate-y-0 rounded-md disabled:opacity-100'
            />
          </Carousel>

          {/* Product Details */}
          <div className='flex flex-col justify-center gap-6 p-6'>
            <div className='space-y-4'>
              <DialogTitle className='text-xl'>Annalany Women&apos;s Brown Bucket</DialogTitle>

              <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className='text-lg font-medium'>$120.00</p>
                <div className='flex items-center gap-1'>
                  <Rating readOnly variant='yellow' size={20} value={4.5} precision={0.5} />
                  <p className='font-semibold'>(213 reviews)</p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-1'>
              <div className='flex items-center gap-2.5'>
                <UserCheckIcon className='size-5' />
                <p className='text-lg font-medium'>463</p>
              </div>
              <p className='text-muted-foreground'>people are viewing this bag</p>
            </div>

            <div className='flex flex-col justify-between gap-6'>
              <div className='flex items-center gap-3'>
                <h4 className='text-muted-foreground text-lg font-medium'>Color:</h4>
                <RadioGroup className='flex' defaultValue={selectedColor} onValueChange={setSelectedColor}>
                  {colors.map(color => (
                    <label
                      key={`${color.value}`}
                      className={cn(
                        'has-focus-visible:ring-ring/50 relative size-5 rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[4px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50',
                        color.colorOption
                      )}
                    >
                      <RadioGroupItem
                        id={color.value}
                        value={color.value}
                        className='sr-only after:absolute after:inset-0'
                        aria-label={`color-radio-${color.value}`}
                      />
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <Separator />

            <div className='flex items-end gap-4'>
              <NumberField defaultValue={1} minValue={1} className='w-full flex-1 space-y-2'>
                <Label className='text-muted-foreground flex items-center gap-2 text-lg leading-none font-normal select-none'>
                  Quantity :
                </Label>
                <Group className='dark:bg-input/30 border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 min-w-0 items-center overflow-hidden rounded-md border bg-transparent text-sm whitespace-nowrap transition-[color] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px]'>
                  <AriaButton
                    slot='decrement'
                    className='bg-primary/10 hover:bg-primary/20 ms-3 flex size-5 shrink-0 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <MinusIcon className='size-3' />
                    <span className='sr-only'>Decrement</span>
                  </AriaButton>
                  <Input className='selection:bg-primary selection:text-primary-foreground w-full grow px-3 py-2 text-center tabular-nums outline-none' />
                  <AriaButton
                    slot='increment'
                    className='bg-primary/10 hover:bg-primary/20 me-3 flex size-5 shrink-0 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <PlusIcon className='size-3' />
                    <span className='sr-only'>Increment</span>
                  </AriaButton>
                </Group>
              </NumberField>

              <Button variant='outline' className='flex-1'>
                Add to Card
              </Button>
            </div>

            <Button className='w-full'>Buy Now</Button>

            <div className='flex flex-wrap items-center gap-x-8 gap-y-6'>
              <div className='flex items-center gap-3'>
                <ArrowLeftRightIcon className='size-4.5' />
                <p className='font-medium'>Compare</p>
              </div>
              <div className='flex items-center gap-3'>
                <MessageCircleQuestionIcon className='size-4.5' />
                <p className='font-medium'>Ask Question</p>
              </div>
              <div className='flex items-center gap-3'>
                <Share2Icon className='size-4.5' />
                <p className='font-medium'>Share</p>
              </div>
            </div>

            <Separator />

            <div className='text-muted-foreground space-y-3'>
              <div className='flex items-center gap-3'>
                <Clock8Icon />
                <span className='font-medium'>Estimated Delivery:</span>
                <span>08 - 15 Jan, 2025</span>
              </div>
              <div className='flex items-center gap-3'>
                <TruckIcon className='size-6 shrink-0' />
                <span className='font-medium'>Free shipping & Easy Returns:</span>
                <span>On all Orders over $200.00</span>
              </div>
            </div>

            <div className='flex h-10 items-center justify-center gap-5 rounded-md border p-2'>
              {paymentMethods.map((method, index) => (
                <img key={index} src={method.imageUrl} alt={method.name} className='h-6' />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductQuickView
