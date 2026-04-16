import Pricing from '@/components/shadcn-studio/blocks/pricing-component-10/pricing-component-10'

const plans = [
  {
    name: 'Starter',
    price: 99,
    badge: 'Popular'
  },
  {
    name: 'Professional',
    price: 199,
    badge: null
  }
]

const features = [
  {
    title: 'Unlimited Components',
    description: 'Shadcn/studio gives you access to a vast library of customizable components to enhance your projects.'
  },
  {
    title: 'Collaborative Workspace',
    description: 'Work seamlessly with your team using our collaborative tools and resources.'
  },
  {
    title: 'Performance Analytics',
    description: 'Track your UI performance and user engagement with built-in analytics tools.'
  },
  {
    title: 'Responsive Design Framework',
    description: 'Optimize your UI for all devices with our responsive design options.'
  },
  {
    title: 'Theming and Customization',
    description: 'Customize components effortlessly with consistent branding using custom themes.'
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} features={features} />
}

export default PricingPage
