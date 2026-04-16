import ProductCategory from '@/components/shadcn-studio/blocks/product-category-09/product-category-09'

const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-32.png',
    title: 'For Women',
    productNumber: 455,
    productLink: '#',
    mainClass: 'bg-destructive/10 hover:ring-destructive',
    buttonClass:
      'w-fit bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-33.png',
    title: 'For Men',
    productNumber: 289,
    productLink: '#',
    mainClass: 'bg-sky-600/10 hover:ring-sky-600 dark:bg-sky-400/10 dark:hover:ring-sky-400 ',
    buttonClass:
      'w-fit bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:hover:bg-sky-400/50 dark:focus-visible:ring-sky-400/40 shadow-xs'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-34.png',
    title: 'Sport Shoes',
    productNumber: 98,
    productLink: '#',
    mainClass: 'bg-amber-600/10 hover:ring-amber-600 dark:bg-amber-400/10 dark:hover:ring-amber-400 ',
    buttonClass:
      'w-fit bg-amber-600 text-white hover:bg-amber-600/90 focus-visible:ring-amber-600/20 dark:bg-amber-400/60 dark:hover:bg-amber-400/50 dark:focus-visible:ring-amber-400/40 shadow-xs'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-35.png',
    title: 'For Kids',
    productNumber: 489,
    productLink: '#',
    mainClass: 'bg-green-600/10 hover:ring-green-600 dark:bg-green-400/10 dark:hover:ring-green-400 ',
    buttonClass:
      'w-fit bg-green-600 text-white hover:bg-green-600/90 focus-visible:ring-green-600/20 dark:bg-green-400/60 dark:hover:bg-green-400/50 dark:focus-visible:ring-green-400/40 shadow-xs'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
