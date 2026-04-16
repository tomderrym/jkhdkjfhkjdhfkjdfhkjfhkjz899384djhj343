import HeroSection from '@/components/shadcn-studio/blocks/hero-section-06/hero-section-06'
import Header from '@/components/shadcn-studio/blocks/hero-section-06/header'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col overflow-hidden pt-16 lg:h-screen lg:min-h-242'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
