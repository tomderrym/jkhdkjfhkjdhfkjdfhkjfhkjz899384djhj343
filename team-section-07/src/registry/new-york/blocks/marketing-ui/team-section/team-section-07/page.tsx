import Team from '@/components/shadcn-studio/blocks/team-section-07/team-section-07'

const teamMembers = [
  {
    name: 'Gustavo Dokidis',
    role: 'Sales Lead',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-21.png',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Alena Lubin',
    role: 'Product manager',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-22.png',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-41.png',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Alex Chen',
    role: 'Frontend Developer',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-40.png',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
