import React from 'react';
// // // import Navbar from '@/components/shadcn-studio/blocks/navbar-component-05/navbar-component-05'
// Placeholder - original component not available
const Navbar = () => <div>Component placeholder</div>;
// Placeholder - original component not available
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
    title: 'Contacts',
    href: '#'
  }
]

const NavbarPage = () => {
  return (
    <div className='h-70'>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
