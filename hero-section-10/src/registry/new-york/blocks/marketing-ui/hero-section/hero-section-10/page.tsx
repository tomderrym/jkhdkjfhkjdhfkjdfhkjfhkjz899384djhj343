import Header from '@/components/shadcn-studio/blocks/hero-section-10/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'
import type { AvatarItem } from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'

const navigationData: NavigationSection[] = [
  {
    title: 'Docs',
    href: '#'
  },
  {
    title: 'Components',
    href: '#'
  },
  {
    title: 'Blocks',
    href: '#'
  },
  {
    title: 'Templates',
    href: '#'
  },
  {
    title: 'Resources',
    items: [
      { title: 'UI kits', href: '#' },
      { title: 'Component library', href: '#' },
      { title: 'Figma designs', href: '#' }
    ]
  }
]

const avatars: AvatarItem[] = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Howard Lloyd',
    fallback: 'HL'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Jenny Wilson',
    fallback: 'JW'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Hallie Richards',
    fallback: 'HR'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Olivia Sparks',
    fallback: 'OS'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='relative flex flex-col'>
        <HeroSection avatars={avatars} />
      </main>
    </div>
  )
}

export default HeroSectionPage
