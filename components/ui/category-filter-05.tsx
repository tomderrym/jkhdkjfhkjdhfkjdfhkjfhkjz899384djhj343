/**
 * Shadcn Block: category-filter-05
 * Comprehensive sidebar filter with collapsible product type, size, and color sections, integrated price range slider with real-time output display, and custom checkbox styling
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/category-filter-05/category-filter-05.tsx
 * Dependencies: @radix-ui/react-checkbox, lucide-react, react-use
 * Registry Dependencies: button, card, checkbox, collapsible, input, label, sheet, slider, utils
 */

'use client'

import { useEffect, useState } from 'react'

import { ChevronDownIcon, CircleIcon, FilterIcon, SearchIcon } from 'lucide-react'
import { useMedia } from 'react-use'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'

// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type CategoryFilterProps = {
  className?: string
}

const CategoryFilter = ({ className }: CategoryFilterProps) => {
  const [open, setOpen] = useState(false)

  const isCompactScreen = useMedia('(max-width: 767px)', false)

  const [value, setValue] = useState([2000, 8000])

  useEffect(() => {
    if (!isCompactScreen) {
      setOpen(false)
    }
  }, [isCompactScreen])

  const filterContent = (
    <div className='space-y-6'>
      {/* Product type */}
      <Collapsible defaultOpen className='flex w-full flex-col border-b px-4 pb-6'>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xl font-medium'>Product Type</div>
          <CollapsibleTrigger>
            <ChevronDownIcon className='size-6 transition-transform duration-300 [[data-state="open"]>&]:rotate-180' />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down space-y-3 overflow-hidden pt-3 transition-all duration-300'>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='jeans' defaultChecked className='size-6 [&_svg]:size-5' />
            <Label htmlFor='jeans'>Jeans</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='jerseyTops' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='jerseyTops'>Jersey Tops</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='jewellery' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='jewellery'>Jewellery & Watches</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='jumpsuits' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='jumpsuits'>Jumpsuits</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='nightwear' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='nightwear'>Nightwear</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='sportswear' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='sportswear'>Sportswear</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='shoes' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='shoes'>Shoes</Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Size */}
      <Collapsible defaultOpen className='flex w-full flex-col border-b px-4 pb-6'>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xl font-medium'>Size</div>
          <CollapsibleTrigger>
            <ChevronDownIcon className='size-6 transition-transform duration-300 [[data-state="open"]>&]:rotate-180' />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down space-y-3 overflow-hidden pt-3 transition-all duration-300'>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='small' defaultChecked className='size-6 [&_svg]:size-5' />
            <Label htmlFor='small'>S</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='medium' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='medium'>M</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='large' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='large'>L</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='extraLarge' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='extraLarge'>XL</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='oneSize' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='oneSize'>One Size</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='24' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='24'>24 Waist</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='33' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='33'>33 In</Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Prize Range */}
      <Collapsible defaultOpen className='flex w-full flex-col border-b px-4 pb-6'>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xl font-medium'>Prize Range</div>
          <CollapsibleTrigger>
            <ChevronDownIcon className='size-6 transition-transform duration-300 [[data-state="open"]>&]:rotate-180' />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down space-y-3 overflow-hidden pt-3 transition-all duration-300'>
          <div className='space-y-3 px-1'>
            <Slider value={value} max={10000} onValueChange={setValue} aria-label='Dual range slider with output' />
            <output className='text-muted-foreground flex items-center justify-between font-medium tabular-nums'>
              <span>${value[0]}</span>
              <span>${value[1]}</span>
            </output>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Color */}
      <Collapsible defaultOpen className='flex w-full flex-col border-b px-4 pb-6'>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xl font-medium'>Color</div>
          <CollapsibleTrigger>
            <ChevronDownIcon className='size-6 transition-transform duration-300 [[data-state="open"]>&]:rotate-180' />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down space-y-3 overflow-hidden pt-3 transition-all duration-300'>
          <div className='space-x-4 px-1'>
            <CheckboxPrimitive.Root
              data-slot='checkbox'
              defaultChecked
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-green-600/20 dark:focus-visible:ring-green-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-green-600 stroke-1 dark:stroke-green-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-green-600 stroke-green-600 stroke-1 dark:fill-green-400 dark:stroke-green-400' />
              </span>
            </CheckboxPrimitive.Root>

            <CheckboxPrimitive.Root
              data-slot='checkbox'
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-amber-600/20 dark:focus-visible:ring-amber-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-amber-600 stroke-1 dark:stroke-amber-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-amber-600 stroke-amber-600 stroke-1 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
            </CheckboxPrimitive.Root>

            <CheckboxPrimitive.Root
              data-slot='checkbox'
              defaultChecked
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-sky-600/20 dark:focus-visible:ring-sky-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-sky-600 stroke-1 dark:stroke-sky-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-sky-600 stroke-sky-600 stroke-1 dark:fill-sky-400 dark:stroke-sky-400' />
              </span>
            </CheckboxPrimitive.Root>

            <CheckboxPrimitive.Root
              data-slot='checkbox'
              defaultChecked
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-pink-600/20 dark:focus-visible:ring-pink-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-pink-600 stroke-1 dark:stroke-pink-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-pink-600 stroke-pink-600 stroke-1 dark:fill-pink-400 dark:stroke-pink-400' />
              </span>
            </CheckboxPrimitive.Root>

            <CheckboxPrimitive.Root
              data-slot='checkbox'
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-indigo-600/20 dark:focus-visible:ring-indigo-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-indigo-600 stroke-1 dark:stroke-indigo-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-indigo-600 stroke-indigo-600 stroke-1 dark:fill-indigo-400 dark:stroke-indigo-400' />
              </span>
            </CheckboxPrimitive.Root>

            <CheckboxPrimitive.Root
              data-slot='checkbox'
              defaultChecked
              className='group rounded-sm outline-none focus-visible:rounded-full focus-visible:ring-3 focus-visible:ring-teal-600/20 dark:focus-visible:ring-teal-400/20'
              aria-label='Circle icon'
            >
              <span className='group-data-[state=checked]:hidden'>
                <CircleIcon className='size-4 stroke-teal-600 stroke-1 dark:stroke-teal-400' />
              </span>
              <span className='group-data-[state=unchecked]:hidden'>
                <CircleIcon className='size-4 fill-teal-600 stroke-teal-600 stroke-1 dark:fill-teal-400 dark:stroke-teal-400' />
              </span>
            </CheckboxPrimitive.Root>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Brand */}
      <Collapsible defaultOpen className='flex w-full flex-col px-4'>
        <div className='flex items-center justify-between gap-4'>
          <div className='text-xl font-medium'>Brand</div>
          <CollapsibleTrigger>
            <ChevronDownIcon className='size-6 transition-transform duration-300 [[data-state="open"]>&]:rotate-180' />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down space-y-3 overflow-hidden pt-3 transition-all duration-300'>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='2ndDay' defaultChecked className='size-6 [&_svg]:size-5' />
            <Label htmlFor='2ndDay'>2nd Day</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='aQuestionOr' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='aQuestionOr'>A Question Or</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='aido' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='aido'>AIDO</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='alice&you' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='alice&you'>Alice & You</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='americanApparet' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='americanApparet'>American Apparet</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='americanVintage' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='americanVintage'>American Vintage</Label>
          </div>
          <div className='flex items-center gap-3 px-1'>
            <Checkbox id='aq' className='size-6 [&_svg]:size-5' />
            <Label htmlFor='aq'>AQ</Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )

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
              <SheetHeader className='gap-3 pb-0'>
                <SheetTitle className='text-2xl'>New Arrivals</SheetTitle>
                <div className='w-full'>
                  <Label htmlFor='search' className='sr-only'>
                    Search
                  </Label>
                  <div className='relative'>
                    <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
                      <SearchIcon className='size-4' />
                      <span className='sr-only'>Search</span>
                    </div>
                    <Input id='search' type='text' placeholder='Search here...' className='peer pl-9' />
                  </div>
                </div>
              </SheetHeader>
              <div className='mt-6 mb-4 space-y-6'>{filterContent}</div>
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
            <CardHeader className='gap-3 px-4'>
              <CardTitle className='text-2xl'>New Arrivals</CardTitle>

              <div className='w-full'>
                <Label htmlFor='search' className='sr-only'>
                  Search
                </Label>
                <div className='relative'>
                  <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
                    <SearchIcon className='size-4' />
                    <span className='sr-only'>Search</span>
                  </div>
                  <Input id='search' type='text' placeholder='Search here...' className='peer pl-9' />
                </div>
              </div>
            </CardHeader>
            <CardContent className='space-y-6 px-0'>{filterContent}</CardContent>
          </Card>
          <div className='col-span-6 min-h-100 rounded-lg border border-dashed md:col-span-4 md:max-lg:col-span-3' />
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
