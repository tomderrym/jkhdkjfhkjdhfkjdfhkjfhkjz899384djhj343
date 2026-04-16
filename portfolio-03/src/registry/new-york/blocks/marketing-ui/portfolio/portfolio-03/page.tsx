import Portfolio from '@/components/shadcn-studio/blocks/portfolio-03/portfolio-03'
import type { PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-03/portfolio-03'

const portfolios: PortfolioItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-9.png',
    type: 'branding',
    category: 'Content Creation',
    title: 'Engaging Blog Series'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-8.png',
    type: 'design',
    category: 'UI/UX',
    title: 'Website Revamp'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-6.png',
    type: 'marketing',
    category: 'SEO',
    title: 'SEO Strategy'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-5.png',
    type: 'branding',
    category: 'Content Creation',
    title: 'Social Media Campaign'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-4.png',
    type: 'marketing',
    category: 'Marketing',
    title: 'Digital Marketing'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-7.png',
    type: 'development',
    category: 'App Development',
    title: 'eCommerce Platform'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolios={portfolios} />
}

export default PortfolioPage
