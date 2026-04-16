/**
 * Shadcn Block: category-filter-04
 * Horizontal card-based filter with multi-select dropdowns for price range, brand, and storage capacity, plus rating slider with star display in dropdown menu
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/category-filter-04/category-filter-04.tsx
 * Dependencies: lucide-react
 * Registry Dependencies: card, command, dropdown-menu, label, slider, utils
 */

'use client'

import { useState } from 'react'

import { FunnelIcon, StarIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import MultipleSelector from '@/components/ui/multi-select'
import type { Option } from '@/components/ui/multi-select'
import { Slider } from '@/components/ui/slider'
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type CategoryFilterProps = {
  className?: string
}

const priceRange: Option[] = [
  {
    value: '> 399',
    label: 'Below $399'
  },
  {
    value: '> 499',
    label: 'Below $399'
  },
  {
    value: '> 599',
    label: 'Below $399'
  },
  {
    value: '> 699',
    label: 'Below $699'
  },
  {
    value: '> 799',
    label: 'Below $799'
  },
  {
    value: '> 1500',
    label: 'Below $1500'
  }
]

const brands: Option[] = [
  {
    value: 'apple',
    label: 'Apple'
  },
  {
    value: 'samsung',
    label: 'Samsung'
  },
  {
    value: 'huawei',
    label: 'Huawei'
  },
  {
    value: 'onePlus',
    label: 'OnePlus'
  },
  {
    value: 'nothing',
    label: 'Nothing'
  },
  {
    value: 'lg',
    label: 'LG'
  }
]

const storageCapacities: Option[] = [
  {
    value: '64GB',
    label: '64 GB'
  },
  {
    value: '128GB',
    label: '128 GB'
  },
  {
    value: '256GB',
    label: '256 GB'
  },
  {
    value: '512GB',
    label: '512 GB'
  },
  {
    value: '1TB',
    label: '1 TB'
  }
]

const CategoryFilter = ({ className }: CategoryFilterProps) => {
  const [selectRating, setSelectRating] = useState([2, 4])

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className={cn('shadow-none', className)}>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-xl'>
              <FunnelIcon className='size-6' />
              Advanced Filter
            </CardTitle>
          </CardHeader>
          <CardContent className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {/* Price Range */}
            <div className='space-y-1'>
              <Label>Price Range</Label>
              <MultipleSelector
                commandProps={{
                  label: 'Select price range'
                }}
                value={priceRange.slice(0, 1)}
                defaultOptions={priceRange}
                placeholder='Select price range'
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={<p className='text-center text-sm'>No results found</p>}
                className='min-h-10 w-full'
              />
            </div>

            {/* Brand */}
            <div className='space-y-1'>
              <Label>Brand</Label>
              <MultipleSelector
                commandProps={{
                  label: 'Select brand'
                }}
                value={brands.slice(0, 1)}
                defaultOptions={brands}
                placeholder='Select brand'
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={<p className='text-center text-sm'>No results found</p>}
                className='min-h-10 w-full'
              />
            </div>

            {/* Customer rating */}
            <DropdownMenu>
              <div className='flex flex-col gap-1'>
                <span className='text-sm leading-none font-medium'>Customer Rating</span>
                <DropdownMenuTrigger className='flex rounded-md border px-4 py-2.25 text-sm'>
                  {selectRating[0]}-{selectRating[1]} rating
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start' className='w-72 shadow-none'>
                  <div className='space-y-3 px-4'>
                    <Label className='text-xl font-medium'>Rating</Label>
                    <div>
                      <Slider
                        value={selectRating}
                        onValueChange={setSelectRating}
                        min={1}
                        max={5}
                        aria-label='Rating slider'
                      />
                      <span className='mt-3 flex w-full items-center justify-between gap-1' aria-hidden='true'>
                        <span className='flex items-center gap-1'>
                          1 <StarIcon className='mb-1.25 size-4 text-amber-600 dark:text-amber-400' />
                        </span>
                        <span className='flex items-center gap-1'>
                          2 <StarIcon className='mb-1.25 size-4 text-amber-600 dark:text-amber-400' />
                        </span>
                        <span className='flex items-center gap-1'>
                          3 <StarIcon className='mb-1.25 size-4 text-amber-600 dark:text-amber-400' />
                        </span>
                        <span className='flex items-center gap-1'>
                          4 <StarIcon className='mb-1.25 size-4 text-amber-600 dark:text-amber-400' />
                        </span>
                        <span className='flex items-center gap-1'>
                          5 <StarIcon className='mb-1.25 size-4 text-amber-600 dark:text-amber-400' />
                        </span>
                      </span>
                    </div>
                  </div>
                </DropdownMenuContent>
              </div>
            </DropdownMenu>

            {/* Brand */}
            <div className='space-y-1'>
              <Label>Storage Capacity</Label>
              <MultipleSelector
                commandProps={{
                  label: 'Select storage capacity'
                }}
                value={storageCapacities.slice(0, 1)}
                defaultOptions={storageCapacities}
                placeholder='Select storage capacity'
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={<p className='text-center text-sm'>No results found</p>}
                className='min-h-10 w-full'
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CategoryFilter
