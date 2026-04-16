import FinanceCard from '@/components/shadcn-studio/blocks/chart-finance'

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <FinanceCard className='w-full max-w-203.5' />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
