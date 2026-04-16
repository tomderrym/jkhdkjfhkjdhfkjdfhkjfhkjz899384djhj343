import ProductCategory from '@/components/shadcn-studio/blocks/product-category-03/product-category-03'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-10.png',
    title: 'Smart Electronics',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-11.png',
    title: 'Smart Appliances',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-9.png',
    title: 'Smart Lighting',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-12.png',
    title: 'Audio Visual',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-13.png',
    title: 'Smart Hubs',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-14.png',
    title: 'Smart Gadget',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-15.png',
    title: 'Buds',
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-17.png',
    title: 'Goggles',
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
