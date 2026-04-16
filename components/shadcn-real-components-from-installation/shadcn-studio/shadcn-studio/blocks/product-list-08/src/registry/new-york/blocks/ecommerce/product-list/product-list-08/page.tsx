import ProductList from '@/components/shadcn-studio/blocks/product-list-08/product-list-08'

const productList = [
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-36.png',
    productAlt: 'Fitted jacket',
    productLink: '#',
    name: 'Fitted jacket',
    salePercentage: 32,
    soldProgress: 50,
    sold: 20,
    available: 30,
    discountedPrice: 225,
    originalPrice: 249
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-37.png',
    productAlt: 'Patterned resort shirt',
    productLink: '#',
    name: 'Patterned resort shirt',
    salePercentage: 52,
    soldProgress: 25,
    sold: 10,
    available: 19,
    discountedPrice: 135,
    originalPrice: 299,
    cardClassName: 'bg-amber-600/20 dark:bg-amber-400/20'
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-38.png',
    productAlt: 'Flared dress',
    productLink: '#',
    name: 'Flared dress',
    salePercentage: 55,
    soldProgress: 50,
    sold: 25,
    available: 35,
    discountedPrice: 130,
    originalPrice: 149,
    cardClassName: 'bg-green-600/20 dark:bg-green-400/20'
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-39.png',
    productAlt: 'Black t shirt',
    productLink: '#',
    name: 'Black t shirt',
    salePercentage: 26,
    soldProgress: 75,
    sold: 23,
    available: 12,
    discountedPrice: 210,
    originalPrice: 229,
    cardClassName: 'bg-sky-600/20 dark:bg-sky-400/20'
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
