import LogoCloud from '@/components/shadcn-studio/blocks/logo-cloud-05/logo-cloud-05'

const brandLogos = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png',
    name: 'Airbnb'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png',
    name: 'HubSpot'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png',
    name: 'Google'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png',
    name: 'Microsoft'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png',
    name: 'Walmart'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo.png',
    name: 'Adobe'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo.png',
    name: 'Huawei'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo.png',
    name: 'Shopify'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/gatsby-logo.png',
    name: 'Gatsby'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/bookmyshow-logo.png',
    name: 'Book My Show'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/fedex-logo.png',
    name: 'FedEx'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo.png',
    name: 'Amazon'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-logo.png',
    name: 'Ola'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-logo.png',
    name: 'Paypal'
  }
]

const LogoCloudPage = () => {
  return <LogoCloud brandLogos={brandLogos} />
}

export default LogoCloudPage
