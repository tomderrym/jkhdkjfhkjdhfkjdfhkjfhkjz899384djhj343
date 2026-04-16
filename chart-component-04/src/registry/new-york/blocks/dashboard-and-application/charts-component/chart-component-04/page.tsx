import ConversionRateCard from '@/components/shadcn-studio/blocks/chart-conversion-rate'

// Chart data
const conversionRateChartData = [
  { month: 'January', conversion: 240 },
  { month: 'February', conversion: 270 },
  { month: 'March', conversion: 380 },
  { month: 'April', conversion: 230 },
  { month: 'May', conversion: 450 },
  { month: 'June', conversion: 570 },
  { month: 'July', conversion: 310 }
]

// Conversion data
const conversionData = [
  {
    title: 'Impressions',
    stat: '12.2K Visits',
    trend: 'up',
    percentageChange: 20.3
  },
  {
    title: 'Added to cart',
    stat: '32 product in cart',
    trend: 'up',
    percentageChange: 6.3
  },
  {
    title: 'Checkout',
    stat: '15 Product checkout',
    trend: 'down',
    percentageChange: 9.56
  },
  {
    title: 'Purchased',
    stat: '12 orders',
    trend: 'up',
    percentageChange: 2.62
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <ConversionRateCard
            title='Conversion rate'
            subTitle='Compared to last month'
            totalConversion={92.8}
            conversionTrend='up'
            percentageChange={6.3}
            conversionData={conversionData}
            chartData={conversionRateChartData}
            className='w-full max-w-102.5'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
