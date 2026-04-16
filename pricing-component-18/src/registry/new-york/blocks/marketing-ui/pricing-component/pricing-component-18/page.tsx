import Pricing from '@/components/shadcn-studio/blocks/pricing-component-18/pricing-component-18'

const pricingData = {
  intro: { monthly: 0, annual: 0 },
  base: { monthly: 49, annual: 39 },
  pro: { monthly: 129, annual: 99 },
  enterprise: { monthly: 299, annual: 249 }
}

const plans = [
  {
    key: 'intro',
    name: 'Intro',
    description: 'Perfect for individuals and small teams getting started with basic features and limited usage.'
  },
  {
    key: 'base',
    name: 'Base',
    description: 'Ideal for growing teams that need more features, increased storage, and enhanced collaboration tools.'
  },
  {
    key: 'pro',
    name: 'Pro',
    description: 'The Pro account offers HD video uploads and advanced business features—all in one affordable plan.',
    isPopular: true
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    description:
      'Comprehensive solution for large organizations with custom integrations, dedicated support, and unlimited usage.'
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} pricingData={pricingData} />
}

export default PricingPage
