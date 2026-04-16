import LogoCloud from '@/components/shadcn-studio/blocks/logo-cloud-09/logo-cloud-09'

const brandLogos = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png',
    name: 'Microsoft'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo-bw.png',
    name: 'Google'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo-bw.png',
    name: 'Amazon'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/meta-icon.png',
    name: 'Ola'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/evernote-icon-bw.png',
    name: 'Evernote'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo-bw.png',
    name: 'HubSpot'
  }
]

const LogoCloudPage = () => {
  return <LogoCloud brandLogos={brandLogos} />
}

export default LogoCloudPage
