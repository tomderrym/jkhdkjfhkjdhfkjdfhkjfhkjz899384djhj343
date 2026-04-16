import ProductList from '@/components/shadcn-studio/blocks/product-list-04/product-list-04'

const productList = [
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-18.png',
    productAlt: 'iphone 16 pro',
    name: 'Apple iphone 16 pro (Gold, 128 GB)',
    rating: 4.5,
    reviewCount: 4932,
    features: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48 MP + 12 MP + 12 MP Camera',
      'A16 Bionic Chip, 6 Core Processor'
    ],
    price: 817,
    discountedPrice: 699
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-17.png',
    productAlt: 'iphone 15',
    name: 'iPhone 15 (Pink, 128 GB)',
    rating: 4.1,
    reviewCount: 3869,
    features: [
      '8 GB RAM, 128 GB ROM',
      '15.49 cm (6.67 inch) Full HD + Display',
      '50MP + 8MP Front Camera',
      '5000 mAh Battery'
    ],
    price: 420,
    discountedPrice: 300
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
