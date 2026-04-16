import React from 'react';
// // // import Navbar from '@/components/shadcn-studio/blocks/navbar-component-14/navbar-component-14'
// Placeholder - original component not available
const Navbar = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
