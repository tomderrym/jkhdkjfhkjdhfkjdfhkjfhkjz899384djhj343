import { CreditCardIcon, LandmarkIcon, WalletIcon } from 'lucide-react'

import TransactionsCard from '@/components/shadcn-studio/blocks/widget-transactions'

// Transactions data
const transactions = [
  {
    icon: CreditCardIcon,
    paymentMethod: 'Credit Card',
    platform: 'Digital Ocean',
    amount: '$2820',
    paymentType: 'debit'
  },
  {
    icon: LandmarkIcon,
    paymentMethod: 'Bank account',
    platform: 'Received money',
    amount: '$1,260',
    paymentType: 'credit'
  },
  {
    icon: CreditCardIcon,
    paymentMethod: 'Credit Card',
    platform: 'Netflix',
    amount: '$149',
    paymentType: 'debit'
  },
  {
    icon: WalletIcon,
    paymentMethod: 'Wallet',
    platform: 'Starbucks',
    amount: '$49',
    paymentType: 'debit'
  },
  {
    icon: LandmarkIcon,
    paymentMethod: 'Bank account',
    platform: 'Received money',
    amount: '$268',
    paymentType: 'credit'
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16'>
      <div className='flex justify-center'>
        <TransactionsCard title='Transactions' transactions={transactions} className='w-full max-w-100' />
      </div>
    </div>
  )
}

export default WidgetCardPreview
