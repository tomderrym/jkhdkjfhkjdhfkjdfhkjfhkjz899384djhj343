import Team from '@/components/shadcn-studio/blocks/team-section-05/team-section-05'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-14.png',
    alt: 'Gustavo Saris',
    name: 'Gustavo Saris',
    role: 'CEO',
    description: 'Former co-founder of opendoor, Early staff at spotify and clearbit.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-10.png',
    alt: 'Emerson Rosser',
    name: 'Emerson Rosser',
    role: 'HR',
    description: 'Ex-Lead at Google, former founding team at Dropbox and Asana.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-15.png',
    alt: 'Livia Carder',
    name: 'Livia Carder',
    role: 'Sales Lead',
    description: 'Early builder at Spotify, key contributor to growth  Notion.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-11.png',
    alt: 'Maren Sinha',
    name: 'Maren Sinha',
    role: 'Designer',
    description: 'Former Co-founder of Zapier, early team member at Slack and HubSpot.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
