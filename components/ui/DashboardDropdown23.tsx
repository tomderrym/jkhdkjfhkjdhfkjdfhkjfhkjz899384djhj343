import React from 'react';
// // // import AppWorkspaceDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-23/app-dropdown'
// Placeholder - original component not available
const AppWorkspaceDropdown = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const apps = [
  {
    id: 1,
    name: 'ThemeSelection',
    email: 'themeselction@example.com',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-9.png'
  },
  {
    id: 2,
    name: 'ShadCN/Studio',
    email: 'shadcnstudio@example.com',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-10.png'
  },
  {
    id: 3,
    name: 'FlyonUI',
    email: 'flyonui@example.com',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-11.png'
  },
  {
    id: 4,
    name: 'Sneat',
    email: 'sneat@example.com',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-12.png'
  },
  {
    id: 5,
    name: 'Jetship',
    email: 'jetship@example.com',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/image-13.png'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-110 items-start justify-center p-8'>
      <AppWorkspaceDropdown defaultOpen align='center' data={apps} />
    </div>
  )
}

export default DropdownPage
