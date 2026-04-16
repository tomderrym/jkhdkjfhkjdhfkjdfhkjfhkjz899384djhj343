import {
  ComponentIcon,
  SquarePenIcon,
  SettingsIcon,
  SwatchBookIcon,
  BrushIcon,
  CodeXmlIcon,
  RocketIcon,
  SmartphoneIcon
} from 'lucide-react'

import Portfolio from '@/components/shadcn-studio/blocks/portfolio-09/portfolio-09'
import type { FeatureItem, PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-09/portfolio-09'

const features: FeatureItem[] = [
  {
    icon: ComponentIcon,
    title: 'Component Development',
    description:
      'We create a diverse range of user-friendly components that are both functional and visually appealing.'
  },
  {
    icon: SquarePenIcon,
    title: 'User-Centric Design',
    description:
      'Our design process prioritizes user experience, driven by research and feedback to address developer needs.'
  },
  {
    icon: SettingsIcon,
    title: 'Performance Optimization',
    description: 'We focus on delivering lightweight components that enhance application speed and responsiveness.'
  },
  {
    icon: SwatchBookIcon,
    title: 'Comprehensive Theming Solutions',
    description: 'Flexible theming options allow developers to easily customize the appearance of our components.'
  }
]

const portfolios: PortfolioItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-29.png',
    icon: BrushIcon,
    title: 'Crafting intuitive interfaces through modern design principles and user-centered methodologies',
    date: 'March 8, 2023'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-28.png',
    icon: ComponentIcon,
    title: 'Our values shape our holistic approach to design and development',
    date: 'January 15, 2023'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-27.png',
    icon: CodeXmlIcon,
    title: 'Building scalable solutions with clean architecture and industry best practices applications.',
    date: 'June 22, 2023'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-31.png',
    icon: SmartphoneIcon,
    title: 'Responsive design that adapts to every screen with seamless interactions and fluid layouts',
    date: 'September 30, 2023'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-30.png',
    icon: RocketIcon,
    title: 'Optimizing performance for lightning-fast experiences through advanced caching and code optimization',
    date: 'December 12, 2023'
  }
]

const PortfolioPage = () => {
  return <Portfolio features={features} portfolios={portfolios} />
}

export default PortfolioPage
