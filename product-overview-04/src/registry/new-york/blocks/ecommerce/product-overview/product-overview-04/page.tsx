import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-04/product-overview-04'

const overviewData = [
  {
    name: 'Apple iMac 24”, 8GB RAM, 256GB SSD, Mac OS',
    inStock: true,
    address: 'Deliver to Bonnie Green-Sacramento 23689',
    rating: 4.5,
    totalReview: 145,
    hasDiscount: true,
    price: 1499,
    discountPercentage: 15,
    images: [
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-17.png',
        alt: 'image-17'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-16.png',
        alt: 'image-16'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-15.png',
        alt: 'image-15'
      },
      {
        src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-14.png',
        alt: 'image-14'
      }
    ],
    deliveryOption: [
      {
        shippingCharges: 'Free of charge',
        subText: 'Sacramento Post Office',
        estimatedDelivery: 'Thursday, Nov 23 - Friday, Nov 24',
        shippingType: 'Personal pickup',
        id: 'personal-pickup'
      },
      {
        shippingCharges: '$5.99',
        subText: 'Estimated delivery',
        estimatedDelivery: 'Nov 25 - 26',
        shippingType: 'Standard Delivery',
        id: 'standard-delivery'
      },
      {
        shippingCharges: '$12.99',
        subText: 'Guaranteed delivery',
        estimatedDelivery: 'Nov 24',
        shippingType: 'Express Delivery',
        id: 'express-delivery'
      },
      {
        shippingCharges: '$19.99',
        subText: 'Order before 11am',
        estimatedDelivery: 'delivery today',
        shippingType: 'Same Day Delivery',
        id: 'same-day'
      }
    ],
    paymentOption: [
      {
        id: 'oneTime',
        context: 'One Time Payment'
      },
      {
        id: 'financing',
        context: '24-Month Financing with Shadcn/studio Banking'
      },
      {
        id: 'installments',
        context: '4 equal installments, with',
        islink: true,
        href: '#',
        linkText: 'My Wallet'
      }
    ]
  }
]

const benefits = [
  {
    list: 'Free return within 30 days'
  },
  {
    list: 'Warranty included'
  },
  {
    list: 'Damage and theft insurance'
  },
  {
    list: '24/7 customer support'
  },
  {
    list: 'Fast & free shipping'
  },
  {
    list: 'Secure payment options'
  }
]

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} benefits={benefits} />
}

export default ProductOverviewPage
