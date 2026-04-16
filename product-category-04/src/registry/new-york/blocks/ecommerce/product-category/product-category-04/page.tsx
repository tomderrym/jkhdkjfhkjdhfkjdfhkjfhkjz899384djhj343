import { FootprintsIcon, GemIcon, ShirtIcon, ShoppingBasketIcon, SmartphoneIcon, WatchIcon } from 'lucide-react'

import ProductCategory from '@/components/shadcn-studio/blocks/product-category-04/product-category-04'

const productCards = [
  {
    icon: <ShirtIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Clothes',
    productNumber: 458,
    productLink: '#'
  },
  {
    icon: <ShoppingBasketIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Ladies Bag',
    productNumber: 144,
    productLink: '#'
  },
  {
    icon: <FootprintsIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Shoes',
    productNumber: 528,
    productLink: '#'
  },
  {
    icon: <GemIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Ornaments',
    productNumber: 759,
    productLink: '#'
  },
  {
    icon: <WatchIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Watches',
    productNumber: 136,
    productLink: '#'
  },
  {
    icon: <SmartphoneIcon className='size-9.5 shrink-0 stroke-1' />,
    title: 'Smart Phones',
    productNumber: 167,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
