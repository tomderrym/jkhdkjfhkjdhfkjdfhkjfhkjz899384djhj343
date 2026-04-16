import SocialProof from '@/components/shadcn-studio/blocks/social-proof-04/social-proof-04'

import type { TabData } from '@/components/shadcn-studio/blocks/social-proof-04/social-proof-04'

const tabsData: TabData[] = [
  {
    name: 'All Stats',
    value: 'all-stats',
    stats: [
      {
        title: 'Followers',
        value: '28,345',
        description: 'less than past month',
        change: '1.5%',
        trend: 'down'
      },
      {
        title: 'Likes',
        value: '190,234',
        description: 'less than past month',
        change: '7%',
        trend: 'up'
      },
      {
        title: 'Shares',
        value: '7,100',
        description: 'greater than past month',
        change: '4%',
        trend: 'up'
      }
    ]
  },
  {
    name: 'Instagram',
    value: 'instagram',
    stats: [
      {
        title: 'Followers',
        value: '8,954',
        description: 'less than past month',
        change: '0.4%',
        trend: 'down'
      },
      {
        title: 'Likes',
        value: '56,689',
        description: 'less than past month',
        change: '12%',
        trend: 'up'
      },
      {
        title: 'Shares',
        value: '3,214',
        description: 'greater than past month',
        change: '5%',
        trend: 'down'
      }
    ]
  },
  {
    name: 'Facebook',
    value: 'facebook',
    stats: [
      {
        title: 'Followers',
        value: '12,345',
        description: 'less than past month',
        change: '2%',
        trend: 'down'
      },
      {
        title: 'Likes',
        value: '98,765',
        description: 'less than past month',
        change: '5%',
        trend: 'up'
      },
      {
        title: 'Shares',
        value: '2,100',
        description: 'greater than past month',
        change: '3%',
        trend: 'up'
      }
    ]
  },
  {
    name: 'Twitter',
    value: 'twitter',
    stats: [
      {
        title: 'Followers',
        value: '6,789',
        description: 'less than past month',
        change: '1%',
        trend: 'down'
      },
      {
        title: 'Likes',
        value: '34,567',
        description: 'less than past month',
        change: '4%',
        trend: 'down'
      },
      {
        title: 'Shares',
        value: '1,250',
        description: 'greater than past month',
        change: '2%',
        trend: 'up'
      }
    ]
  }
]

const SocialProofPage = () => {
  return <SocialProof tabs={tabsData} />
}

export default SocialProofPage
