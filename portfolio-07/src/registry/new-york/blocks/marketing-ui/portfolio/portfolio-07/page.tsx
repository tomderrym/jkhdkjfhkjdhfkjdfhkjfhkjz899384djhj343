import Portfolio from '@/components/shadcn-studio/blocks/portfolio-07/portfolio-07'
import type { PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-07/portfolio-07'

const portfolios: PortfolioItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-22.png',
    title: 'TravelMate App',
    description:
      'An application designed for travelers that helps users find and book accommodations, activities, and local experiences seamlessly. Features include real-time availability, user reviews, and personalized recommendations.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-81.png',
    title: 'Wealth Platform',
    description:
      'A next-generation wealth management platform that empowers financial advisors to manage their next-gen clients onchain. Our solution integrates traditional and digital assets with powerful analytics tools.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-82.png',
    title: 'EcoTrack Platform',
    description:
      'An innovative sustainability monitoring solution that helps businesses track and reduce their environmental impact. Our platform provides detailed analytics for achieving corporate sustainability goals.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-83.png',
    title: 'LearnSmart LMS',
    description:
      'A modern learning management system that revolutionizes online education through personalized learning paths and interactive content delivery. Our platform enhances student engagement and educational outcomes.'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolios={portfolios} />
}

export default PortfolioPage
