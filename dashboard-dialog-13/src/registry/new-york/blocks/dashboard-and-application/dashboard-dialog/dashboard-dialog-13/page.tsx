import { Button } from '@/components/ui/button'
import ShareProjectDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-13/dialog-share-project'

const data = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Amelle Laurent',
    email: 'amelle@mail.com',
    access: 'can-edit'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Maria Donin',
    email: 'donin@mail.com',
    access: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Phillip Bothman',
    email: 'philip@mail.com',
    access: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'John Smith',
    email: 'john.s@gmail.com',
    access: 'can-edit'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Aisha Wong',
    email: 'aisha@yahoo.com',
    access: 'can-edit'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Liam Brown',
    email: 'liam.b@mail.com',
    access: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Nina Patel',
    email: 'nina.p@icloud.com',
    access: 'no-access'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    name: 'Lila Thompson',
    email: 'lila@gmail.com',
    access: 'can-view'
  }
]

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <ShareProjectDialog
        defaultOpen
        trigger={
          <Button variant='outline'>
            <span>Share</span>
          </Button>
        }
        data={data}
      />
    </div>
  )
}

export default DialogPage
