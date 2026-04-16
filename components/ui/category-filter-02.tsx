/**
 * Shadcn Block: category-filter-02
 * Advanced collapsible filter interface with nested sections for list, company selection with dropdowns, location inputs for country/state/city, and employee range filters
 * 
 * Auto-extracted from: src/registry/new-york/components/blocks/category-filter-02/category-filter-02.tsx
 * Dependencies: lucide-react, react-use
 * Registry Dependencies: button, card, checkbox, collapsible, input, label, select, sheet, utils
 */

'use client'

import { useEffect, useState } from 'react'

import { FilterIcon, LockKeyholeIcon, MinusIcon, PlusIcon, SearchIcon } from 'lucide-react'
import { useMedia } from 'react-use'

import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
// // import { cn } from '@/lib/utils'
// Simple cn function replacement
const cn = (...classes) => classes.filter(Boolean).join(' ');
type CategoryFilterProps = {
  className?: string
}

const CategoryFilter = ({ className }: CategoryFilterProps) => {
  const [open, setOpen] = useState(false)
  const isCompactScreen = useMedia('(max-width: 767px)', false)

  useEffect(() => {
    if (!isCompactScreen) {
      setOpen(false)
    }
  }, [isCompactScreen])

  const filterContent = (
    <>
      <div>
        {/* List */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>List</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='jobs' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='jobs'>Jobs</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='profile' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='profile'>Profile</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='community' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='community'>Community</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* Company */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>Company</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='flex flex-col gap-4 px-1 py-3'>
              <div className='flex items-center gap-3'>
                <Checkbox id='isAnyOf' defaultChecked className='size-6 [&_svg]:size-5' />
                <Label htmlFor='isAnyOf'>Is any of</Label>
              </div>
              <div className='w-full max-w-xs space-y-2'>
                <Label htmlFor='companySelect' className='sr-only'>
                  Select company
                </Label>
                <Select defaultValue='apple'>
                  <SelectTrigger id='companySelect' className='w-full'>
                    <SelectValue placeholder='Select a fruit' />
                  </SelectTrigger>
                  <SelectContent className='data-[state=open]:!zoom-in-0 origin-center duration-400'>
                    <SelectGroup>
                      <SelectItem value='apple'>Apple</SelectItem>
                      <SelectItem value='ibm'>IBM</SelectItem>
                      <SelectItem value='amazon'>Amazon</SelectItem>
                      <SelectItem value='meta'>Meta</SelectItem>
                      <SelectItem value='byteDance'>ByteDance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='isNotAnyOf' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='isNotAnyOf'>Is not any of</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='isKnown' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='isKnown'>Is known</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* Headquarter Location */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>Account HQ Location</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='space-y-2 px-1 py-4'>
              <Label htmlFor='country'>Country</Label>
              <Input id='country' type='text' placeholder='USA' />
            </div>
            <div className='space-y-2 px-1 py-4'>
              <Label htmlFor='state'>State</Label>
              <Input id='state' type='text' placeholder='California' />
            </div>
            <div className='space-y-2 px-1 py-4'>
              <Label htmlFor='region'>Region</Label>
              <Input id='region' type='text' placeholder='Northern' />
            </div>
            <div className='space-y-2 px-1 py-4'>
              <Label htmlFor='city'>City</Label>
              <Input id='city' type='text' placeholder='San Francisco' />
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* Employees */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>Employees</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='1-10' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='1-10'>1-10</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='11-20' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='11-20'>11-20</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='21-30' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='21-30'>21-30</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='31-50' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='31-50'>31-50</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='>50' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='>50'>50+</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* Owner */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>Owner</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='admins' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='admins'>Admins</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='salesReps' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='salesReps'>Sales reps</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='accountManagers' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='accountManagers'>Account managers</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='sdrs' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='sdrs'>SDRs</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='customRoles' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='customRoles'>Custom roles</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        {/* Stage */}
        <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <div className='text-muted-foreground text-lg font-medium'>Stage</div>
            <CollapsibleTrigger>
              <PlusIcon className='size-5.5 [[data-state="open"]>&]:hidden' />
              <MinusIcon className='text-muted-foreground hidden size-5.5 [[data-state="open"]>&]:block' />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='lead' defaultChecked className='size-6 [&_svg]:size-5' />
              <Label htmlFor='lead'>Lead</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='opportunity' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='opportunity'>Opportunity</Label>
            </div>
            <div className='flex items-center gap-3 px-1 py-3'>
              <Checkbox id='customer' className='size-6 [&_svg]:size-5' />
              <Label htmlFor='customer'>Customer</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* More filters */}
      <Collapsible className='flex w-full flex-col'>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
          <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4' disabled>
            <div className='flex items-center justify-between gap-4 py-4'>
              <div className='text-muted-foreground text-lg font-medium'>Technologies</div>
              <CollapsibleTrigger>
                <LockKeyholeIcon className='size-5.5' />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='react' defaultChecked className='size-6 [&_svg]:size-5' />
                <Label htmlFor='react'>React</Label>
              </div>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='vue' className='size-6 [&_svg]:size-5' />
                <Label htmlFor='vue'>Vue</Label>
              </div>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='android' className='size-6 [&_svg]:size-5' />
                <Label htmlFor='android'>Android</Label>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='data-[state=open]:bg-muted flex w-full flex-col border-b px-4' disabled>
            <div className='flex items-center justify-between gap-4 py-4'>
              <div className='text-muted-foreground text-lg font-medium'>Revenue</div>
              <CollapsibleTrigger>
                <LockKeyholeIcon className='size-5.5' />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='1M' defaultChecked className='size-6 [&_svg]:size-5' />
                <Label htmlFor='1M'>$1M</Label>
              </div>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='10M' className='size-6 [&_svg]:size-5' />
                <Label htmlFor='10M'>$10M</Label>
              </div>
              <div className='flex items-center gap-3 px-1 py-3'>
                <Checkbox id='100M' className='size-6 [&_svg]:size-5' />
                <Label htmlFor='100M'>$100M</Label>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
        <div className='px-4 pt-4'>
          <CollapsibleTrigger
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'lg'
              }),
              'mt-20 w-full data-[state=open]:hidden'
            )}
          >
            Show more filters
          </CollapsibleTrigger>
          <CollapsibleTrigger
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'lg'
              }),
              'mt-20 hidden w-full data-[state=open]:inline-flex'
            )}
          >
            Show less filters
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </>
  )

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Mobile Filter Trigger */}
        <div className='mb-4 md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='outline' className='w-full md:hidden'>
                <FilterIcon className='mr-2 size-4' />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] gap-0 overflow-y-auto sm:w-[400px]'>
              <SheetHeader className='border-b'>
                <SheetTitle className='text-2xl'>Filter</SheetTitle>
                <div className='w-full'>
                  <Label htmlFor='search-mobile' className='sr-only'>
                    Search
                  </Label>
                  <div className='relative'>
                    <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
                      <SearchIcon className='size-4' />
                      <span className='sr-only'>Search</span>
                    </div>
                    <Input id='search-mobile' type='text' placeholder='Search here...' className='peer pl-9' />
                  </div>
                </div>
              </SheetHeader>
              <div className='mb-4 flex flex-1 flex-col justify-between'>{filterContent}</div>
            </SheetContent>
          </Sheet>
        </div>

        <div className='grid grid-cols-6 gap-2.5'>
          {/* Desktop Filter Card */}
          <Card
            className={cn(
              'col-span-2 hidden gap-0 border py-4 shadow-none md:inline-flex md:max-lg:col-span-3',
              className
            )}
          >
            <CardHeader className='gap-4 border-b px-4 !pb-4'>
              <CardTitle className='text-2xl'>Filter</CardTitle>

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
            <CardContent className='px-0'>{filterContent}</CardContent>
          </Card>
          <div className='bg-background col-span-6 min-h-100 rounded-lg border border-dashed md:col-span-4 md:max-lg:col-span-3' />
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
