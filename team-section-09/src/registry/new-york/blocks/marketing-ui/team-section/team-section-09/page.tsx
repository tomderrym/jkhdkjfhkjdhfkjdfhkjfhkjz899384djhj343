import Team from '@/components/shadcn-studio/blocks/team-section-09/team-section-09'

const teamMembers = [
  {
    name: 'Alena Lubin',
    role: 'Founder & CEO',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-26.png',
    classNames: 'bg-destructive/10 hover:ring-destructive/30',
    iconHoverColor: 'group-hover:text-destructive',
    socialLinks: {
      github: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Saris Fletcher',
    role: 'UI Designer',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-27.png',
    classNames: 'bg-primary/10 hover:ring-primary/30',
    iconHoverColor: 'group-hover:text-primary',
    socialLinks: {
      github: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Maria Donin',
    role: 'Product Manager',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-25.png',
    classNames: 'bg-amber-600/10 dark:bg-amber-400/10 hover:ring-amber-600/30 dark:hover:ring-amber-400/30',
    iconHoverColor: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    socialLinks: {
      github: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Phillip Rothman',
    role: 'Frontend Developer',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-24.png',
    classNames: 'bg-green-600/10 dark:bg-green-400/10 hover:ring-green-600/30 dark:hover:ring-green-400/30',
    iconHoverColor: 'group-hover:text-green-600 dark:group-hover:text-green-400',
    socialLinks: {
      github: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Emerson Roeser',
    role: 'Frontend Developer',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-23.png',
    classNames: 'bg-sky-600/10 dark:bg-sky-400/10 hover:ring-sky-600/30 dark:hover:ring-sky-400/30',
    iconHoverColor: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
    socialLinks: {
      github: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
