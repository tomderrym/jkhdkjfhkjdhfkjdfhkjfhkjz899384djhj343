import { BriefcaseBusinessIcon, RocketIcon, CrownIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-06/pricing-component-06'

const plans = [
  {
    name: 'Essential',
    icon: <RocketIcon />,
    price: {
      yearly: 49,
      monthly: 59
    },
    discount: '20% off',
    description: 'per user, billed annually',
    target: 'For self-employed:',
    features: ['1x Business account & Cards', '1x Account', '30 transfer or direct debit', '10+ Integrations']
  },
  {
    name: 'Business',
    icon: <BriefcaseBusinessIcon />,
    price: {
      yearly: 99,
      monthly: 129
    },
    discount: '40% off',
    description: 'per user, billed annually',
    target: 'For micro-business:',
    features: ['3x Business account & Cards', 'Unlimited Accounts', '500 transfer or direct debit', '50+ Integrations'],
    isPopular: true
  },
  {
    name: 'Enterprise',
    icon: <CrownIcon />,
    price: {
      yearly: 299,
      monthly: 399
    },
    discount: 'UP TO 80% off',
    description: 'per user, billed annually',
    target: 'For SMEs:',
    features: [
      '30x Business account & Cards',
      'Unlimited Accounts',
      '1000 transfer or direct debit',
      '80+ Exclusive Integrations'
    ]
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
