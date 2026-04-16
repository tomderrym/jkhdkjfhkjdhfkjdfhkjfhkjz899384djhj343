import Pricing from '@/components/shadcn-studio/blocks/pricing-component-05/pricing-component-05'

const featureLabels = [
  'Website number',
  'Premium Support',
  'Database',
  'Unmetered Bandwidth',
  'SSD disk',
  'Email Support',
  'WordPress Install',
  'Backup Frequently',
  'Custom Domain',
  'Server speed'
]

const featureKeys = [
  'websites',
  'support',
  'database',
  'bandwidth',
  'ssd',
  'email',
  'wordpress',
  'backup',
  'domain',
  'speed'
]

const plans = [
  {
    name: 'Basic',
    price: '$99',
    period: 'Per month',
    features: {
      websites: '10',
      support: '12 Month',
      database: true,
      bandwidth: true,
      ssd: true,
      email: false,
      wordpress: false,
      backup: false,
      domain: false,
      speed: 'Get Started'
    }
  },
  {
    name: 'Standard',
    price: '$129',
    period: 'Per month',
    features: {
      websites: '50',
      support: '12 Month',
      database: true,
      bandwidth: true,
      ssd: true,
      email: true,
      wordpress: false,
      backup: false,
      domain: false,
      speed: 'Get Started'
    }
  },
  {
    name: 'Popular',
    price: '$199',
    period: 'Per month',
    features: {
      websites: 'Unlimited',
      support: 'Lifetime',
      database: 'Unlimited',
      bandwidth: 'Unlimited',
      ssd: '100GB',
      email: 'Unlimited',
      wordpress: 'Yes',
      backup: 'Daily',
      domain: 'Free',
      speed: 'Get Started'
    },
    isPopular: true
  },
  {
    name: 'Premium',
    price: '$299',
    period: 'Per month',
    features: {
      websites: 'Unlimited',
      support: 'Lifetime',
      database: true,
      bandwidth: true,
      ssd: true,
      email: true,
      wordpress: true,
      backup: true,
      domain: true,
      speed: 'Get Started'
    }
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} featureKeys={featureKeys} featureLabels={featureLabels} />
}

export default PricingPage
