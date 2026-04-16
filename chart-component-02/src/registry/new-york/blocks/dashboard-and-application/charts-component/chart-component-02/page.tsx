import { ChartPieIcon, DollarSignIcon, WalletIcon } from 'lucide-react'

import EarningReportCard from '@/components/shadcn-studio/blocks/chart-earning-report'

// Statistical data
const statData = [
  {
    icon: <ChartPieIcon />,
    title: 'Net profit',
    department: 'Sales',
    value: '$1,623',
    trend: 'up',
    percentage: 20.3
  },
  {
    icon: <DollarSignIcon />,
    title: 'Total income',
    department: 'Sales, Affiliation',
    value: '$5,600',
    trend: 'up',
    percentage: 16.2
  },
  {
    icon: <WalletIcon />,
    title: 'Total expense',
    department: 'ADVT, Marketing',
    value: '$3,200',
    trend: 'up',
    percentage: 10.5
  }
]

// Chart data
const earningReportChartData = [
  { day: 'Monday', earning: 48, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Tuesday', earning: 147, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Wednesday', earning: 106, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Thursday', earning: 180, fill: 'var(--primary)' },
  { day: 'Friday', earning: 75, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Saturday', earning: 60, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' },
  { day: 'Sunday', earning: 128, fill: 'color-mix(in oklab, var(--primary) 10%, transparent)' }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <EarningReportCard
            title='Earning Report'
            subTitle='Weekly Earning overview'
            statData={statData}
            chartData={earningReportChartData}
            className='w-full max-w-100'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
