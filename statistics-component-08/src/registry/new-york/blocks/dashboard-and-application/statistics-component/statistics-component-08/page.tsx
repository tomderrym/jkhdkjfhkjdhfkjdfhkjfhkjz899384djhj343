import StatisticsImpressionCard from '@/components/shadcn-studio/blocks/statistics-impression-card'
import StatisticsOrderCard from '@/components/shadcn-studio/blocks/statistics-order-card'
import StatisticsProfitCard from '@/components/shadcn-studio/blocks/statistics-profit-card'
import StatisticsSalesGrowthCard from '@/components/shadcn-studio/blocks/statistics-sales-growth-card'
import StatisticsUserReachCard from '@/components/shadcn-studio/blocks/statistics-user-reach-card'

const StatisticsCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8 xl:grid-cols-5'>
        <StatisticsOrderCard />
        <StatisticsSalesGrowthCard />
        <StatisticsProfitCard />
        <StatisticsImpressionCard />
        <StatisticsUserReachCard />
      </div>
    </div>
  )
}

export default StatisticsCardPreview
