import SalesPerformanceCard from '@/components/shadcn-studio/blocks/chart-sales-performance'

const salesData = [
  {
    title: 'Online Store',
    value: 88,
    color: '[&>div]:bg-primary'
  },
  {
    title: 'Offline Store',
    value: 64,
    color: '[&>div]:bg-primary/60'
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <SalesPerformanceCard
            title='Sales performance'
            value='68K'
            changePercentage={-6}
            salesData={salesData}
            className='w-full max-w-85'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
