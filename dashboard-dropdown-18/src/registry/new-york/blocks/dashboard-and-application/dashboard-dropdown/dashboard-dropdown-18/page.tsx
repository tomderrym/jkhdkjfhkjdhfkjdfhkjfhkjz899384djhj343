import { Button } from '@/components/ui/button'
import InviteMembersDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-18/dropdown-invite-members'

const data = [
  {
    email: 'adam@example.com',
    role: 'designer'
  },
  {
    email: 'tim@example.com',
    role: 'developer'
  }
]

const DropdownPage = () => {
  return (
    <div className='flex h-120 items-start justify-center p-8 sm:h-100'>
      <InviteMembersDropdown defaultOpen align='center' data={data} trigger={<Button>Invite</Button>} />
    </div>
  )
}

export default DropdownPage
