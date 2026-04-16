import Pricing from '@/components/shadcn-studio/blocks/pricing-component-17/pricing-component-17'

const pricingData = [
  {
    title: 'Starter Plan',
    price: '$99',
    features: [
      '1x Business Account & Cards',
      '1x Account',
      '30 Transfers or Direct Debits',
      '24/7 Customer Support',
      'Monthly Financial Reports',
      'Integration with Popular'
    ]
  },
  {
    title: 'Professional Plan',
    price: '$199',
    features: [
      '2x Business Accounts & Cards',
      '2x Accounts',
      '60 Transfers or Direct Debits',
      'Priority Customer Support',
      'Analytics Dashboard',
      'Team Collaboration Tools'
    ],
    isHighlighted: true
  },
  {
    title: 'Enterprise Plan',
    price: '$299',
    features: [
      '5x Business Account & Cards',
      '5x Accounts',
      '90 Transfer or Direct Debits',
      'Dedicated Account Manager',
      'Advanced Security Features',
      'Customizable Reporting Tools'
    ]
  }
]

const PricingPage = () => {
  return <Pricing pricingData={pricingData} />
}

export default PricingPage
