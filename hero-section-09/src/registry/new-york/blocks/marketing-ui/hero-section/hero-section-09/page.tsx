import HeroSection from '@/components/shadcn-studio/blocks/hero-section-09/hero-section-09'
import Header from '@/components/shadcn-studio/blocks/hero-section-09/header'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

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

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col overflow-hidden pt-16'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
