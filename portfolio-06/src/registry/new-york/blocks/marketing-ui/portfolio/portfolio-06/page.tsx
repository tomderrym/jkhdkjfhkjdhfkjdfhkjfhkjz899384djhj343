import Portfolio from '@/components/shadcn-studio/blocks/portfolio-06/portfolio-06'
import type { PortfolioCategories } from '@/components/shadcn-studio/blocks/portfolio-06/portfolio-06'

const portfolios: PortfolioCategories = {
  applications: [
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-52.png',
      title: 'Tech Innovations',
      description: 'Application'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-51.png',
      title: 'Dashboard Insights',
      description: 'Analytics & Reports'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-50.png',
      title: 'TikTok',
      description: 'Entertainment'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-49.png',
      title: 'Fitness',
      description: 'Health & Wellness'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-14.png',
      title: 'Expense Tracker',
      description: 'Finance'
    }
  ],
  branding: [
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-6.png',
      title: 'Personalized care',
      description: 'Healthcare'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-10.png',
      title: 'Sofa & Chair',
      description: 'Furniture'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-17.png',
      title: 'Food',
      description: 'Restaurant'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-8.png',
      title: 'Relify',
      description: 'eCommerce'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-43.png',
      title: 'Smart Travel',
      description: 'Wearable Tech'
    }
  ],
  'graphic-design': [
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-49.png',
      title: 'Finance',
      description: 'Visual reports made simple'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-15.png',
      title: 'Dashboard Insights',
      description: 'Creative Planning'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-5.png',
      title: 'Modern UI Systems',
      description: 'Clean, crisp, data-driven'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-22.png',
      title: 'Travel App Aesthetics',
      description: 'Explore with stunning UI'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-7.png',
      title: 'Smart Finance Design',
      description: 'Track, manage, and shine'
    }
  ],
  photography: [
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-46.png',
      title: 'Creative Expression',
      description: 'Design Meets Photography'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-43.png',
      title: 'Natural Beauty',
      description: 'Serenity in Nature'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-45.png',
      title: 'Rhythm in Motion',
      description: 'Energy Behind Beats'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-44.png',
      title: 'Virtual Adventures',
      description: 'Exploring New Realms'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-51.png',
      title: 'Focused Creativity',
      description: 'Ideas in Motion'
    }
  ],
  promotion: [
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-29.png',
      title: 'Smart Finance',
      description: 'Manage Your Wealth'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-28.png',
      title: 'Event Discovery',
      description: 'Stay Informed, Join Now'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-30.png',
      title: 'Focused Productivity',
      description: 'Achieve Your Goals'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-19.png',
      title: 'Health Revolution',
      description: 'Innovative Medical Aid'
    },
    {
      image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-14.png',
      title: 'Data at Fingertips',
      description: 'Track, Analyze, Grow'
    }
  ]
}

const PortfolioPage = () => {
  return <Portfolio portfolios={portfolios} />
}

export default PortfolioPage
