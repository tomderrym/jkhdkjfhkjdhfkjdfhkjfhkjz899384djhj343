'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { MinusIcon, PlusIcon } from 'lucide-react'

import {
  Button as AriaButton,
  Group as AriaGroup,
  Input as AriaInput,
  NumberField as AriaNumberField,
  Label as AriaLabel
} from 'react-aria-components'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Rating } from '@/components/ui/rating'

type ProductQuickViewProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
  colors: { value: string; colorOption: string }[]
  productImages: string[]
  tabs: { name: string; value: string; content: string }[]
}

const ProductQuickView = ({ defaultOpen = false, trigger, productImages, colors, tabs }: ProductQuickViewProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [selectedColor, setSelectedColor] = useState('green')
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const handleResize = () => {
      setCount(api.scrollSnapList().length)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [api])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='flex justify-center overflow-hidden p-0 lg:w-[calc(100%-3rem)] lg:max-w-4xl [&_[data-slot="dialog-close"]]:flex [&_[data-slot="dialog-close"]]:size-7 [&_[data-slot="dialog-close"]]:items-center [&_[data-slot="dialog-close"]]:justify-center [&_[data-slot="dialog-close"]]:rounded-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Image Carousel */}
          <Carousel
            className='relative h-full w-full'
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true
            }}
          >
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className='h-132 overflow-hidden bg-gray-100 max-lg:h-96'>
                    <img src={image} alt={`Product view ${index + 1}`} className='h-full w-full object-cover' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <Badge variant='destructive' className='absolute top-8 left-5 px-3 py-1'>
              Sale!
            </Badge>

            <div className='absolute inset-x-0 bottom-8 flex justify-center gap-2'>
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'size-2.5 cursor-pointer rounded-full transition-colors',
                    index === current ? 'bg-primary' : 'bg-background'
                  )}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>

          {/* Product Details */}
          <div className='flex flex-col justify-between gap-5 px-6 py-8'>
            <h4 className='text-lg font-semibold uppercase'>Chairs</h4>
            <div className='space-y-1.5'>
              <DialogTitle className='text-2xl'>Jasper Arm Chair</DialogTitle>
              <DialogDescription className='text-base'>Internal Framing and legs</DialogDescription>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-6'>
              <p className='text-3xl font-semibold'>$89</p>
              <Rating readOnly variant='yellow' size={24} value={4.5} precision={0.5} />
            </div>

            <div className='w-full'>
              <Tabs defaultValue='description' className='gap-4'>
                <TabsList className='bg-background w-full justify-between rounded-none border-b p-0'>
                  {tabs.map(tab => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className='bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent uppercase focus-visible:z-10 data-[state=active]:shadow-none'
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {tabs.map(tab => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <p className='text-muted-foreground'>{tab.content}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className='flex justify-between gap-6'>
              <div className='flex flex-col justify-between gap-6'>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-medium uppercase'>Color</h4>
                  <RadioGroup className='flex' defaultValue={selectedColor} onValueChange={setSelectedColor}>
                    {colors.map(color => (
                      <label
                        key={`${color.value}`}
                        className={cn(
                          'has-focus-visible:ring-ring/50 relative size-10 rounded-sm text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[4px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50',
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

              <AriaNumberField defaultValue={1} minValue={1} aria-label='Quantity' className='space-y-3'>
                <AriaLabel className='flex items-center leading-none font-medium uppercase select-none'>
                  Quantity
                </AriaLabel>
                <AriaGroup className='dark:bg-input/30 border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 min-w-0 items-center overflow-hidden rounded-md border bg-transparent text-sm whitespace-nowrap transition-[color] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px]'>
                  <AriaButton
                    slot='decrement'
                    className='bg-primary/10 hover:bg-primary/20 ms-3 flex size-5 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <MinusIcon className='size-3' />
                    <span className='sr-only'>Decrement</span>
                  </AriaButton>
                  <AriaInput className='selection:bg-primary selection:text-primary-foreground w-15 px-3 py-2 text-center tabular-nums outline-none' />
                  <AriaButton
                    slot='increment'
                    className='bg-primary/10 hover:bg-primary/20 me-3 flex size-5 items-center justify-center rounded transition-[color] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <PlusIcon className='size-3' />
                    <span className='sr-only'>Increment</span>
                  </AriaButton>
                </AriaGroup>
              </AriaNumberField>
            </div>

            <div className='flex flex-1 gap-3 lg:items-end'>
              <Button size='lg' variant='outline' className='grow'>
                Wishlist
              </Button>
              <Button size='lg' className='grow'>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductQuickView
