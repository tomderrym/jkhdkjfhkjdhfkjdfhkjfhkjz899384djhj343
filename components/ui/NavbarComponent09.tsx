import React from 'react';
// // // import Navbar from '@/components/shadcn-studio/blocks/navbar-component-09/navbar-component-09'
// Placeholder - original component not available
const Navbar = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const navigationItems = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#',
    isActive: true
  },
  {
    title: 'About us',
    href: '#'
  },
  {
    title: 'Pricing',
    href: '#'
  }
]

const NavbarPage = () => {
  return (
    <div className='h-140'>
      <Navbar navigationData={navigationItems} />
    </div>
  )
}

export default NavbarPage
