import { BookMarkedIcon, BoxIcon, DollarSignIcon, HardDriveIcon } from 'lucide-react'

import StatisticsCard, { type StatisticsCardProps } from '@/components/shadcn-studio/blocks/statistics-card-02'

// Statistics card data
const StatisticsCardData: StatisticsCardProps[] = [
  {
    icon: <DollarSignIcon className='size-3.5' />,
    title: 'Total Revenue',
    value: '$12,345',
    changePercentage: 15
  },
  {
    icon: <BoxIcon className='size-3.5' />,
    title: 'Orders',
    value: '24',
    changePercentage: -60
  },
  {
    icon: <HardDriveIcon className='size-3.5' />,
    title: 'Used Storage',
    value: '49 GB',
    changePercentage: 14.5
  },
  {
    icon: <BookMarkedIcon className='size-3.5' />,
    title: 'Saved items',
    value: '2200',
    changePercentage: -12.5
  }
]

const StatisticsCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
        {StatisticsCardData.map((card, index) => (
          <StatisticsCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            changePercentage={card.changePercentage}
          />
        ))}
      </div>
    </div>
  )
}

export default StatisticsCardPreview
