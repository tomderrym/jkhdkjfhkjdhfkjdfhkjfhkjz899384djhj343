'use client'

import type { ReactNode } from 'react'

import { Line, LineChart } from 'recharts'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  align?: 'start' | 'center' | 'end'
}

const salesChartData = [
  { month: 'January', sales: 10 },
  { month: 'February', sales: 45 },
  { month: 'March', sales: 30 },
  { month: 'April', sales: 95 },
  { month: 'May', sales: 60 },
  { month: 'June', sales: 75 },
  { month: 'July', sales: 50 },
  { month: 'August', sales: 120 }
]

const salesChartConfig = {
  sales: {
    label: 'Sales'
  }
} satisfies ChartConfig

// Custom active dot for chart
// @ts-ignore
const CustomActiveDot = props => {
  const { cx, cy } = props

  return (
    <svg
      x={cx - 10}
      y={cy - 8}
      width='16'
      height='16'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_16482_113925)'>
        <path
          d='M2.3335 9C2.3335 4.58172 5.91522 1 10.3335 1C14.7518 1 18.3335 4.58172 18.3335 9C18.3335 13.4183 14.7518 17 10.3335 17C5.91522 17 2.3335 13.4183 2.3335 9Z'
          fill='var(--card)'
          shapeRendering='crispEdges'
        />
        <path
          d='M10.3335 1.5C14.4756 1.5 17.8335 4.85786 17.8335 9C17.8335 13.1421 14.4756 16.5 10.3335 16.5C6.19136 16.5 2.8335 13.1421 2.8335 9C2.8335 4.85786 6.19136 1.5 10.3335 1.5Z'
          stroke='var(--primary)'
          shapeRendering='crispEdges'
        />
        <circle cx='10.3335' cy='9' r='4' fill='var(--primary)' />
      </g>
      <defs>
        <filter
          id='filter0_d_16482_113925'
          x='0.333496'
          y='0'
          width='20'
          height='20'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_16482_113925' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_16482_113925' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

const UserStatDropdown = ({ trigger, defaultOpen, align = 'end' }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className='w-87.5 space-y-1' align={align || 'end'}>
        <DropdownMenuLabel className='flex flex-col items-center gap-0.5 px-4 py-2.5 font-normal'>
          <Avatar className='size-12'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' alt='John Doe' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className='text-base font-semibold'>John Doe</span>
        </DropdownMenuLabel>

        <div className='px-6 py-2.5'>
          <div className='bg-muted space-y-0.5 rounded-md'>
            <div className='flex items-center justify-between border-b p-3'>
              <span className='font-medium'>Statistics</span>
              <span className='text-muted-foreground text-xs'>Last 90 days</span>
            </div>
            <div className='px-3 py-2'>
              <ChartContainer config={salesChartConfig} className='h-33.5 w-full'>
                <LineChart accessibilityLayer data={salesChartData} margin={{ top: 7, bottom: 0, left: 8, right: 8 }}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Line
                    dataKey='sales'
                    type='bump'
                    dot={false}
                    stroke='var(--primary)'
                    strokeWidth={5}
                    activeDot={<CustomActiveDot />}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        <DropdownMenuGroup>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>Work Preferences</DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>Projects overview</DropdownMenuItem>
          <DropdownMenuItem className='px-4 py-2.5 text-base'>Settings</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='px-4 py-2.5 text-base'>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserStatDropdown
