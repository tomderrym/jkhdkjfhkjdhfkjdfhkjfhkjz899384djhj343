import SocialProof from '@/components/shadcn-studio/blocks/social-proof-02/social-proof-02'

const socialMediaStats = [
  {
    name: 'LinkedIn',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/linkdin-icon.png',
    users: '1.15 billion',
    description: 'Users available for advertising'
  },
  {
    name: 'Instagram',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/instagram-icon.png',
    users: '1.688 billion',
    description: 'Users exposed to ads'
  },
  {
    name: 'Youtube',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/youtube-icon.png',
    users: '2.53 billion',
    description: 'Engaged with advertisements'
  },
  {
    name: 'Snapchat',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/snapchat-icon.png',
    users: '750 million',
    description: 'Users reached through ads'
  },
  {
    name: 'Messenger',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/message-icon.png',
    users: '931 million',
    description: 'Users accessible for ads'
  },
  {
    name: 'X',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png',
    users: '590 million',
    description: 'Users for advertising campaigns'
  }
]

const SocialProofPage = () => {
  return <SocialProof socialMediaStats={socialMediaStats} />
}

export default SocialProofPage
