import { CarIcon, Clock9Icon, DownloadIcon, UploadIcon } from 'lucide-react'

import VehicleOverviewCard from '@/components/shadcn-studio/blocks/chart-vehicle-overview'

const vehicleData = [
  {
    status: 'On the way',
    percentage: 33.3,
    time: '2hr 10min',
    icon: CarIcon,
    width: 'w-[33.3%]',
    colors: 'bg-primary/10 text-primary'
  },
  {
    status: 'Unloading',
    percentage: 23.5,
    time: '3hr 15min',
    icon: DownloadIcon,
    width: 'w-[23.5%]',
    colors: 'bg-primary/40 text-primary-foreground'
  },
  {
    status: 'Loading',
    percentage: 23.1,
    time: '1hr 24min',
    icon: UploadIcon,
    width: 'w-[23.1%]',
    colors: 'bg-primary/60 text-primary-foreground'
  },
  {
    status: 'Waiting',
    percentage: 20.1,
    time: '5hr 19min',
    icon: Clock9Icon,
    width: 'w-[20.1%]',
    colors: 'bg-primary text-primary-foreground'
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <VehicleOverviewCard title='Vehicle overview' vehicleData={vehicleData} className='w-full max-w-150' />
        </div>
      </div>
    </div>
  )
}

export default WidgetCardPreview
