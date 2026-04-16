import ProductCategory, {
  type ProductCard
} from '@/components/shadcn-studio/blocks/product-category-08/product-category-08'

const productCards: ProductCard = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-31.png',
    title: 'Headphones',
    mainClass: 'bg-green-600/10  hover:border-green-600 dark:bg-green-400/10 dark:hover:border-green-400',
    buttonClass:
      'bg-green-600 text-white hover:bg-green-600/90 focus-visible:ring-green-600/20 dark:bg-green-400/60 dark:hover:bg-green-400/50 dark:focus-visible:ring-green-400/40 w-fit shadow-xs',
    badgeClass: 'px-3 py-1 rounded-full bg-green-600 text-white dark:bg-green-400/60',
    discount: 20,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-30.png',
    title: 'AirPods',
    mainClass: 'bg-primary/10  hover:border-primary',
    buttonClass: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs',
    badgeClass: 'px-3 py-1 rounded-full bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
    discount: 20,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-29.png',
    title: 'Smart Watch',
    mainClass: 'bg-destructive/10  hover:border-destructive',
    buttonClass:
      'bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs',
    badgeClass:
      'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-transparent text-white',
    discount: 20,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
