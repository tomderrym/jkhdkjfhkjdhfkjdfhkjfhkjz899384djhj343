import Navbar from '@/components/shadcn-studio/blocks/navbar-component-04/navbar-component-04'

const navigationData = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Pricing',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const NavbarPage = () => {
  return (
    <div className='h-98'>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
