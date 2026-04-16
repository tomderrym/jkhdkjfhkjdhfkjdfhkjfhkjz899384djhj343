import ProductQuickView from '@/components/shadcn-studio/blocks/product-quick-view-03/product-quick-view-03'
import { Button } from '@/components/ui/button'

const productImages = [
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-8.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-quick-view/image-15.png'
]

const colors = [
  {
    value: 'green',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-emerald-800 bg-emerald-800 '
  },
  {
    value: 'brown',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-amber-800 bg-amber-800'
  }
]

const tabs = [
  {
    name: 'Description',
    value: 'description',
    content:
      'Premium Cotton/Polyester Blend - Grey Stripes. Same Fabric may not be available. Please refer to our fabric options shown below.'
  },
  {
    name: 'Details',
    value: 'details',
    content:
      'Premium cotton/polyester blend garment with grey stripes. Available in sizes XS-XXL. Machine washable. Made in Portugal. SKU: GS-2024-001.'
  },
  {
    name: 'Comments',
    value: 'comments',
    content:
      'No comments yet. Be the first to share your thoughts about this product! Your feedback helps other shoppers make informed decisions.'
  }
]

const ProductQuickViewPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ProductQuickView
        productImages={productImages}
        defaultOpen
        colors={colors}
        tabs={tabs}
        trigger={<Button variant='outline'>Quick View</Button>}
      />
    </div>
  )
}

export default ProductQuickViewPage
