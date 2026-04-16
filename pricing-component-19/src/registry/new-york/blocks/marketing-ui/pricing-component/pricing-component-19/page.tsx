import Pricing from '@/components/shadcn-studio/blocks/pricing-component-19/pricing-component-19'

const plans = [
  {
    name: 'Premium Plus',
    description: 'Perfect for startups looking to get started quickly with the essentials.',
    monthlyPrice: 299,
    yearlyPrice: 199,
    features: [
      '2 dedicated account managers',
      '24/7 support with faster response times',
      'Customizable analytics tools',
      'Monthly strategy sessions with experts'
    ]
  },
  {
    name: 'Elite Access',
    description: 'Designed for growing teams who need advanced tools and more integrations.',
    monthlyPrice: 399,
    yearlyPrice: 299,
    features: [
      '5 dedicated account managers',
      'Customized onboarding process',
      'VIP customer support assistance',
      'Exclusive beta features before release',
      'Weekly strategy sessions with experts'
    ],
    popular: true
  },
  {
    name: 'Elite Plus',
    description: 'The ideal solution for enterprises needing full customization and dedicated support.',
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      'Unlimited Dedicated account manager',
      'Advanced risk management tools',
      '1-on-1 business mentorship',
      'Everyday strategy sessions with experts'
    ]
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
