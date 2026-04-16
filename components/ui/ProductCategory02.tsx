import React from 'react';
// // // import ProductCategory from '@/components/shadcn-studio/blocks/product-category-02/product-category-02'
// Placeholder - original component not available
const ProductCategory = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const productCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-8.png',
    badge: 'New arrival',
    title: "Men's Casual Collection",
    productNumber: 2876,
    productLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-7.png',
    title: "Women's Fitnesswear",
    productNumber: 4525,
    productLink: '#'
  }
]

const ProductCategoryPage = () => {
  return <ProductCategory productCards={productCards} />
}

export default ProductCategoryPage
