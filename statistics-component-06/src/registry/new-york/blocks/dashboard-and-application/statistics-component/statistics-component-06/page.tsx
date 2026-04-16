import SalesOverviewCard from '@/components/shadcn-studio/blocks/statistics-component-06/sales-overview-card'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-component-06/statistics-card'

const StatisticsCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
        <SalesOverviewCard />
        <StatisticsCard />
      </div>
    </div>
  )
}

export default StatisticsCardPreview
