import { LeafIcon, ShapesIcon, SproutIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-15/pricing-component-15'

const plans = [
  {
    name: 'Standard',
    icon: LeafIcon,
    price: 99,
    description: 'Great for startups and personal projects with a clean and simple design.',
    features: ['2 Logo Variations', '3 Revisions', 'Custom Color Palette', 'File Formats: AI, PDF SVG, PNG']
  },
  {
    name: 'Professional Logo Design',
    icon: ShapesIcon,
    price: 299,
    description:
      'The comprehensive solution for businesses looking for a fully customized logo with all essential assets included.',
    features: [
      '6 Logo Variations',
      'Unlimited Revisions',
      'Custom Color Palette & Branding Guidelines',
      'FileFormats: .AI, .PDF, .SVG, .PNG',
      'Estimated Delivery Time: 3 Days',
      'Extra assets: Favicon, Social Media Kit'
    ],
    isHighlighted: true
  },
  {
    name: 'Premium Logo Design',
    icon: SproutIcon,
    price: 199,
    description: 'For businesses seeking a solid logo with room for refinement and custom branding.',
    features: ['4 Logo Variations', '4 Revisions', 'Custom Color Palette', 'File Formats: AI, PDF SVG, PNG']
  }
]

const PricingPage = () => {
  return <Pricing plans={plans} />
}

export default PricingPage
