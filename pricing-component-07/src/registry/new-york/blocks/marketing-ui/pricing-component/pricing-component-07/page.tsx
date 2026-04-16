import Pricing, { type Plan } from '@/components/shadcn-studio/blocks/pricing-component-07/pricing-component-07'

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    subtitle: 'For small companies',
    price: '$0',
    accounts: '1x Account',
    features: ['AI advisor for a day', '2 auto tracking', '7 Day transaction clearing', '24/7 Customer support'],
    buttonText: 'Try Free Version'
  },
  {
    id: 'business',
    name: 'Business Plan',
    subtitle: 'For growing businesses',
    price: '$49',
    accounts: '3x Account',
    features: ['Advanced AI advisor', '10 auto tracking', 'Priority support', 'Custom integrations'],
    buttonText: 'Start Business Plan'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    subtitle: 'For large organizations',
    price: '$99',
    accounts: '6x Account',
    features: ['Unlimited AI advisor', 'Unlimited tracking', 'Dedicated support', 'White-label solution'],
    buttonText: 'Get Enterprise'
  },
  {
    id: 'custom',
    name: 'Custom Licence',
    subtitle: 'Tailored for your needs',
    price: '$199',
    accounts: '10x Account',
    features: ['Custom features', 'On-premise deployment', 'SLA guarantee', 'Custom training'],
    buttonText: 'Contact Sales'
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
