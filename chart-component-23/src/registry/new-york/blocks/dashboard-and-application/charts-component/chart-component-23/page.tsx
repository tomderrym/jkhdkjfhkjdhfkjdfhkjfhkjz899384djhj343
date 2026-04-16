import TotalVisitorsCard from '@/components/shadcn-studio/blocks/chart-total-visitors'

const visitorData = [
  {
    product: 'Desktop',
    percentage: 17,
    amount: 23.8,
    trend: 'up',
    heightClass: 'h-[17%]',
    color: 'bg-primary'
  },
  {
    product: 'Tablet',
    percentage: 65,
    amount: 13.604,
    trend: 'down',
    heightClass: 'h-[65%]',
    color: 'bg-secondary'
  },
  {
    product: 'Mobile',
    percentage: 18,
    amount: 47.146,
    trend: 'up',
    heightClass: 'h-[18%]',
    color: 'bg-primary/60'
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <TotalVisitorsCard
            title='Total visitors'
            totalVisitors='23.02K'
            percentage={-6}
            visitorData={visitorData}
            className='w-full max-w-85'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
