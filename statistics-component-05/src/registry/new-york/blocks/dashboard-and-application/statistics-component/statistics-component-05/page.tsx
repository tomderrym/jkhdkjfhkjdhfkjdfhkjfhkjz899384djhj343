import {
  CircleDollarSignIcon,
  CreditCardIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  WalletIcon,
  BarChart3Icon
} from 'lucide-react'

import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-05'

// Statistics card data
const StatisticsCardData = [
  {
    icon: CircleDollarSignIcon,
    title: 'Total Income',
    badgeContent: 'Last week',
    value: '$4,673',
    changePercentage: 25.2,
    iconClassName: 'bg-chart-1/10 text-chart-1'
  },
  {
    icon: CreditCardIcon,
    title: 'Total Expense',
    badgeContent: 'Last month',
    value: '$1.28K',
    changePercentage: -12.2,
    iconClassName: 'bg-chart-2/10 text-chart-2'
  },
  {
    icon: PiggyBankIcon,
    title: 'Total Savings',
    badgeContent: 'This quarter',
    value: '$2.94K',
    changePercentage: 18.7,
    iconClassName: 'bg-chart-3/10 text-chart-3'
  },
  {
    icon: TrendingUpIcon,
    title: 'Investment',
    badgeContent: 'Last 6 months',
    value: '$8.12K',
    changePercentage: 42.1,
    iconClassName: 'bg-chart-4/10 text-chart-4'
  },
  {
    icon: WalletIcon,
    title: 'Cash Balance',
    badgeContent: 'Current',
    value: '$3.45K',
    changePercentage: -5.8,
    iconClassName: 'bg-chart-5/10 text-chart-5'
  },
  {
    icon: BarChart3Icon,
    title: 'Net Profit',
    badgeContent: 'This month',
    value: '$1.87K',
    changePercentage: 31.4
  }
]

const StatisticsCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-4 px-4 min-[400px]:grid-cols-2 sm:px-6 md:grid-cols-3 lg:px-8 xl:grid-cols-6'>
        {StatisticsCardData.map((card, index) => (
          <StatisticsCard
            key={index}
            icon={card.icon}
            title={card.title}
            time={card.badgeContent}
            value={card.value}
            changePercentage={card.changePercentage}
            iconClassName={card.iconClassName}
          />
        ))}
      </div>
    </div>
  )
}

export default StatisticsCardPreview
