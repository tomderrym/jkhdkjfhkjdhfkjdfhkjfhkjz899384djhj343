import ProductList from '@/components/shadcn-studio/blocks/product-list-09/product-list-09'

const productList = [
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-41.png',
    productAlt: 'MIKE Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'MIKE (N) Running Shoes For Men',
    rating: 4.5,
    reviewCount: 4932,
    price: 465
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-40.png',
    productAlt: 'Casuals Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'Casuals Shoes For Men',
    rating: 4.8,
    reviewCount: 3969,
    price: 378
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-42.png',
    productAlt: 'Hustle Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'Hustle V2 IDP Casuals For Men',
    rating: 4.5,
    reviewCount: 2952,
    price: 257
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-46.png',
    productAlt: 'Mike Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'MIKE (S+) LDP Shoes For Men',
    rating: 4.5,
    reviewCount: 4569,
    price: 369
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-47.png',
    productAlt: 'Hustle Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'Hustle V1 UDP Casuals For Men',
    rating: 3.9,
    reviewCount: 1596,
    price: 169
  },
  {
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-48.png',
    productAlt: 'Rechers Shoes',
    productLink: '#',
    productReviewLink: '#',
    name: 'Rechers Shoes For Men',
    rating: 4.9,
    reviewCount: 4012,
    price: 269
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
