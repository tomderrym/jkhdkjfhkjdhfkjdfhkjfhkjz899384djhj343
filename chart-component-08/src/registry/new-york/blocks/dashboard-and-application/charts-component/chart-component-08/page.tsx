import AnatomyDetectedCard from '@/components/shadcn-studio/blocks/chart-anatomy-detected'

// Chart data
const userViewsChartData = [
  { views: 800, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 1800, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 1400, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 2780, fill: 'var(--primary)' },
  { views: 900, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 600, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 1900, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' },
  { views: 1200, fill: 'color-mix(in oklab, var(--primary) 10%, var(--card))' }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <AnatomyDetectedCard
            title='Anatomy detected'
            subTitle='Your product reach increasing beyond our predictions.'
            chartData={userViewsChartData}
            productReach={96.5}
            predictedValue={78}
            className='w-full max-w-85'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
