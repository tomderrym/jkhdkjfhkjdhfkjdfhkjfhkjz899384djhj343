import Pricing from '@/components/shadcn-studio/blocks/pricing-component-11/pricing-component-11'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Recommended for people with at least 1 year experience in crypto markets.',
    buttonText: 'Free plan',
    features: [
      'Access to real-time inventory tracking',
      'Integration with Digital Marketing email',
      'Basic analytics and email support',
      'Custom dashboards and Phone support',
      'Real-time data tracking and 24/7 support'
    ]
  },
  {
    name: 'Premium',
    price: 99,
    description: 'Everything in the Basic Plan plus advanced search, better analytics.',
    buttonText: 'Purchase plan',
    isPopular: true,
    features: [
      'All Premium Plan features',
      'Advanced data filtering search capabilities',
      'Custom branding options',
      'Extended API access for integrations',
      'Real-time data tracking and 24/7 support',
      'Dedicated account manager'
    ]
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'Includes all Professional Plan features plus full logistics automation etc.',
    buttonText: 'Purchase plan',
    features: [
      'Custom onboarding process',
      'Priority support response',
      'Access to exclusive webinars',
      'Monthly performance reviews',
      'Real-time data tracking and 24/7 support',
      'Dedicated account manager',
      'Tailored training sessions and resources'
    ]
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
