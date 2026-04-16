import Navbar from '@/components/shadcn-studio/blocks/navbar-component-14/navbar-component-14'

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
    <div className='h-84'>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
