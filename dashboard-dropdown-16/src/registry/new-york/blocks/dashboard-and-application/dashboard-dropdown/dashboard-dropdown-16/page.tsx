import { HeartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import FavoritesDropdown from '@/components/shadcn-studio/blocks/dropdown-favorites'

const data = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-8.png',
    title: 'Black T-Shirt',
    subtitle: 'Liverpool FC',
    price: '$149',
    oldPrice: '$199'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-7.png',
    title: 'Shoes',
    subtitle: 'Nike',
    price: '$329',
    oldPrice: '$399'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-6.png',
    title: 'Watch 9',
    subtitle: 'Apple',
    price: '$499',
    oldPrice: '$599'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-130 items-start justify-center p-8'>
      <FavoritesDropdown
        defaultOpen
        align='center'
        data={data}
        trigger={
          <Button variant='outline' size='icon'>
            <HeartIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
