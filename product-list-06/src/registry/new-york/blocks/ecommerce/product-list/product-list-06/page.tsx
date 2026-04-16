import ProductList from '@/components/shadcn-studio/blocks/product-list-06/product-list-06'

const productCardsData = [
  {
    rating: 4.7,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-29.png',
    productAlt: '2-piece suit',
    productLink: '#',
    productCategory: 'Outwear',
    name: '2-piece set with braces',
    price: 52
  },
  {
    rating: 4.2,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-28.png',
    productAlt: 'dungaree shorts',
    productLink: '#',
    productCategory: 'Outwear',
    name: 'Printed dungaree shorts',
    price: 26
  },
  {
    rating: 4.9,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-27.png',
    productAlt: 'Sweatshirt',
    productLink: '#',
    productCategory: 'Outwear',
    name: 'Sweatshirt',
    price: 85.32
  },
  {
    rating: 3.9,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-26.png',
    productAlt: 'Rib-knit beanie',
    productLink: '#',
    productCategory: 'Inner wear',
    name: 'Rib-knit beanie',
    price: 25.75
  },
  {
    rating: 4.8,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-25.png',
    productAlt: 'Two layer Shirt',
    productLink: '#',
    productCategory: 'Top',
    name: 'Two layer Shirt',
    price: 98.52
  }
]

const ProductListPage = () => {
  return <ProductList productCards={productCardsData} />
}

export default ProductListPage
