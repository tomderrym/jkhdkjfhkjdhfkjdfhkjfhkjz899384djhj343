import Pricing from '@/components/shadcn-studio/blocks/pricing-component-13/pricing-component-13'

const plans = [
  {
    name: 'Free Plan',
    price: '0',
    buttonText: 'Get started for free',
    description: 'Recommended for people with at least 1 year experience in crypto markets.',
    features: [
      { title: 'Basic features', description: 'Access to essential tools and support', available: true },
      { title: 'Up to 50,000 monthly tasks', description: 'Efficiently manage your operations.', available: false },
      { title: 'Basic integrations', description: 'Connect with popular apps.', available: false }
    ]
  },
  {
    name: 'Startup',
    price: '200',
    buttonText: 'Purchase now',
    isPopular: true,
    description: 'Recommended for people with at least 1 year experience in crypto markets.',
    features: [
      { title: 'Advanced features', description: 'Access to all tools and priority support.', available: true },
      { title: 'Unlimited tasks', description: 'Scale your operations without limits.', available: true },
      { title: 'Custom integrations', description: 'Tailor connections to your needs.', available: false }
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    buttonText: 'Talk to sales',
    description: 'Recommended for people with at least 1 year experience in crypto markets.',
    features: [
      { title: 'Tailored solutions', description: 'Customized features based on your requirements.', available: true },
      { title: 'Dedicated support', description: 'Get assistance from our expert team.', available: true },
      { title: 'Scalable resources', description: 'Adjust your plan as your business grows.', available: true }
    ],
    highlight: true
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
