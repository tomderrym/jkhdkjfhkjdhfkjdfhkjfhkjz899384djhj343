import { ArmchairIcon, Columns2Icon, LampFloorIcon, SofaIcon } from 'lucide-react'

import ProductCategory from '@/components/shadcn-studio/blocks/product-category-06/product-category-06'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-24.png',
    title: 'Sofas',
    icon: <SofaIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-23.png',
    title: 'Chair',
    icon: <ArmchairIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-22.png',
    title: 'Lamp',
    icon: <LampFloorIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-21.png',
    title: 'Wardrobe',
    icon: <Columns2Icon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-24.png',
    title: 'Sofas',
    icon: <SofaIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-23.png',
    title: 'Chair',
    icon: <ArmchairIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-22.png',
    title: 'Lamp',
    icon: <LampFloorIcon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-21.png',
    title: 'Wardrobe',
    icon: <Columns2Icon className='size-7 shrink-0 stroke-1' />,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
