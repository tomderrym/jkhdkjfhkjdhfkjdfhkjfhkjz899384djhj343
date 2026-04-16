import { Card } from '@/components/ui/card'

import ProductDatatable, { type Item } from '@/components/shadcn-studio/blocks/datatable-product'

const productData: Item[] = [
  {
    id: '1',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-3.png',
    product: 'Samsung galaxy s35',
    brand: 'Samsung',
    category: 'smartphone',
    stock: 'available',
    amount: 312,
    quantity: 45,
    status: 'publish'
  },
  {
    id: '2',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Apple MacBook Pro',
    brand: 'Apple',
    category: 'laptop',
    stock: 'unavailable',
    amount: 890,
    quantity: 634,
    status: 'publish'
  },
  {
    id: '3',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-5.png',
    product: 'Sony WH-1000XM4',
    brand: 'Sony',
    category: 'headphone',
    stock: 'available',
    amount: 120,
    quantity: 456,
    status: 'inactive'
  },
  {
    id: '4',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-6.png',
    product: 'Dell XPS 13',
    brand: 'Dell',
    category: 'laptop',
    stock: 'unavailable',
    amount: 112,
    quantity: 4,
    status: 'publish'
  },
  {
    id: '5',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-7.png',
    product: 'Smart band 4',
    brand: 'Xiaomi',
    category: 'smartwatch',
    stock: 'unavailable',
    amount: 150,
    quantity: 45,
    status: 'inactive'
  },
  {
    id: '6',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Sony PlayStation 5',
    brand: 'Sony',
    category: 'controller',
    stock: 'available',
    amount: 520,
    quantity: 56,
    status: 'publish'
  },
  {
    id: '7',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-9.png',
    product: 'OnePlus 15 Pro',
    brand: 'OnePlus',
    category: 'smartphone',
    stock: 'available',
    amount: 1200,
    quantity: 89,
    status: 'publish'
  },
  {
    id: '8',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-10.png',
    product: 'Apple magic mouse',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 980,
    quantity: 23,
    status: 'scheduled'
  },
  {
    id: '9',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-11.png',
    product: 'Wooden Chair',
    brand: 'Ikea',
    category: 'furniture',
    stock: 'unavailable',
    amount: 280,
    quantity: 67,
    status: 'publish'
  },
  {
    id: '10',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-12.png',
    product: 'Nike Jordan 1',
    brand: 'Nike',
    category: 'fashion',
    stock: 'available',
    amount: 450,
    quantity: 134,
    status: 'publish'
  },
  {
    id: '11',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-13.png',
    product: 'Nintendo Switch Pro',
    brand: 'Nintendo',
    category: 'controller',
    stock: 'available',
    amount: 499,
    quantity: 78,
    status: 'publish'
  },
  {
    id: '12',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-14.png',
    product: 'Apple Watch 2',
    brand: 'Apple',
    category: 'smartwatch',
    stock: 'unavailable',
    amount: 699,
    quantity: 45,
    status: 'inactive'
  },
  {
    id: '13',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-15.png',
    product: 'Samsung Note 10 Pro',
    brand: 'Samsung',
    category: 'smartphone',
    stock: 'available',
    amount: 1150,
    quantity: 12,
    status: 'scheduled'
  },
  {
    id: '14',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-16.png',
    product: 'Ray Ban Aviator',
    brand: 'Ray Ban',
    category: 'fashion',
    stock: 'available',
    amount: 249,
    quantity: 203,
    status: 'publish'
  },
  {
    id: '15',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Macbook Air M2',
    brand: 'Apple',
    category: 'laptop',
    stock: 'unavailable',
    amount: 349,
    quantity: 156,
    status: 'inactive'
  },
  {
    id: '16',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-6.png',
    product: 'Samsung Book 6',
    brand: 'Samsung',
    category: 'laptop',
    stock: 'available',
    amount: 329,
    quantity: 87,
    status: 'publish'
  },
  {
    id: '17',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-10.png',
    product: 'Apple Magic Mouse 2',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 799,
    quantity: 67,
    status: 'publish'
  },
  {
    id: '18',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-16.png',
    product: 'Ray Ban EyeCat',
    brand: 'Ray Ban',
    category: 'fashion',
    stock: 'available',
    amount: 1399,
    quantity: 34,
    status: 'scheduled'
  },
  {
    id: '19',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Xbox Series X',
    brand: 'Microsoft',
    category: 'controller',
    stock: 'unavailable',
    amount: 499,
    quantity: 28,
    status: 'inactive'
  },
  {
    id: '20',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-4.png',
    product: 'Macbook Pro M4',
    brand: 'Apple',
    category: 'laptop',
    stock: 'available',
    amount: 699,
    quantity: 19,
    status: 'publish'
  },
  {
    id: '21',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-8.png',
    product: 'Play Station 4',
    brand: 'Sony',
    category: 'controller',
    stock: 'available',
    amount: 649,
    quantity: 89,
    status: 'scheduled'
  },
  {
    id: '22',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-15.png',
    product: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphone',
    stock: 'unavailable',
    amount: 899,
    quantity: 43,
    status: 'inactive'
  },
  {
    id: '23',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-11.png',
    product: 'Rocking Chair',
    brand: 'Ikea',
    category: 'furniture',
    stock: 'available',
    amount: 1299,
    quantity: 76,
    status: 'publish'
  },
  {
    id: '24',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-12.png',
    product: 'Nike Air Max',
    brand: 'Nike',
    category: 'fashion',
    stock: 'available',
    amount: 149,
    quantity: 234,
    status: 'publish'
  },
  {
    id: '25',
    productImage: 'https://cdn.shadcnstudio.com/ss-assets/blocks/data-table/image-7.png',
    product: 'Fitbit Versa 4',
    brand: 'Fitbit',
    category: 'smartwatch',
    stock: 'available',
    amount: 199,
    quantity: 167,
    status: 'scheduled'
  }
]

const DataTablePreview = () => {
  return (
    <div className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='mx-auto w-full max-w-286.25 py-0'>
          <ProductDatatable data={productData} />
        </Card>
      </div>
    </div>
  )
}

export default DataTablePreview
