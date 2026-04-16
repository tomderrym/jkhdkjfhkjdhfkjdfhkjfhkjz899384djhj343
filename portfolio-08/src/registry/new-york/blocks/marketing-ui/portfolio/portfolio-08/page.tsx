import Portfolio from '@/components/shadcn-studio/blocks/portfolio-08/portfolio-08'
import type { PortfolioItem } from '@/components/shadcn-studio/blocks/portfolio-08/portfolio-08'

const portfolios: PortfolioItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-26.png',
    type: 'branding',
    title: 'Optimize Cloud Costs',
    description: 'Reduce AWS/GCP expenses with smart scaling and resource management techniques.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-23.png',
    type: 'design',
    title: 'Secure Python Coding',
    description: 'Implement OWASP guidelines to write secure, vulnerability-free Python applications effortlessly.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-25.png',
    type: 'marketing',
    title: 'CI/CD Best Practices',
    description: 'Enhance deployment efficiency using Jenkins, GitLab, and automated testing strategies.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-24.png',
    type: 'development',
    title: 'Kubernetes Monitoring',
    description:
      'Build scalable and reliable systems with Terraform, AWS, and Kubernetes for streamlined infrastructure management.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-84.png',
    type: 'marketing',
    title: 'Cloud Infrastructure Automation',
    description: 'Leverage Prometheus and Grafana for seamless cluster performance tracking.'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-85.png',
    type: 'design',
    title: 'Secure Code Practices',
    description:
      'Implement static analysis, dependency scanning, and DevSecOps workflows to ensure application security at every stage.'
  }
]

const PortfolioPage = () => {
  return <Portfolio portfolios={portfolios} />
}

export default PortfolioPage
