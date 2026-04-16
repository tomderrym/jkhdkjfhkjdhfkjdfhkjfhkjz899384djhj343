import HeroSection from '@/components/shadcn-studio/blocks/hero-section-11/hero-section-11'
import Header from '@/components/shadcn-studio/blocks/hero-section-11/header'
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
    <div className='min-h-screen'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex min-h-[calc(100dvh-4rem)] flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
