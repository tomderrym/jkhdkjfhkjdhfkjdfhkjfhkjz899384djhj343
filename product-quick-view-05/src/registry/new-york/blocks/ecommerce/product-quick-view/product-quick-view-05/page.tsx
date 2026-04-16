import ProductQuickView from '@/components/shadcn-studio/blocks/product-quick-view-05/product-quick-view-05'
import { Button } from '@/components/ui/button'

const productImages = [
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-1.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-2.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-3.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-4.png'
]

const sizes = [
  {
    value: '7',
    label: '7'
  },
  {
    value: '8',
    label: '8'
  },
  {
    value: '9',
    label: '9'
  }
]

const colors = [
  {
    value: 'blue',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-indigo-700 bg-indigo-700 '
  },
  {
    value: 'orange',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-amber-700 bg-amber-700'
  },
  {
    value: 'green',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-green-700 bg-green-700'
  }
]

const ProductQuickViewPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ProductQuickView
        productImages={productImages}
        sizes={sizes}
        colors={colors}
        defaultOpen
        trigger={<Button variant='outline'>Offer Modal</Button>}
      />
    </div>
  )
}

export default ProductQuickViewPage
