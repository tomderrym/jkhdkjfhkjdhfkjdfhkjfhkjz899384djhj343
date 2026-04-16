import { BabyIcon, FootprintsIcon, GlassesIcon, ShirtIcon, SproutIcon, ShoppingBagIcon } from 'lucide-react'

import ProductCategory from '@/components/shadcn-studio/blocks/product-category-12/product-category-12'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-43.png',
    title: "Womens' Clothes",
    discountNumber: 50,
    icon: <ShirtIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-44.png',
    title: 'Handbags',
    icon: <ShoppingBagIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-45.png',
    title: "Men's Clothes",
    discountNumber: 50,
    icon: <ShirtIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-46.png',
    title: "Women's Footwear",
    discountNumber: 30,
    icon: <FootprintsIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-50.png',
    title: "Men's Footwear",
    icon: <FootprintsIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-49.png',
    title: 'Home Appliances',
    discountNumber: 50,
    icon: <SproutIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-48.png',
    title: "Kid's Clothes",
    icon: <BabyIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-47.png',
    title: 'newArrival',
    newArrival: true,
    icon: <GlassesIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
