import ShoppingCart from '@/components/shadcn-studio/blocks/shopping-cart-04/shopping-cart-04'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 'bombayMix',
    name: 'Bombay Mix Original',
    type: 'Namkin',
    price: 5.88,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-11.png'
  },
  {
    id: 'bhelPuri',
    name: 'Bhel Puri',
    type: 'Namkin',
    price: 8.46,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-10.png'
  },
  {
    id: 'miniBhakharBadi',
    name: 'Mini Bhakhar Badi',
    type: 'Namkin',
    price: 7.12,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/shopping-cart/image-9.png'
  }
]

const ShoppingCartPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ShoppingCart
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Select Plan</span>
          </Button>
        }
        data={products}
      />
    </div>
  )
}

export default ShoppingCartPage
