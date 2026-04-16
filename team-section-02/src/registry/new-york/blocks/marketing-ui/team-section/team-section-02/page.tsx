import Team from '@/components/shadcn-studio/blocks/team-section-02/team-section-02'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-16.png',
    alt: 'Paitlyn Lubin',
    name: 'Paitlyn Lubin',
    role: 'Product Manager',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-13.png',
    alt: 'Davis Herwitz',
    name: 'Davis Herwitz',
    role: 'Web Developer',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-12.png',
    alt: 'Omar Dorwart',
    name: 'Omar Dorwart',
    role: 'UI/UX Lead',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-9.png',
    alt: 'Kianna Gouse',
    name: 'Kianna Gouse',
    role: 'Sales Manager',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
