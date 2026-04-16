import TotalTransactionCard from '@/components/shadcn-studio/blocks/chart-total-transaction'

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <TotalTransactionCard className='sm:w-full sm:max-w-200' />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
