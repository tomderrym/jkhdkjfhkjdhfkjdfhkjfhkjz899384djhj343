import AppWorkspaceDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-13/app-workspace'

const apps = [
  {
    id: 1,
    name: 'shadcn/studio',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-16.png',
    workspace: 'Workspace'
  },
  {
    id: 2,
    name: 'FlyonUI',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-15.png',
    workspace: 'Workspace'
  },
  {
    id: 3,
    name: 'ThemeSelection',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-17.png',
    workspace: 'Workspace'
  },
  {
    id: 4,
    name: 'Pixinvent',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dropdown/icon-18.png',
    workspace: 'Workspace'
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
