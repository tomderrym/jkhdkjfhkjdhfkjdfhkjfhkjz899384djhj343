import { Button } from '@/components/ui/button'

import ShareAccessDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-06/dialog-share-access'

const peopleData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Amelle Laurent',
    email: 'amelle@example.com',
    role: 'owner'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Maria Donin',
    email: 'donin@example.com',
    role: 'editor'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Phillip Ekstrom Bothman',
    email: 'philip@example.com',
    role: 'admin'
  }
]

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ShareAccessDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Share</span>
          </Button>
        }
        data={peopleData}
      />
    </div>
  )
}

export default DialogPage
