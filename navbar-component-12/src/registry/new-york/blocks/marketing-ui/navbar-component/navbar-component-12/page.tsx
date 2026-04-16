import Navbar from '@/components/shadcn-studio/blocks/navbar-component-12/navbar-component-12'

const navigationData = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Dashboard',
    href: '#'
  },
  {
    title: 'Pricing',
    href: '#'
  },
  {
    title: 'Product Details',
    href: '#'
  }
]

const cartData = [
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-1.png',
    companyName: 'Nike',
    freeShipping: true,
    discount: 15,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-2.png',
    productName: 'Regular Fit Jacket',
    oldPrice: 129,
    price: 99,
    color: 'Black',
    size: 'M',
    rating: 4.5,
    quantity: 1
  },
  {
    companySrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-4.png',
    companyName: 'Ferrari',
    freeShipping: true,
    discount: 5,
    productSrc: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-5.png',
    productName: 'Ferrari Motorsport Cap',
    oldPrice: 70,
    price: 59,
    color: 'Red',
    size: 'S',
    rating: 4.5,
    quantity: 1
  }
]

const NavbarPage = () => {
  return (
    <div className='h-148'>
      <Navbar navigationData={navigationData} cartData={cartData} />
    </div>
  )
}

export default NavbarPage
