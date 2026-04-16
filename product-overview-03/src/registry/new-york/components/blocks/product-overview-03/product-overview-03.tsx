'use client'

import { useId, useEffect, useState } from 'react'

import { MinusIcon, PlusIcon, HeartIcon } from 'lucide-react'
import { Button as AriaButton, Group, Input as AriaInput, NumberField } from 'react-aria-components'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'

type ProductOverviewProps = {
  productItems: {
    name: string
    description: string
    totalReview: number
    rating: number
    price: number
    hasDiscount?: boolean
    discountPercentage?: number
    shippingDetails: Array<{
      heading: string
      subText?: string
      shippingCharges?: number
      disabled?: boolean
      islink?: boolean
      href?: string
    }>
    info: Array<{
      title: string
      content: string | React.ReactNode
    }>
    warranty: Array<{
      year: string
      extendedWarrantyCharges: number
    }>
    images: Array<{
      src: string
      alt: string
    }>
    breadcrumbData: Array<{
      label: string
      href?: string
    }>
    defaultSize?: string
    defaultColorOption?: string
  }[]
  sizesChart: {
    value: string
    label: string
    disabled?: boolean
  }[]
  colorsChart: {
    value: string
    src: string
    disabled?: boolean
  }[]
}

const ProductOverview = ({ productItems, colorsChart, sizesChart }: ProductOverviewProps) => {
  const id = useId()

  const [api, setApi] = useState<CarouselApi>()
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(productItems[0]?.defaultColorOption || colorsChart[0]?.value || '')
  const [selectedSize, setSelectedSize] = useState(productItems[0]?.defaultSize || sizesChart[0]?.value || '')
  const [deliveryOption, setDeliveryOption] = useState(productItems[0]?.shippingDetails[0]?.heading || 'regular')
  const [selectedWarranty, setSelectedWarranty] = useState('')
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
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {productItems.map(item => {
          // Calculate prices per item
          const originalPrice = item.price
          const discountPercentage = item.discountPercentage || 0
          const hasDiscount = item.hasDiscount && discountPercentage > 0

          const finalPrice = hasDiscount ? originalPrice - (originalPrice * discountPercentage) / 100 : originalPrice

          return (
            <div key={item.name}>
              <Breadcrumb className='mb-8'>
                <BreadcrumbList>
                  {item.breadcrumbData.map((breadcrumb, index) => (
                    <div key={`${breadcrumb.label}-${index}`} className='flex items-center gap-2.5'>
                      <BreadcrumbItem>
                        {index === item.breadcrumbData.length - 1 ? (
                          <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={breadcrumb.href || '#'}>{breadcrumb.label}</BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {index < item.breadcrumbData.length - 1 && (
                        <BreadcrumbSeparator key={`${breadcrumb.label}-sep`} />
                      )}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>

              <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                {/* Left Side - Image Carousel */}
                <div className='flex flex-col gap-10'>
                  <div>
                    <Carousel
                      className='size-full'
                      setApi={setApi}
                      opts={{
                        align: 'start',
                        loop: true
                      }}
                    >
                      <CarouselContent>
                        {item.images.map((image, index) => (
                          <CarouselItem key={`${image.alt}-${index}`}>
                            <div className='relative h-165 overflow-hidden rounded-md bg-gray-100'>
                              <img
                                src={image.src}
                                alt={`Product view ${index + 1}`}
                                className='size-full object-contain'
                                width={800}
                                height={800}
                              />
                              <div className='absolute bottom-0 h-34 w-full rounded-b-md bg-linear-to-b from-transparent to-black/60'></div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <div className='absolute inset-x-0 bottom-8 flex justify-center gap-2'>
                        {Array.from({ length: count }).map((_, index) => (
                          <button
                            key={`carousel-dot-${index}`}
                            type='button'
                            className={cn(
                              'size-3.5 cursor-pointer rounded-full transition-colors',
                              index === current ? 'bg-primary' : 'bg-background'
                            )}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </Carousel>
                  </div>

                  <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                    {item.info.map((item, index) => (
                      <AccordionItem key={`item-${item.title}-${index}`} value={`item-${index + 1}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Right Side - Product Details */}
                <div className='space-y-7 rounded-md border p-6'>
                  <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>{item.name}</h2>
                    <div className='flex items-center gap-2'>
                      <Rating readOnly variant='yellow' size={24} value={item.rating} precision={0.5} />
                      <span className='text-muted-foreground font-medium'>{item.totalReview} Reviews</span>
                    </div>
                  </div>

                  {!hasDiscount ? (
                    <div>
                      <h4 className='text-2xl font-semibold'>${finalPrice.toFixed(2)}</h4>
                      <span className='mt-1 text-sm font-medium text-green-500'>Inclusive of all taxes</span>
                    </div>
                  ) : (
                    <div>
                      <div className='flex items-center gap-2'>
                        <h4 className='text-2xl font-semibold'>${finalPrice.toFixed(2)}</h4>
                        <span className='text-muted-foreground line-through'>${originalPrice.toFixed(2)}</span>
                        <span className='text-destructive font-medium'>( ${discountPercentage} OFF )</span>
                      </div>
                      <span className='mt-1 text-sm font-medium text-green-500'>Inclusive of all taxes</span>
                    </div>
                  )}

                  <p className='text-muted-foreground'>{item.description}</p>

                  {/* Color Selection */}
                  <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold'>Bag Color :</h4>
                    <RadioGroup className='flex' value={selectedColor} onValueChange={setSelectedColor}>
                      {colorsChart.map(colorItem => (
                        <label
                          key={`${id}-${colorItem.value}`}
                          htmlFor={`${id}-${colorItem.value}`}
                          className={cn(
                            `has-focus-visible:ring-ring/50 has-data-[state=checked]:border-primary relative size-16 overflow-hidden rounded-xl text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:border`
                          )}
                        >
                          <RadioGroupItem
                            id={`${id}-${colorItem.value}`}
                            value={colorItem.value}
                            className='sr-only after:absolute after:inset-0'
                            aria-label={`color-radio-${colorItem.value}`}
                            disabled={colorItem.disabled}
                          />
                          <img
                            src={colorItem.src}
                            alt={colorItem.value}
                            className='object-cover'
                            width={64}
                            height={64}
                          />
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                  {/* Size Selection */}
                  <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold'>Bag Size :</h4>
                    <RadioGroup className='flex' value={selectedSize} onValueChange={setSelectedSize}>
                      {sizesChart.map(sizeItem => (
                        <label
                          key={`${id}-${sizeItem.value}`}
                          htmlFor={`${id}-${sizeItem.value}`}
                          className='border-input group has-data-[state=checked]:bg-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 bg-background relative flex flex-col items-center gap-3 rounded-md border px-2 py-1 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50'
                        >
                          <RadioGroupItem
                            id={`${id}-${sizeItem.value}`}
                            value={sizeItem.value}
                            className='sr-only after:absolute after:inset-0'
                            aria-label={`size-radio-${sizeItem.value}`}
                            disabled={sizeItem.disabled}
                          />
                          <p className='text-foreground group-has-data-[state=checked]:text-primary-foreground text-xs leading-none font-medium'>
                            {sizeItem.label}
                          </p>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className='flex flex-col gap-4 sm:flex-row'>
                    <NumberField
                      className='w-full grow space-y-2 sm:max-w-60'
                      value={quantity}
                      onChange={setQuantity}
                      minValue={1}
                      formatOptions={{
                        useGrouping: false
                      }}
                    >
                      <Group className='dark:bg-input/30 border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full min-w-0 grow items-center overflow-hidden rounded-md border bg-transparent text-base whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px] md:text-sm'>
                        <AriaButton
                          slot='decrement'
                          className='bg-primary/10 text-muted-foreground hover:bg-accent hover:text-foreground ms-2 flex aspect-square h-5.5 items-center justify-center rounded-sm text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                        >
                          <MinusIcon className='size-3.5' />
                          <span className='sr-only'>Decrement</span>
                        </AriaButton>
                        <AriaInput className='selection:bg-primary selection:text-primary-foreground w-full grow px-3 py-2 text-center tabular-nums outline-none' />
                        <AriaButton
                          slot='increment'
                          className='bg-primary/10 text-muted-foreground hover:bg-accent hover:text-foreground me-2 flex aspect-square h-5.5 items-center justify-center rounded-sm text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
                        >
                          <PlusIcon className='size-3.5' />
                          <span className='sr-only'>Increment</span>
                        </AriaButton>
                      </Group>
                    </NumberField>
                    <Button className='grow'>Buy Now</Button>
                    <Button variant='outline' size='icon'>
                      <HeartIcon className='size-4' />
                    </Button>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold'>Delivery Options :</h4>
                    <RadioGroup
                      value={deliveryOption}
                      onValueChange={setDeliveryOption}
                      className='flex flex-col gap-4'
                    >
                      {item.shippingDetails.map(shippingItem => (
                        <div key={`${id}-${shippingItem.heading}`} className='flex gap-4'>
                          {shippingItem.disabled ? (
                            <>
                              <RadioGroupItem
                                value={shippingItem.heading}
                                id={shippingItem.heading}
                                className='mt-1 size-5 [&_svg]:size-3'
                                disabled
                              />
                              <div className='grid flex-1 space-y-0.5'>
                                <Label
                                  htmlFor={shippingItem.heading}
                                  className='text-muted-foreground text-base font-semibold'
                                >
                                  {shippingItem.heading}
                                </Label>
                                <p className='text-muted-foreground text-sm'>{shippingItem.subText}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <RadioGroupItem
                                value={shippingItem.heading}
                                id={shippingItem.heading}
                                className='mt-1 size-5 [&_svg]:size-3'
                              />
                              <div className='grid flex-1 space-y-0.5'>
                                <Label htmlFor={shippingItem.heading} className='text-base font-semibold'>
                                  {shippingItem.heading} - ${shippingItem.shippingCharges}
                                </Label>
                                {shippingItem.islink ? (
                                  <a href={shippingItem.href} className='text-sm underline'>
                                    {shippingItem.subText}
                                  </a>
                                ) : (
                                  <p className='text-muted-foreground text-sm'>{shippingItem.subText}</p>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold'>Add Extra Warranty :</h4>
                    <RadioGroup
                      value={selectedWarranty}
                      onValueChange={setSelectedWarranty}
                      className='flex items-center gap-4'
                    >
                      {item.warranty.map(warrantyItem => (
                        <div key={`${id}-${warrantyItem.year}`} className='flex items-center gap-3'>
                          <RadioGroupItem
                            value={warrantyItem.year}
                            id={`year-${warrantyItem.year}`}
                            className='size-6 [&_svg]:size-3.5'
                          />
                          <Label htmlFor={`year-${warrantyItem.year}`}>
                            {warrantyItem.year} year - ${warrantyItem.extendedWarrantyCharges}{' '}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductOverview
