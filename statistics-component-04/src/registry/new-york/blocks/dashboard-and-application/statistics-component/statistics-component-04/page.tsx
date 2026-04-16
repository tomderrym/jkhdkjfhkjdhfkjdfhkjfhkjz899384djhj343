import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-04'

import RatingsCardSvg from '@/assets/svg/ratings-card-svg'
import SessionCardSvg from '@/assets/svg/session-card-svg'
import CustomersCardSvg from '@/assets/svg/customers-card-svg'
import TotalOrdersCardSvg from '@/assets/svg/total-orders-card-svg'

// Statistics card data
const StatisticsCardData = [
  {
    title: 'Ratings',
    badgeContent: 'Last 6 months',
    value: '8.14k',
    changePercentage: 18.2,
    svg: <RatingsCardSvg />
  },
  {
    title: 'Sessions',
    badgeContent: 'Last month',
    value: '12.2k',
    changePercentage: -25.5,
    svg: <SessionCardSvg />
  },
  {
    title: 'Customers',
    badgeContent: 'Daily customers',
    value: '42.4k',
    changePercentage: 9.2,
    svg: <CustomersCardSvg />
  },
  {
    title: 'Total orders',
    badgeContent: 'Last Week',
    value: '42.5k',
    changePercentage: 10.8,
    svg: <TotalOrdersCardSvg />
  }
]

const StatisticsCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
        {StatisticsCardData.map((card, index) => (
          <StatisticsCard
            key={index}
            title={card.title}
            badgeContent={card.badgeContent}
            value={card.value}
            changePercentage={card.changePercentage}
            svg={card.svg}
          />
        ))}
      </div>
    </div>
  )
}

export default StatisticsCardPreview
