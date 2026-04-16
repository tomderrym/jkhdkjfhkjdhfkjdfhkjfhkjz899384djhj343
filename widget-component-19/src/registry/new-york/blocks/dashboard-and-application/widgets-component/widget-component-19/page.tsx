import AudienceCard from '@/components/shadcn-studio/blocks/widget-audience'

const WidgetCardPreview = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16'>
      <div className='flex justify-center'>
        <AudienceCard className='w-full max-w-85.5' />
      </div>
    </div>
  )
}

export default WidgetCardPreview
