import Portfolio from '@/components/shadcn-studio/blocks/portfolio-04/portfolio-04'
import type { PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-04/portfolio-04'

const portfolios: PortfolioItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-21.png',
    date: 'March 22, 2024',
    title: 'Code Editor'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-18.png',
    date: 'June 5, 2024',
    title: 'News Graph'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-15.png',
    date: 'September 8, 2024',
    title: 'Web Analytics'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-12.png',
    date: 'December 3, 2024',
    title: 'Mobile UI'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-20.png',
    date: 'April 15, 2024',
    title: 'Smart Watch'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-17.png',
    date: 'July 20, 2024',
    title: 'IoT Control'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-14.png',
    date: 'October 12, 2024',
    title: 'Dark Theme'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-11.png',
    date: 'December 18, 2024',
    title: 'Mobile Stats'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-19.png',
    date: 'May 10, 2024',
    title: 'Social Feed'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-16.png',
    date: 'August 15, 2024',
    title: 'Data Insights'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-13.png',
    date: 'November 25, 2024',
    title: 'Dev Console'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-10.png',
    date: 'January 5, 2025',
    title: 'App Design'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolios={portfolios} />
}

export default PortfolioPage
