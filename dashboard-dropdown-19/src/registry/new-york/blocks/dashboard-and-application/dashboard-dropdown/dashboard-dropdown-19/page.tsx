import { Share2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import ShareDropdown from '@/components/shadcn-studio/blocks/dropdown-share'

const data = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'John Garrett',
    email: 'john@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Laura Perez',
    email: 'laura@example.com',
    role: 'can-view'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Shane Adkins',
    email: 'shane@example.com',
    role: 'admin'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Clara Brady',
    email: 'clara@example.com',
    role: 'can-edit'
  }
]

const morePeople = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Daisy Mitchell'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    name: 'Stephen Adams'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-208 items-start justify-center p-8 sm:h-155'>
      <ShareDropdown
        defaultOpen
        align='center'
        data={data}
        morePeople={morePeople}
        trigger={
          <Button>
            Share
            <Share2Icon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
