import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-02/bento-grid-02'
import type { NotificationCard } from '@/components/shadcn-studio/blocks/bento-grid-02/notification-stack'

const notifications: NotificationCard[] = [
  {
    id: '1',
    name: 'Steve Rogers',
    time: 'Today, 11:56',
    amount: '$49',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'SR'
  },
  {
    id: '2',
    name: 'Tony Stark',
    time: 'Today, 10:32',
    amount: '$89',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'TS'
  },
  {
    id: '3',
    name: 'Bruce Banner',
    time: 'Today, 09:15',
    amount: '$156',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'BB'
  }
]

const BentoGridPage = () => {
  return <BentoGrid notifications={notifications} />
}

export default BentoGridPage
