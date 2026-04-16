import Pricing from '@/components/shadcn-studio/blocks/pricing-component-16/pricing-component-16'

const plans = [
  {
    name: 'Startup',
    description: 'Perfect for small businesses, startups, & founder-led sales teams.',
    price: '299',
    currency: '$',
    duration: '/month',
    users: '2 users included',
    features: [
      { name: 'Enablement & Support', items: ['Scaled CSM', 'Community Onboarding'] },
      { name: 'Onboarding & Training', items: ['30,000 contacts'] },
      { name: 'Account Management', items: ['LinkedIn Automation', 'Multichannel Sequences'] },
      { name: 'Customer Feedback', items: ['AI Intent Signals', 'Duo Copilot'] }
    ]
  },
  {
    name: 'Growth',
    description: 'Ideal for mid-size teams ready to scale their sales operations.',
    price: '599',
    currency: '$',
    duration: '/month',
    users: '4 users included',
    isPopular: true,
    features: [
      { name: 'Enablement & Support', items: ['Dedicated CSM', 'Personalized Onboarding'] },
      { name: 'Onboarding & Training', items: ['280,000 contacts'] },
      { name: 'Account Management', items: ['LinkedIn Automation', 'Multichannel Sequences'] },
      { name: 'Customer Feedback', items: ['AI Intent Signals', 'Duo Voice'] }
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large enterprises with complex sales operations and custom needs.',
    price: 'Custom',
    currency: '$',
    duration: '/month',
    users: '10 users included',
    features: [
      { name: 'Enablement & Support', items: ['Dedicated CSM', 'Personalized Onboarding'] },
      { name: 'Onboarding & Training', items: ['1,000,000 contacts'] },
      { name: 'Account Management', items: ['LinkedIn Automation', 'Multichannel Sequences'] },
      { name: 'Customer Feedback', items: ['AI Intent Signals', 'Duo Inbox'] }
    ]
  }
]

const paymentMethods = [
  { name: 'Visa', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/visa.png' },
  { name: 'Mastercard', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/master.png' },
  { name: 'PayPal', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ae.png' },
  { name: 'American Express', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/jcb-logo.png' },
  { name: 'Discover', imageUrl: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/dinners-club-logo.png' }
]

const PricingPage = () => {
  return <Pricing plans={plans} paymentMethods={paymentMethods} />
}

export default PricingPage
