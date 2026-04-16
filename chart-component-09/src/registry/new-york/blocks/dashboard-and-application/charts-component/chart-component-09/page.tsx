import ProjectFinancialStatusCard from '@/components/shadcn-studio/blocks/chart-project-financial-status'

// Chart data
const financialChartData = [
  { index: 0, spend: 4300 },
  { index: 1, spend: 4300 },
  { index: 2, spend: 6000 },
  { index: 3, spend: 6000 },
  { index: 4, spend: 5000 },
  { index: 5, spend: 5000 },
  { index: 6, spend: 3800 },
  { index: 7, spend: 3800 },
  { index: 8, spend: 6100 },
  { index: 9, spend: 6100 },
  { index: 10, spend: 7800 },
  { index: 11, spend: 7800 }
]

// Financial data
const financialData = [
  {
    transaction: 'Donates',
    value: '$2,500',
    trend: 'down',
    percentageChange: 10.3
  },
  {
    transaction: 'Purchases',
    value: '$3,202',
    trend: 'up',
    percentageChange: 16
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <ProjectFinancialStatusCard
            title='Project financial status'
            totalEarning='$50,232'
            trend='up'
            percentageChange={2.8}
            chartData={financialChartData}
            financialData={financialData}
            className='w-full max-w-100'
          />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
