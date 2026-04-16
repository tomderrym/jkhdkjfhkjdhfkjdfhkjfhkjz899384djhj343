import Pricing from '@/components/shadcn-studio/blocks/pricing-component-09/pricing-component-09'

const plans = [
  {
    name: 'Intro',
    monthlyPrice: 99,
    annualPrice: 89,
    features: [
      'Build-in wallet API for managing your crypto',
      'Access to components',
      'Community support',
      'Regular updates',
      'Basic analytics dashboard'
    ]
  },
  {
    name: 'Base',
    monthlyPrice: 129,
    annualPrice: 115,
    features: [
      'Additional advanced components',
      'Everything in Intro plan',
      'Priority support',
      'Extended documentation',
      'Customizable themes'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: 199,
    annualPrice: 179,
    isPopular: true,
    features: [
      'Premium components for enhanced functionality',
      'Exclusive access to features',
      'Dedicated support',
      'Early access to updates',
      'Advanced analytics dashboard'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 299,
    annualPrice: 269,
    features: [
      'Custom solutions tailored to your business needs',
      'Onboarding assistance',
      'Comprehensive training',
      'Priority feature requests',
      'Dedicated account manager'
    ]
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
