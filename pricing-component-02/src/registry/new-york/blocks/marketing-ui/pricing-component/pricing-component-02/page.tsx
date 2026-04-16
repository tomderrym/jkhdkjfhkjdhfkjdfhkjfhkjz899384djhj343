import { ComponentIcon, UserIcon, CloudUploadIcon, SparkleIcon, Share2Icon, MessageSquareTextIcon } from 'lucide-react'

import Pricing from '@/components/shadcn-studio/blocks/pricing-component-02/pricing-component-02'

const features = [
  [
    {
      icon: CloudUploadIcon,
      title: 'Cloud Storage',
      description: 'Up to 100GB for works'
    },
    {
      icon: ComponentIcon,
      title: 'API Access',
      description: 'Create anything you want'
    },
    {
      icon: MessageSquareTextIcon,
      title: 'Live Chat',
      description: 'Connect with your customers'
    }
  ],
  [
    {
      icon: UserIcon,
      title: 'Unlimited Accounts',
      description: "We don't limit you to create accounts"
    },
    {
      icon: SparkleIcon,
      title: 'Custom Domain',
      description: 'Add your custom domain'
    },
    {
      icon: Share2Icon,
      title: 'Share Information',
      description: 'Easily share your message'
    }
  ]
]

const PricingPage = () => {
  return <Pricing features={features} />
}

export default PricingPage
