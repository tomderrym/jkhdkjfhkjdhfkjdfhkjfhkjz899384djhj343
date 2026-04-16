import OrderSummary from '@/components/shadcn-studio/blocks/order-summary-03/order-summary-03'

const products = [
  {
    id: 'amiriTshirt',
    name: 'AMIRI STAGGERED LOGO',
    color: 'Black',
    size: 'M',
    quantity: 1,
    price: 450,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/order-summary/image-9.png'
  },
  {
    id: 'shoes',
    name: `WOMEN'S PACIFIC`,
    color: 'White',
    size: '6',
    quantity: 1,
    price: 120,
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/order-summary/image-8.png'
  }
]

const OrderSummaryPage = () => {
  return <OrderSummary data={products} orderID='HD8845' />
}

export default OrderSummaryPage
