import PopularProductCard from '@/components/shadcn-studio/blocks/widget-popular-product'

// Popular products data
const Products = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 1.png',
    productName: 'Nike Vision Low Shoes',
    price: '$5,600',
    visits: '10.6K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 2.png',
    productName: 'Adidas Ultraboost 21',
    price: '$4,500',
    visits: '4.5K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 3.png',
    productName: 'Puma RS-X Toys',
    price: '$3,200',
    visits: '2K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 4.png',
    productName: 'New Balance 550',
    price: '$2,800',
    visits: '1.8K'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image 5.png',
    productName: 'Reebok Classic Leather',
    price: '$2,200',
    visits: '1.2K'
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16'>
      <div className='flex justify-center'>
        <PopularProductCard
          title='Popular product'
          subTitle='Total 10.4K visitors'
          productsData={Products}
          className='w-full max-w-100'
        />
      </div>
    </div>
  )
}

export default WidgetCardPreview
