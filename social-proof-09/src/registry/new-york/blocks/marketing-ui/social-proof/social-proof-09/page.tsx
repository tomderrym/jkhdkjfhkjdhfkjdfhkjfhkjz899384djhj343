import SocialProof from '@/components/shadcn-studio/blocks/social-proof-09/social-proof-09'

const features = [
  {
    value: '40k',
    label: 'Customer'
  },
  {
    value: '50k',
    label: 'New Sign-ups'
  },
  {
    value: '20k',
    label: 'Monthly inquiry '
  }
]

const SocialProofPage = () => {
  return <SocialProof features={features} />
}

export default SocialProofPage
