import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-09/product-overview-09'

const overviewData = [
  {
    name: "BOUNDARY Navy Men's Running Shoes",
    description:
      'Push yourself beyond the lines; reach your fashion goal with the incredible BOUNDARY on your feet! The accustomed combination of red & blue is made attractive with the minimal yet incredible design of the pair.',
    totalReview: 245,
    rating: 4.5,
    hasDiscount: true,
    price: 499,
    discountPercentage: 40,
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-27.png',
        alt: 'image-5'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-32.png',
        alt: 'image-2'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-33.png',
        alt: 'image-3'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-34.png',
        alt: 'image-1'
      }
    ],
    brandName: 'Campus',
    warranty: '6 Months',
    defaultSize: '10',
    defaultColorOption: 'black'
  }
]

const sizes = [
  {
    value: '6',
    label: '6'
  },
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
  },
  {
    value: '10',
    label: '10'
  },
  {
    value: '11',
    label: '11'
  }
]

const colors = [
  {
    value: 'black',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-black bg-black'
  },
  {
    value: 'green',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-green-600 bg-green-600'
  },
  {
    value: 'orange',
    colorOption:
      'has-data-[state=checked]:outline-solid has-data-[state=checked]:outline has-data-[state=checked]:outline-offset-2 has-data-[state=checked]:outline-amber-600 bg-amber-600'
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

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} sizesChart={sizes} colorsChart={colors} />
}

export default ProductOverviewPage
