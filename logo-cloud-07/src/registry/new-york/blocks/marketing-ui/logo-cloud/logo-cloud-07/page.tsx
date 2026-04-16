import LogoCloud from '@/components/shadcn-studio/blocks/logo-cloud-07/logo-cloud-07'

const logoData = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/webflow-icon-circle.png',
    alt: 'Webflow',
    size: 'size-15'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/netflix-icon-circle.png',
    alt: 'Netflix',
    size: 'size-12'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/stackoverflow-icon-circle.png',
    alt: 'Stack Overflow',
    size: 'size-12.5'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-icon-circle.png',
    alt: 'Shopify',
    size: 'size-11'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/mailchimp-icon-circle.png',
    alt: 'Mailchimp',
    size: 'size-9.5'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-icon-circle.png',
    alt: 'PayPal',
    size: 'size-15'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-icon-circle.png',
    alt: 'Airbnb',
    size: 'size-12.5'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-icon-circle.png',
    alt: 'Huawei',
    size: 'size-15'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/dropbox-icon-circle.png',
    alt: 'Dropbox',
    size: 'size-15'
  }
]

const LogoCloudPage = () => {
  return <LogoCloud logos={logoData} />
}

export default LogoCloudPage
