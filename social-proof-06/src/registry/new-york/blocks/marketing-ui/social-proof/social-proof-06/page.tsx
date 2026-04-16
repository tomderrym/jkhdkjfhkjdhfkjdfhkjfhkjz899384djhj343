import { EyeIcon, HeartIcon, MessageCircleMoreIcon, CalendarDaysIcon, UserPlusIcon, UsersIcon } from 'lucide-react'

import SocialProof from '@/components/shadcn-studio/blocks/social-proof-06/social-proof-06'

import type { MetricCard } from '@/components/shadcn-studio/blocks/social-proof-06/social-proof-06'

const metricsData: MetricCard[] = [
  {
    title: 'Monthly inquiry',
    value: '589',
    change: '0.4',
    trend: 'down',
    description: 'less than past month',
    icon: <CalendarDaysIcon />,
    classNames: 'bg-primary/10 text-primary'
  },
  {
    title: 'Followers (Last 30 days)',
    value: '14.2k',
    change: '6%',
    trend: 'up',
    description: 'less than past month',
    icon: <UsersIcon />,
    classNames: 'bg-destructive/10 text-destructive'
  },
  {
    title: 'Following (last 30 days)',
    value: '26',
    change: '0.2%',
    trend: 'up',
    description: 'less than past month',
    icon: <UserPlusIcon />,
    classNames: 'bg-green-600/10 text-green-600 dark:bg-green-600/10 dark:text-green-600'
  },
  {
    title: 'Total Likes',
    value: '895k',
    change: '8.03%',
    trend: 'up',
    description: 'less than past month',
    icon: <HeartIcon />,
    classNames: 'bg-destructive/10 text-destructive'
  },
  {
    title: 'Total Comments',
    value: '16.8k',
    change: '0.8',
    trend: 'down',
    description: 'less than past month',
    icon: <MessageCircleMoreIcon />,
    classNames: 'bg-primary/10 text-primary'
  },
  {
    title: 'Profile views',
    value: '200k',
    change: '0.6',
    trend: 'down',
    description: 'less than past month',
    icon: <EyeIcon />,
    classNames: 'bg-sky-600/10 text-sky-600 dark:bg-sky-600/10 dark:text-sky-600'
  }
]

const SocialProofPage = () => {
  return <SocialProof metrics={metricsData} />
}

export default SocialProofPage
