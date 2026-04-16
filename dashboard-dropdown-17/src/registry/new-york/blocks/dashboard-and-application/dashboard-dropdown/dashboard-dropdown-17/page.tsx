import { ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import CartDropdown from '@/components/shadcn-studio/blocks/dropdown-cart'

const data = [
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-1.png',
    companyName: 'Nike',
    freeShipping: true,
    discount: 15,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-2.png',
    productName: 'Regular Fit Jacket',
    oldPrice: 129,
    price: 99,
    color: 'Black',
    size: 'M',
    rating: 4.5,
    quantity: 1
  },
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-4.png',
    companyName: 'Puma',
    freeShipping: true,
    discount: 5,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-3.png',
    productName: "Men's Track Jacket",
    oldPrice: 98,
    price: 89,
    color: 'White',
    size: 'M',
    rating: 4,
    quantity: 1
  },
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-4.png',
    companyName: 'Puma',
    freeShipping: true,
    discount: 5,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-5.png',
    productName: 'Ferrari Motorsport Cap',
    oldPrice: 70,
    price: 59,
    color: 'Red',
    size: 'S',
    rating: 4.5,
    quantity: 1
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-250 items-start justify-center p-8 sm:h-212'>
      <CartDropdown
        defaultOpen
        align='center'
        data={data}
        trigger={
          <Button variant='outline' size='icon'>
            <ShoppingCartIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
