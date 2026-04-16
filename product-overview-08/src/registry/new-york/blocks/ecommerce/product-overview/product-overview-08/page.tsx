import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-08/product-overview-08'

const overviewData = [
  {
    name: 'Grace Classic Lounge Wing Chair in Green Color, Sofa Chairs',
    description:
      "Enhance your living space with the sophisticated Grace Classic Lounge Wing Chair in Green, a statement piece that blends timeless design with unmatched comfort. Perfect for creating a cozy corner in any room, this chair is more than just furniture - it's a lifestyle choice.",
    totalReview: 145,
    rating: 4.5,
    hasDiscount: true,
    price: 112,
    discountPercentage: 66,
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-28.png',
        alt: 'image-1'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-29.png',
        alt: 'image-2'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-30.png',
        alt: 'image-3'
      }
    ],
    defaultColorOption: 'green'
  }
]

const colors = [
  {
    value: 'green',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-green-600 bg-green-600'
  },
  {
    value: 'gray',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-gray-200 bg-gray-200 '
  },
  {
    value: 'blue',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-blue-500 bg-blue-500 '
  }
]

const paymentMethods = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/american-express.png',
    alt: 'American Express',
    offer: 'Get Flat 15% Off'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png',
    alt: 'Visa',
    offer: 'Get Flat 30% Off'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png',
    alt: 'MasterCard',
    offer: 'Get Flat 50% Off'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/boa.png',
    alt: 'Bank of America',
    offer: 'Get Flat 25% Off'
  }
]

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} colorsChart={colors} paymentMethods={paymentMethods} />
}

export default ProductOverviewPage
