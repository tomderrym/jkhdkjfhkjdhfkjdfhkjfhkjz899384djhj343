import { CreditCardIcon, DollarSignIcon, WalletIcon } from 'lucide-react'

import EarningInsightsCard from '@/components/shadcn-studio/blocks/chart-earning-insights'

// Chart data
const earningReportChartData = [
  { day: 'Monday', earning: 80, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Tuesday', earning: 126, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Wednesday', earning: 105, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Thursday', earning: 180, fill: 'var(--primary)' },
  { day: 'Friday', earning: 123, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Saturday', earning: 131, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' },
  { day: 'Sunday', earning: 143, fill: 'color-mix(in oklab, var(--primary) 20%, transparent)' }
]

const statData = [
  {
    icon: <WalletIcon />,
    title: 'Earning',
    amount: '$1,236',
    progress: 50
  },
  {
    icon: <DollarSignIcon />,
    title: 'Profit',
    amount: '$2,300',
    progress: 75
  },
  {
    icon: <CreditCardIcon />,
    title: 'Expense',
    amount: '$1,500',
    progress: 75
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <EarningInsightsCard
            title='Earning insights'
            subTitle='Weekly Earning overview'
            totalEarning='$4.6K'
            trend='up'
            changePercentage={10}
            description="Earning of this week compared to last week. it's increasing keep it up."
            chartData={earningReportChartData}
            statData={statData}
            className='md:w-full md:max-w-200'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
