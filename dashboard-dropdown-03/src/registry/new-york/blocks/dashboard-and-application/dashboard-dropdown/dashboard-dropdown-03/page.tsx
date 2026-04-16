import { Button } from '@/components/ui/button'

import BalanceDropdown from '@/components/shadcn-studio/blocks/dashboard-dropdown-03/dropdown-balance'

const DropdownPage = () => {
  return (
    <div className='flex h-70 items-start justify-center p-8'>
      <BalanceDropdown defaultOpen align='center' trigger={<Button>Balance</Button>} />
    </div>
  )
}

export default DropdownPage
