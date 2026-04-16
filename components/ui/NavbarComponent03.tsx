import React from 'react';
// // // import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
// Placeholder - original component not available
const Navbar = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const navigationData = [
  {
    title: 'How to use',
    href: '#'
  },
  {
    title: 'Careers',
    href: '#'
  },
  {
    title: 'Blogs',
    href: '#'
  },
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
    <div className='h-85'>
      <Navbar navigationData={navigationData} />
    </div>
  )
}

export default NavbarPage
