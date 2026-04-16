import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-03/product-overview-03'

const specifications = () => {
  return (
    <ul className='text-muted-foreground list-disc space-y-2 pl-5'>
      <li>Material: Polycarbonate</li>
      <li>Dimensions: 22&quot; x 14&quot; x 9&quot;</li>
      <li>Weight: 7.5 lbs</li>
      <li>Capacity: 40L</li>
      <li>Wheels: 4 spinner wheels</li>
      <li>Lock: TSA-approved combination lock</li>
    </ul>
  )
}

const overviewData = [
  {
    name: 'American Tourister Trolley Suitcase',
    breadcrumbData: [
      {
        label: 'Home',
        href: '#'
      },
      {
        label: 'Traveling',
        href: '#'
      },
      {
        label: 'Suitcase',
        href: '#'
      }
    ],
    description:
      'The American Tourister Trolley Suitcase is designed for the modern traveler, combining style, durability, and functionality. Crafted from high-quality, lightweight materials, this suitcase ensures easy maneuverability while providing ample space for your belongings.',
    totalReview: 145,
    rating: 4.5,
    hasDiscount: true,
    price: 112,
    discountPercentage: 66,
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-12.png',
        alt: 'image-12'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-13.png',
        alt: 'image-13'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-12.png',
        alt: 'image-12'
      }
    ],
    warranty: [
      {
        year: '1',
        extendedWarrantyCharges: 39
      },
      {
        year: '2',
        extendedWarrantyCharges: 45
      },
      {
        year: '3',
        extendedWarrantyCharges: 69
      }
    ],
    shippingDetails: [
      {
        heading: 'Shipping',
        subText: 'Arrives Nov 17',
        shippingCharges: 19
      },
      {
        heading: 'Pickup from Flowbox',
        subText: 'Pick a Flowbox near you',
        shippingCharges: 9,
        islink: true,
        href: '#'
      },
      {
        heading: 'Pickup from our store',
        subText: 'Not Available',
        disabled: true
      }
    ],
    info: [
      {
        title: 'Product Details',
        content:
          'The American Tourister Trolley Suitcase is designed for the modern traveler, combining style, durability, and functionality. Crafted from high-quality, lightweight materials, this suitcase ensures easy maneuverability while providing ample space for your belongings.'
      },
      {
        title: 'Specifications',
        content: specifications()
      },
      {
        title: 'Warranty',
        content:
          'Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.'
      }
    ],
    defaultSize: 'L',
    defaultColorOption: 'black'
  }
]

const sizes = [
  {
    value: 'S',
    label: 'S'
  },
  {
    value: 'M',
    label: 'M'
  },
  {
    value: 'L',
    label: 'L'
  }
]

const colors = [
  {
    value: 'black',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-12.png'
  },
  {
    value: 'green',
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-11.png'
  }
]

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} sizesChart={sizes} colorsChart={colors} />
}

export default ProductOverviewPage
