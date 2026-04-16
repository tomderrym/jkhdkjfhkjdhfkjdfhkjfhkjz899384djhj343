import ProductQuickView from '@/components/shadcn-studio/blocks/product-quick-view-04/product-quick-view-04'
import { Button } from '@/components/ui/button'

const productImages = [
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-9.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-16.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-17.png'
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

const paymentMethods = [
  { name: 'American Express', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/american-express.png' },
  { name: 'Visa', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png' },
  { name: 'Mastercard', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png' },
  { name: 'Bank Of america', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/boa.png' }
]

const ProductQuickViewPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ProductQuickView
        productImages={productImages}
        colors={colors}
        paymentMethods={paymentMethods}
        defaultOpen
        trigger={<Button variant='outline'>Quick View</Button>}
      />
    </div>
  )
}

export default ProductQuickViewPage
