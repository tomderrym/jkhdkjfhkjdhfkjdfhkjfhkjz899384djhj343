import ProductCategory from '@/components/shadcn-studio/blocks/product-category-11/product-category-11'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-42.png',
    title: 'Sportswear',
    description: 'Sports shoes,Track pants,Shirts & more',
    productLink: '#',
    classNames: 'bg-destructive/10 hover:ring-destructive/40',
    imageNames: 'h-66 object-contain absolute bottom-0'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-40.png',
    title: 'Sportswear',
    description: 'Sports shoes,Track pants,Shirts & more',
    productLink: '#',
    classNames: 'bg-primary/10 hover:ring-primary/40',
    imageNames: 'h-94 object-contain absolute bottom-0'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-41.png',
    title: 'Smart Gadgets',
    description: 'Mobile, Smart watches, Headphones & more',
    productLink: '#',
    classNames: 'bg-green-600/10 hover:ring-green-600/40',
    imageNames: 'h-55 object-contain absolute bottom-18'
  }
]

const discountCards = [
  {
    badge: 'Winter Specials',
    title: 'Puma, Adidas Nike & more',
    discount: 40,
    description: 'Sports Shoes, Sneakers and more',
    categoryLink: '#',
    classNames: 'bg-sky-600/10  hover:ring-sky-600/40',
    badgeClass: 'bg-sky-600 dark:bg-sky-600/40 text-white rounded-full'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} discountCards={discountCards} />
}

export default ProductCategoryPage
