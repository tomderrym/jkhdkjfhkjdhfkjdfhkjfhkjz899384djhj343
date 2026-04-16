import ProductCategory from '@/components/shadcn-studio/blocks/product-category-07/product-category-07'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-25.png',
    title: 'Clothes',
    discountNumber: 20,
    productNumber: 237,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-26.png',
    title: 'Handbags',
    discountNumber: 25,
    productNumber: 74,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-27.png',
    title: 'Cosmetics',
    discountNumber: 15,
    productNumber: 1345,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-28.png',
    title: 'Footwear',
    discountNumber: 50,
    productNumber: 875,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
