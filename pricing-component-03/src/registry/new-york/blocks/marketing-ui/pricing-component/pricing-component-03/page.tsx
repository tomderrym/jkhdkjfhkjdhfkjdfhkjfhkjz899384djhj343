import { StarIcon, UsersIcon, PieChartIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-03/pricing-component-03'

const features = [
  {
    icon: StarIcon,
    title: 'Unlimited Templates:',
    description: 'Insight gives you the tools & resources you need to design a website.'
  },
  {
    icon: UsersIcon,
    title: 'Collaborative Workspace:',
    description: 'Insight provides you with the tools & resources you need to work as a team.'
  },
  {
    icon: PieChartIcon,
    title: 'Performance Analytics:',
    description: "Insight gives you the tools & resources you need to track your website's success."
  }
]

const planFeatures = [
  ['5 Website Templates', 'Mobile Responsive Design', 'Customisation Options', 'Access to Template Updates'],
  ['Free Demo Previews', 'Priority Email Support', '1 Year Access to New Templates', 'Template Setup Guide']
]

const PricingPage = () => {
  return <Pricing features={features} planFeatures={planFeatures} />
}

export default PricingPage
