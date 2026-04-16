import { LeafIcon, TreeDeciduousIcon, SproutIcon, TreePineIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-20/pricing-component-20'

const pricingPlans = [
  {
    title: 'Free',
    description: 'Ideal For Tracking a Small brand or Business',
    price: 0,
    features: ['1 User', 'Update in every 48h', 'AI Sentiments Analysis'],
    icon: LeafIcon,
    buttonLabel: 'Get started for free'
  },
  {
    title: 'Team',
    description: 'Ideal for Tracking a Growing Brand or Business',
    price: 99,
    features: ['2 Users', 'Update in every 24h', 'Competitive Analysis'],
    icon: TreeDeciduousIcon,
    buttonLabel: 'Purchase Now'
  },
  {
    title: 'Pro',
    description: 'Ideal for Tracking a Large Brand or Business',
    price: 399,
    features: ['5 Users', 'Update in every 12h', 'User Satisfaction Survey'],
    icon: SproutIcon,
    buttonLabel: 'Purchase Now'
  },
  {
    title: 'Custom',
    description: 'Ideal for Tracking a Global Brand or Business',
    price: 799,
    features: ['Custom Users', 'Sales Growth Forecasts', 'Product Usage Analytics'],
    icon: TreePineIcon,
    isPopular: true,
    buttonLabel: 'Purchase Plan'
  }
]

const tableFeatures = [
  { feature: 'Users', plans: ['1 User', '2 Users', '5 Users', 'Customisable'] },
  {
    feature: 'Update',
    plans: ['Update in every 48h', 'Update in every 24h', 'Update in every 12h', 'Update in every 12h']
  },
  { feature: 'AI Sentiment', plans: ['Yes', 'Yes', 'Lifetime', 'Lifetime'] },
  { feature: 'Mentions Volume', plans: ['-', '-', 'Unlimited', 'Unlimited'] },
  { feature: 'Engagement tracking', plans: ['-', '-', 'Like, Comment', 'Like, Comment'] },
  { feature: 'Influencer Analysis', plans: ['-', '-', '-', 'Yes'] },
  { feature: 'Presence Score', plans: ['-', '-', '-', 'Unlimited Accounts'] },
  { feature: 'Integrations (Slack)', plans: ['-', '-', '-', 'Yes'] }
]

const PricingPage = () => {
  return <Pricing pricingPlans={pricingPlans} tableFeatures={tableFeatures} />
}

export default PricingPage
