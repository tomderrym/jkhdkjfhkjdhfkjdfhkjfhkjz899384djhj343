import HeroSection from '@/components/shadcn-studio/blocks/hero-section-08/hero-section-08'
import Header from '@/components/shadcn-studio/blocks/hero-section-08/header'
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
    <div className='relative bg-[#2F2F2F] bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-22.png)] bg-cover bg-fixed bg-center bg-no-repeat'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
