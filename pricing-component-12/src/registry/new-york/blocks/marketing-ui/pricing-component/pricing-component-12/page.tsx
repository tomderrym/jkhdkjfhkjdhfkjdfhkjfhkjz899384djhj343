import { EclipseIcon, SproutIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-12/pricing-component-12'

const plans = [
  {
    icon: EclipseIcon,
    name: 'Basic',
    price: 49,
    description: 'Recommended for those new to the crypto market or looking for a simple and easy-to-use platform.',
    features: [
      'Basic Portfolio Tracking',
      'Access to Crypto News',
      'Standard Customer Support',
      'Educational Resources',
      'Advanced Analytics Tools'
    ]
  },
  {
    icon: SproutIcon,
    name: 'Enterprise',
    price: 99,
    description: 'Recommended for people with at least 1 year of experience in crypto markets.',
    features: [
      'Dedicated Account Manager',
      '24/7 Real-Time Market Analysis',
      'Personalized Portfolio Reviews',
      'Invitations to Premium Webinars',
      'Access to Exclusive Industry Reports'
    ]
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
