import Team from '@/components/shadcn-studio/blocks/team-section-03/team-section-03'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-29.png',
    alt: 'Gustavo Saris',
    name: 'Gustavo Saris',
    role: 'CEO',
    description: 'Former co-founder of opendoor, Early staff at spotify and clearbit.Former co-founder of opendoor.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-28.png',
    alt: 'Emerson Rosser',
    name: 'Emerson Rosser',
    role: 'Frontend Developer',
    description: 'Ex-Lead at Google, former founding team at Dropbox and Asana.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-42.png',
    alt: 'Jaydon Lipshutz',
    name: 'Jaydon Lipshutz',
    role: 'Sales Lead',
    description: 'Early builder at Spotify, key contributor to growth at Clearbit and Notion.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-43.png',
    alt: 'Alena Lubin',
    name: 'Alena Lubin',
    role: 'Product Manager',
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
