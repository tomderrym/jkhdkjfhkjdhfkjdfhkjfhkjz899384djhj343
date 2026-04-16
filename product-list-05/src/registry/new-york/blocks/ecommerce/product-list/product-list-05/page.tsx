import ProductList from '@/components/shadcn-studio/blocks/product-list-05/product-list-05'

const productList = [
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-19.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-22.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png'
    ],
    name: 'Allen solley',
    price: 29,
    category: 'Men Suits'
  },
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-24.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-20.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-21.png'
    ],
    name: 'Wintage',
    price: 45,
    salePrice: 35,
    category: 'Men Solid Suits'
  },
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-20.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-19.png'
    ],
    name: 'Blackberrys',
    price: 32,
    category: 'Men Suits'
  },
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-20.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-21.png'
    ],
    name: 'Blackberrys',
    price: 40,
    salePrice: 30,
    category: 'Men Solid Suits'
  },
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-21.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-19.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-24.png'
    ],
    name: 'MANQ',
    price: 28,
    category: 'Men Suits'
  },
  {
    productImages: [
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-22.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-23.png',
      'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-20.png'
    ],
    name: 'Peter England Elite',
    price: 42,
    category: 'Men Solid Suits'
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
