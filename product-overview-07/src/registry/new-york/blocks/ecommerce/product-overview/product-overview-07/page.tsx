import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-07/product-overview-07'

const overviewData = [
  {
    name: 'Nike Pegasus 41 "Jakob Ingebrigtsen"',
    description:
      'The Nike Pegasus Premium is an advanced running shoe that elevates the renowned Pegasus line with cutting-edge cushioning technology and a sleek design.',

    rating: 4.5,
    price: 499,
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-26.png',
        alt: 'image-26'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-25.png',
        alt: 'image-25'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-24.png',
        alt: 'image-24'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-23.png',
        alt: 'image-23'
      }
    ],
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
    colorOption: 'outline-solid outline outline-offset-3 has-data-[state=checked]:outline-black bg-black'
  },
  {
    value: 'blue',
    colorOption: 'outline-solid outline outline-offset-3 has-data-[state=checked]:outline-blue-500 bg-blue-500 '
  },
  {
    value: 'orange',
    colorOption: 'outline-solid outline outline-offset-3 has-data-[state=checked]:outline-amber-600 bg-amber-600'
  }
]

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} sizesChart={sizes} colorsChart={colors} />
}

export default ProductOverviewPage
