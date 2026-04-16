import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-03/bento-grid-03'
import type { AvatarItem } from '@/components/shadcn-studio/blocks/bento-grid-03/bento-grid-03'

const avatars: AvatarItem[] = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Howard Lloyd',
    fallback: 'HL',
    designation: 'Product Manager'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Olivia Sparks',
    fallback: 'OS',
    designation: 'Software Engineer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Hallie Richards',
    fallback: 'HR',
    designation: 'UI/UX Designer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Jenny Wilson',
    fallback: 'JW',
    designation: 'Junior Developer'
  }
]

const BentoGridPage = () => {
  return <BentoGrid avatars={avatars} />
}

export default BentoGridPage
