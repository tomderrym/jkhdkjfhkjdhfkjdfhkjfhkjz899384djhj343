/**
 * Shadcn Block: category-filter-06
 * Advanced property filter with location command popover search, rental period select dropdown, and synchronized dual sliders for price range and square footage with input fields
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/category-filter-06/category-filter-06.tsx
 * Dependencies: lucide-react, react-use
 * Registry Dependencies: badge, button, card, checkbox, command, input, label, popover, select, sheet, slider, switch, utils
 */

'use client'

import { useEffect, useState } from 'react'

import { CheckIcon, ChevronDownIcon, FilterIcon } from 'lucide-react'
import { useMedia } from 'react-use'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
import { useSliderWithInput } from '@/hooks/use-slider-with-input'

type CategoryFilterProps = {
  className?: string
}

const items = [
  'California',
  'Florida',
  'Montana',
  'New York',
  'Oregon',
  'Washington',
  'Wyoming',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan'
]

const CategoryFilter = ({ className }: CategoryFilterProps) => {
  const [open, setOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const isCompactScreen = useMedia('(max-width: 767px)', false)

  useEffect(() => {
    if (!isCompactScreen) {
      setOpen(false)
    }
  }, [isCompactScreen])

  const FilterContent = () => {
    const minPrice = 1000
    const maxPrice = 5000000
    const initialPrice = [500000, 1500000]

    const minSqrFt = 700
    const maxSqrFt = 50000
    const initialSqrFt = [5000, 15000]

    const {
      sliderValue: priceSliderValue,
      inputValues: priceInputValues,
      validateAndUpdateValue: priceValidateAndUpdateValue,
      handleInputChange: handlePriceInputChange,
      handleSliderChange: handlePriceSliderChange
    } = useSliderWithInput({ minValue: minPrice, maxValue: maxPrice, initialValue: initialPrice })

    const {
      sliderValue: sqrFtSliderValue,
      inputValues: sqrFtInputValues,
      validateAndUpdateValue: sqrFtValidateAndUpdateValue,
      handleInputChange: handleSqrFtInputChange,
      handleSliderChange: handleSqrFtSliderChange
    } = useSliderWithInput({ minValue: minSqrFt, maxValue: maxSqrFt, initialValue: initialSqrFt })

    return (
      <div className='space-y-8 px-4'>
        {/* Location */}
        <div className='space-y-2'>
          <Label htmlFor='location'>Location</Label>
          <Popover open={locationOpen} onOpenChange={setLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                id='location'
                variant='outline'
                role='combobox'
                aria-expanded={open}
                className='bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]'
              >
                {value ? (
                  <span className='flex min-w-0 items-center gap-2'>
                    <span className='truncate'>{value}</span>
                  </span>
                ) : (
                  <span className='text-muted-foreground'>Any city</span>
                )}
                <ChevronDownIcon size={16} className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0' align='start'>
              <Command>
                <CommandInput placeholder='Search item...' />
                <CommandList>
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {items.map(item => (
                      <CommandItem
                        key={item}
                        value={item}
                        onSelect={currentValue => {
                          setValue(currentValue)
                          setLocationOpen(false)
                        }}
                      >
                        {item}
                        {value === item && <CheckIcon size={16} className='ml-auto' />}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Rental Period */}
        <div className='space-y-2'>
          <Label htmlFor='rentalPeriod'>Rental Period</Label>
          <div className='relative grid h-8.5 grid-cols-[1fr_1fr] font-medium'>
            <Switch
              id='rentalPeriod'
              className='peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:!bg-background absolute inset-0 h-[inherit] w-full rounded-lg [&_span]:ms-0.25 [&_span]:h-7 [&_span]:w-1/2 [&_span]:!rounded-lg [&_span]:transition-transform [&_span]:duration-450 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-[99%] [&_span]:data-[state=checked]:rtl:-translate-x-[99%]'
              aria-label='Switch with icon indicators'
            />
            <span className='peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative flex w-full items-center justify-center text-center'>
              Yearly
            </span>
            <span className='peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative flex items-center justify-center text-center'>
              Monthly
            </span>
          </div>
        </div>

        {/* Property Type */}
        <div className='space-y-4'>
          <Label>Property type</Label>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Checkbox id='singleFamily' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='singleFamily'>Single-Family</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='townHomes' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='townHomes'>Townhomes</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='multiFamily' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='multiFamily'>Multi-Family</Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox id='condo' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='condo'>Condo</Label>
            </div>
          </div>
        </div>

        {/* Furnished Type */}
        <div className='space-y-2'>
          <Label htmlFor='furnishedType'>Furnished Type</Label>
          <div className='relative grid h-8.5 grid-cols-[1fr_1fr] font-medium'>
            <Switch
              id='furnishedType'
              className='peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:!bg-background absolute inset-0 h-[inherit] w-full rounded-lg [&_span]:ms-0.25 [&_span]:h-7 [&_span]:w-1/2 [&_span]:!rounded-lg [&_span]:transition-transform [&_span]:duration-450 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-[99%] [&_span]:data-[state=checked]:rtl:-translate-x-[99%]'
              aria-label='Switch with icon indicators'
            />
            <span className='peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative flex w-full items-center justify-center text-center'>
              Furnished
            </span>
            <span className='peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative flex items-center justify-center text-center'>
              Unfurnished
            </span>
          </div>
        </div>

        {/* Bedrooms */}
        <div className='space-y-2'>
          <Label>Bedrooms</Label>
          <div className='flex items-center gap-2'>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='anyBedrooms' className='sr-only' />
              <label htmlFor='anyBedrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                Any
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='1Bedroom' className='sr-only' />
              <label htmlFor='1Bedroom' className='cursor-pointer select-none after:absolute after:inset-0'>
                1
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='2Bedrooms' className='sr-only' />
              <label htmlFor='2Bedrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                2
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='3Bedrooms' className='sr-only' />
              <label htmlFor='3Bedrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                3
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='4Bedrooms' className='sr-only' />
              <label htmlFor='4Bedrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                4
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='5+Bedrooms' className='sr-only' />
              <label htmlFor='5+Bedrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                5+
              </label>
            </Badge>
          </div>
        </div>

        {/* Bathrooms */}
        <div className='space-y-2'>
          <Label>Bathrooms</Label>
          <div className='flex items-center gap-2'>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='anyBathrooms' className='sr-only' />
              <label htmlFor='anyBathrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                Any
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='1Bathroom' className='sr-only' />
              <label htmlFor='1Bathroom' className='cursor-pointer select-none after:absolute after:inset-0'>
                1
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='2Bathrooms' className='sr-only' />
              <label htmlFor='2Bathrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                2
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='3Bathrooms' className='sr-only' />
              <label htmlFor='3Bathrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                3
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='4Bathrooms' className='sr-only' />
              <label htmlFor='4Bathrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                4
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='5+Bathrooms' className='sr-only' />
              <label htmlFor='5+Bathrooms' className='cursor-pointer select-none after:absolute after:inset-0'>
                5+
              </label>
            </Badge>
          </div>
        </div>

        {/* Price Range */}
        <div className='*:not-first:mt-3'>
          <Label>Price Range</Label>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <Input
                className='flex-1'
                type='text'
                inputMode='decimal'
                value={priceInputValues[0]}
                onChange={e => handlePriceInputChange(e, 0)}
                onBlur={() => priceValidateAndUpdateValue(priceInputValues[0], 0)}
                placeholder='Min'
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    priceValidateAndUpdateValue(priceInputValues[0], 0)
                  }
                }}
                aria-label='Enter minimum value'
              />
              <Input
                className='flex-1'
                type='text'
                inputMode='decimal'
                value={priceInputValues[1]}
                onChange={e => handlePriceInputChange(e, 1)}
                onBlur={() => priceValidateAndUpdateValue(priceInputValues[1], 1)}
                placeholder='Max'
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    priceValidateAndUpdateValue(priceInputValues[1], 1)
                  }
                }}
                aria-label='Enter maximum value'
              />
            </div>
            <Slider
              className='grow'
              value={priceSliderValue}
              onValueChange={handlePriceSliderChange}
              min={minPrice}
              max={maxPrice}
              aria-label='Dual range slider with input'
            />
            <div className='text-muted-foreground flex items-center justify-between'>
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Square Feet */}
        <div className='*:not-first:mt-3'>
          <Label>Price Range</Label>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <Input
                className='flex-1'
                type='text'
                inputMode='decimal'
                value={sqrFtInputValues[0]}
                onChange={e => handleSqrFtInputChange(e, 0)}
                onBlur={() => sqrFtValidateAndUpdateValue(sqrFtInputValues[0], 0)}
                placeholder='Min'
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    sqrFtValidateAndUpdateValue(sqrFtInputValues[0], 0)
                  }
                }}
                aria-label='Enter minimum value'
              />
              <Input
                className='flex-1'
                type='text'
                inputMode='decimal'
                value={sqrFtInputValues[1]}
                onChange={e => handleSqrFtInputChange(e, 1)}
                onBlur={() => sqrFtValidateAndUpdateValue(sqrFtInputValues[1], 1)}
                placeholder='Max'
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    sqrFtValidateAndUpdateValue(sqrFtInputValues[1], 1)
                  }
                }}
                aria-label='Enter maximum value'
              />
            </div>
            <Slider
              className='grow'
              value={sqrFtSliderValue}
              onValueChange={handleSqrFtSliderChange}
              min={minSqrFt}
              max={maxSqrFt}
              aria-label='Dual range slider with input'
            />
            <div className='text-muted-foreground flex items-center justify-between'>
              <span>{minSqrFt} Sq Ft</span>
              <span>{maxSqrFt} Sq Ft</span>
            </div>
          </div>
        </div>

        {/* Year Built */}
        <div className='space-y-3'>
          <Label>Year Built</Label>
          <div className='flex items-center gap-2'>
            <Select>
              <SelectTrigger className='flex-1'>
                <SelectValue placeholder='Min' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='2018'>2018</SelectItem>
                  <SelectItem value='2019'>2019</SelectItem>
                  <SelectItem value='2020'>2020</SelectItem>
                  <SelectItem value='2021'>2021</SelectItem>
                  <SelectItem value='2022'>2022</SelectItem>
                  <SelectItem value='2023'>2023</SelectItem>
                  <SelectItem value='2024'>2024</SelectItem>
                  <SelectItem value='2025'>2025</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='flex-1'>
                <SelectValue placeholder='Max' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='2018'>2018</SelectItem>
                  <SelectItem value='2019'>2019</SelectItem>
                  <SelectItem value='2020'>2020</SelectItem>
                  <SelectItem value='2021'>2021</SelectItem>
                  <SelectItem value='2022'>2022</SelectItem>
                  <SelectItem value='2023'>2023</SelectItem>
                  <SelectItem value='2024'>2024</SelectItem>
                  <SelectItem value='2025'>2025</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Amenities */}
        <div className='space-y-2'>
          <Label>Amenities</Label>
          <div className='flex flex-wrap items-center gap-2'>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='airConditioning' className='sr-only' />
              <label htmlFor='airConditioning' className='cursor-pointer select-none after:absolute after:inset-0'>
                Air Conditioning
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='assistedLeaving' className='sr-only' />
              <label htmlFor='assistedLeaving' className='cursor-pointer select-none after:absolute after:inset-0'>
                Assisted Leaving
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='controlledAccess' className='sr-only' />
              <label htmlFor='controlledAccess' className='cursor-pointer select-none after:absolute after:inset-0'>
                Controlled Access
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='highspeedInternet' className='sr-only' />
              <label htmlFor='highspeedInternet' className='cursor-pointer select-none after:absolute after:inset-0'>
                Highspeed internet
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='extraStorage' className='sr-only' />
              <label htmlFor='extraStorage' className='cursor-pointer select-none after:absolute after:inset-0'>
                Extra Storage
              </label>
            </Badge>
            <Badge className='bg-primary/10 [&:has([data-state="checked"])]:bg-primary text-primary [&:has([data-state="checked"])]:text-primary-foreground relative gap-2 rounded-full'>
              <Checkbox id='petAllowed' className='sr-only' />
              <label htmlFor='petAllowed' className='cursor-pointer select-none after:absolute after:inset-0'>
                Pet allowed
              </label>
            </Badge>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Mobile Filter Trigger */}
        <div className='mb-4 md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' className='w-full'>
                <FilterIcon className='mr-2 size-4' />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] gap-0 overflow-y-auto sm:w-[400px]'>
              <SheetHeader className='pb-0'>
                <SheetTitle className='text-2xl'>Property Filter</SheetTitle>
              </SheetHeader>
              <div className='mt-6 mb-4'>
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className='grid grid-cols-6 gap-6'>
          {/* Desktop Filter Card */}
          <Card
            className={cn(
              'col-span-2 hidden gap-6 rounded-lg py-4 shadow-none md:inline-flex md:max-lg:col-span-3',
              className
            )}
          >
            <CardHeader className='gap-0 px-4'>
              <CardTitle className='text-2xl'>Property Filter</CardTitle>
            </CardHeader>
            <CardContent className='px-0'>
              <FilterContent />
            </CardContent>
          </Card>
          <div className='col-span-6 min-h-150 rounded-lg border border-dashed md:col-span-4 md:max-lg:col-span-3' />
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
