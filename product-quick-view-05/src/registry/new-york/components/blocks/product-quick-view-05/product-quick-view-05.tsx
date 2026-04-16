'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { StarIcon } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Rating } from '@/components/ui/rating'

type ProductQuickViewProps = {
  trigger?: ReactNode
  defaultOpen?: boolean
  productImages: string[]
  sizes: { value: string; label: string }[]
  colors: { value: string; colorOption: string }[]
}

const ProductQuickView = ({ defaultOpen = false, trigger, productImages, sizes, colors }: ProductQuickViewProps) => {
  const [open, setOpen] = useState(defaultOpen)
  const [selectedColor, setSelectedColor] = useState('blue')
  const [selectedSize, setSelectedSize] = useState('7')

  const [selectedImage, setSelectedImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Sync carousel with thumbnail selection
  useEffect(() => {
    if (!api) return

    api.scrollTo(selectedImage)
  }, [api, selectedImage])

  // Update selectedImage when carousel changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedImage(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className='[&_[data-slot="dialog-close"]]:bg-primary/10 flex max-h-[calc(100%-3rem)] justify-center overflow-hidden overflow-y-auto p-0 lg:w-[calc(100%-3rem)] lg:max-w-6xl [&_[data-slot="dialog-close"]]:flex [&_[data-slot="dialog-close"]]:size-7 [&_[data-slot="dialog-close"]]:items-center [&_[data-slot="dialog-close"]]:justify-center [&_[data-slot="dialog-close"]]:rounded-full'>
        <div className='grid grid-cols-1 gap-6 p-6 lg:grid-cols-5'>
          {/* Image Carousel */}
          <div className='relative w-full lg:col-span-3'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-4'>
              {/* Thumbnail Navigation */}
              <div className='flex gap-5 sm:flex-col'>
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'max-h-31 overflow-hidden rounded-lg transition-all duration-200',
                      selectedImage === index ? 'opacity-100' : 'opacity-50'
                    )}
                  >
                    <img src={image} alt={`Product view ${index + 1}`} className='size-full object-cover' />
                  </button>
                ))}
              </div>

              {/* Main Image Display */}
              <div className='sm:col-span-3'>
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
                        <div className='h-140 overflow-hidden rounded-lg bg-gray-100 max-sm:h-96'>
                          <img src={image} alt={`Product view ${index + 1}`} className='h-full w-full object-cover' />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <Badge className='absolute top-5 left-5 px-3 py-1'>
                    <StarIcon className='size-5' />
                    Highly Rated
                  </Badge>
                  <div className='absolute right-6 bottom-8 flex items-center gap-4'>
                    <CarouselPrevious
                      variant='default'
                      size='lg'
                      className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-full disabled:opacity-100'
                    />
                    <CarouselNext
                      variant='default'
                      className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-full disabled:opacity-100'
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className='flex flex-col gap-6 lg:col-span-2 lg:p-6'>
            <div className='space-y-4'>
              <DialogTitle className='text-2xl'>Air Jordan 1 Retro High OG First in Flight</DialogTitle>

              <div className='flex items-center gap-3'>
                <p className='text-2xl font-semibold'>$120.00</p>
                <Separator orientation='vertical' className='!h-4' />
                <div className='flex items-center gap-1'>
                  <Rating readOnly variant='yellow' size={20} value={4.5} precision={0.5} />
                  <p className='font-semibold'>(458 reviews)</p>
                </div>
              </div>
            </div>

            <DialogDescription className='text-base'>
              This iteration of the AJ1 reimagines Nike&apos;s first signature model with a fresh mix of colours.
              Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe
              that started it all.
            </DialogDescription>

            <div className='flex flex-1 flex-col justify-between gap-6'>
              <div className='flex flex-col gap-3'>
                <h4 className='text-muted-foreground text-lg font-medium'>Color:</h4>
                <RadioGroup className='flex' defaultValue={selectedColor} onValueChange={setSelectedColor}>
                  {colors.map(color => (
                    <label
                      key={`${color.value}`}
                      className={cn(
                        `has-focus-visible:ring-ring/50 has-data-disabled:opacity-50' relative size-6 rounded-full text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed`,
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

              <div className='flex flex-col gap-3'>
                <h4 className='text-muted-foreground text-lg font-medium'>Select Size :</h4>
                <RadioGroup className='flex gap-4' defaultValue={selectedSize} onValueChange={setSelectedSize}>
                  {sizes.map(sizeItem => (
                    <label
                      key={sizeItem.value}
                      className='border-input group has-data-[state=checked]:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-sm border px-2 py-1.5 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50'
                    >
                      <RadioGroupItem
                        id={sizeItem.value}
                        value={sizeItem.value}
                        className='sr-only after:absolute after:inset-0'
                        aria-label={`size-radio-${sizeItem.value}`}
                      />
                      <p className='text-foreground group-has-data-[state=checked]:text-primary-foreground text-sm leading-none font-medium'>
                        {sizeItem.label}
                      </p>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 max-sm:flex-col'>
              <Button size='lg' className='grow'>
                Add to Bag
              </Button>
              <Button size='lg' variant='outline' className='grow'>
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductQuickView
