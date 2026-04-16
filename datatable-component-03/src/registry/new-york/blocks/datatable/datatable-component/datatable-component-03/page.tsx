import { Card } from '@/components/ui/card'

import VehicleRouteDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-vehicle-route'

const vehicleData: Item[] = [
  {
    id: '1',
    vehicle: 159145,
    startingRoute: 'Paris 19, France',
    endingRoute: 'Dresdon, Germany',
    warning: 'No warning',
    progress: 50
  },
  {
    id: '2',
    vehicle: 163825,
    startingRoute: 'Tokyo 23, Japan',
    endingRoute: 'Budapest, Hungary',
    warning: 'Fuel problems',
    progress: 75
  },
  {
    id: '3',
    vehicle: 182624,
    startingRoute: 'New York City, USA',
    endingRoute: 'Kyoto, Japan',
    warning: 'Temperature not optimal',
    progress: 25
  },
  {
    id: '4',
    vehicle: 27568,
    startingRoute: 'Berlin, Germany',
    endingRoute: 'Cape Town, South Africa',
    warning: 'Ecu not responding',
    progress: 50
  },
  {
    id: '5',
    vehicle: 300168,
    startingRoute: 'Sydney, Australia',
    endingRoute: 'Buenos Aires, Argentina',
    warning: 'Oil leakage',
    progress: 25
  },
  {
    id: '6',
    vehicle: 321659,
    startingRoute: 'Rio de Janeiro, Brazil',
    endingRoute: 'Toronto, Canada',
    warning: 'Fuel problems',
    progress: 75
  },
  {
    id: '7',
    vehicle: 445782,
    startingRoute: 'London, UK',
    endingRoute: 'Mumbai, India',
    warning: 'No warning',
    progress: 90
  },
  {
    id: '8',
    vehicle: 589634,
    startingRoute: 'Los Angeles, USA',
    endingRoute: 'Moscow, Russia',
    warning: 'Temperature not optimal',
    progress: 40
  },
  {
    id: '9',
    vehicle: 672154,
    startingRoute: 'Dubai, UAE',
    endingRoute: 'Singapore',
    warning: 'Oil leakage',
    progress: 60
  },
  {
    id: '10',
    vehicle: 758932,
    startingRoute: 'Madrid, Spain',
    endingRoute: 'Bangkok, Thailand',
    warning: 'Fuel problems',
    progress: 85
  },
  {
    id: '11',
    vehicle: 823456,
    startingRoute: 'Rome, Italy',
    endingRoute: 'Cairo, Egypt',
    warning: 'No warning',
    progress: 30
  },
  {
    id: '12',
    vehicle: 934567,
    startingRoute: 'Amsterdam, Netherlands',
    endingRoute: 'Seoul, South Korea',
    warning: 'Ecu not responding',
    progress: 55
  },
  {
    id: '13',
    vehicle: 105672,
    startingRoute: 'Stockholm, Sweden',
    endingRoute: 'Jakarta, Indonesia',
    warning: 'Temperature not optimal',
    progress: 70
  },
  {
    id: '14',
    vehicle: 218934,
    startingRoute: 'Vienna, Austria',
    endingRoute: 'Manila, Philippines',
    warning: 'Oil leakage',
    progress: 45
  },
  {
    id: '15',
    vehicle: 345789,
    startingRoute: 'Brussels, Belgium',
    endingRoute: 'Lagos, Nigeria',
    warning: 'Fuel problems',
    progress: 65
  },
  {
    id: '16',
    vehicle: 467123,
    startingRoute: 'Zurich, Switzerland',
    endingRoute: 'Nairobi, Kenya',
    warning: 'No warning',
    progress: 80
  },
  {
    id: '17',
    vehicle: 578245,
    startingRoute: 'Copenhagen, Denmark',
    endingRoute: 'Casablanca, Morocco',
    warning: 'Temperature not optimal',
    progress: 35
  },
  {
    id: '18',
    vehicle: 689456,
    startingRoute: 'Helsinki, Finland',
    endingRoute: 'Addis Ababa, Ethiopia',
    warning: 'Ecu not responding',
    progress: 95
  },
  {
    id: '19',
    vehicle: 790567,
    startingRoute: 'Oslo, Norway',
    endingRoute: 'Algiers, Algeria',
    warning: 'Oil leakage',
    progress: 20
  },
  {
    id: '20',
    vehicle: 812345,
    startingRoute: 'Warsaw, Poland',
    endingRoute: 'Tunis, Tunisia',
    warning: 'Fuel problems',
    progress: 88
  },
  {
    id: '21',
    vehicle: 923456,
    startingRoute: 'Prague, Czech Republic',
    endingRoute: 'Rabat, Morocco',
    warning: 'No warning',
    progress: 42
  },
  {
    id: '22',
    vehicle: 134567,
    startingRoute: 'Budapest, Hungary',
    endingRoute: 'Dakar, Senegal',
    warning: 'Temperature not optimal',
    progress: 67
  },
  {
    id: '23',
    vehicle: 245678,
    startingRoute: 'Bucharest, Romania',
    endingRoute: 'Accra, Ghana',
    warning: 'Oil leakage',
    progress: 52
  },
  {
    id: '24',
    vehicle: 356789,
    startingRoute: 'Sofia, Bulgaria',
    endingRoute: 'Abidjan, Ivory Coast',
    warning: 'Ecu not responding',
    progress: 78
  },
  {
    id: '25',
    vehicle: 467890,
    startingRoute: 'Athens, Greece',
    endingRoute: 'Bamako, Mali',
    warning: 'Fuel problems',
    progress: 33
  }
]

const DataTablePreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='mx-auto w-full max-w-275 py-0'>
          <VehicleRouteDatatable data={vehicleData} />
        </Card>
      </div>
    </div>
  )
}

export default DataTablePreview
