import OrderSummary from '@/components/shadcn-studio/blocks/order-summary-05/order-summary-05'

const products = [
  {
    id: 'appleWatch',
    name: 'Apple Watch Ultra 2',
    description: 'Midnight Aluminium Case - 41mm',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/order-summary/image-14.png',
    price: 399,
    quantity: 1
  },
  {
    id: 'lakeGreenBraided',
    name: '46mm Lake Green Braided ',
    description: 'Solo Loop - Size 6',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/order-summary/image-13.png',
    price: 99,
    quantity: 1
  },
  {
    id: 'powerAdapter',
    name: '20W USB-C Power Adapter',
    description: 'USB-C',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/order-summary/image-15.png',
    price: 85,
    quantity: 1
  }
]

const OrderSummaryPage = () => {
  return (
    <OrderSummary
      orderID={402356413}
      summaryData={products}
      customerName='Cristofer Schleifer'
      customerMail='cristofer@gmail.com'
      customerAddress='Street 91, Empire State, 350 Fifth Avenue, New York'
      customerPhone='+1 (212)4 178 368'
    />
  )
}

export default OrderSummaryPage
