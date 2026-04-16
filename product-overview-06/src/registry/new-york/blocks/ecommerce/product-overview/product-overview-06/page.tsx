import ProductOverview from '@/components/shadcn-studio/blocks/product-overview-06/product-overview-06'

const overviewData = [
  {
    name: 'Shadcn/studio : The Easiest Tailwind CSS Components Library',
    heading: 'What is Shadcn/studio?',
    description:
      'Shadcn/studio is the easiest, free, and open-source Tailwind CSS components library with semantic classes. Shadcn/studio is designed to combine the best of both worlds: the aesthetic appeal of semantic classes and the powerful functionality of JS plugins.',
    inStock: true,
    address: 'Deliver to Bonnie Green-Sacramento 23689',
    rating: 4.5,
    totalReview: 145,
    imageSrcLight: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-21.png',
    imageSrcDark: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-overview/image-21-dark.png',
    imageAlt: 'image-21',
    paymentOption: [
      {
        id: 'singleUse',
        title: 'Single Use',
        context: "End users can't be charged for.",
        price: 49
      },
      {
        id: 'multipleUse',
        title: 'Multiple Use',
        context: "End users can't be charged for.",
        price: 129
      },
      {
        id: 'extendedUse',
        title: 'Extended Use',
        context: "End users can't be charged for.",
        price: 299
      },
      {
        id: 'unlimitedUse',
        title: 'Unlimited Use',
        context: "End users can't be charged for.",
        price: 499
      }
    ]
  }
]

const features = [
  {
    title: 'Beautiful and Semantic Styling:',
    description: 'Utilise CSS components with semantic class names for clean and readable code.'
  },
  {
    title: 'Interactive and Dynamic Features:',
    description: 'Incorporate headless JavaScript plugins like Accordion, Dropdown, and Overlay for interactivity.'
  },
  {
    title: 'Efficiency and Productivity:',
    description: 'Faster development process by combining semantic classes and JS plugins.'
  },
  {
    title: '800+ Free Components Examples:',
    description: 'A wide range of component examples for various WebApp needs.'
  },
  {
    title: 'Universal Framework Compatibility:',
    description: 'Compatible with frameworks like React, Vue, Svelte.'
  }
]

const ProductOverviewPage = () => {
  return <ProductOverview productItems={overviewData} features={features} />
}

export default ProductOverviewPage
