import Navbar from '@/components/shadcn-studio/blocks/navbar-component-11/navbar-component-11'

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

const NavbarPage = () => {
  return (
    <div className='h-56'>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
