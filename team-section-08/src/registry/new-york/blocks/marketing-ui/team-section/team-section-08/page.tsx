import Team from '@/components/shadcn-studio/blocks/team-section-08/team-section-08'

const teamMembers = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-39.png',
    alt: 'Sophia Mendoza',
    className: 'absolute top-1 left-1 max-sm:left-6',
    size: 'size-20'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-38.png',
    alt: 'Lily Harris',
    className: 'absolute top-7 right-2/5',
    size: 'size-16'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-31.png',
    alt: 'Liam Grayson',
    className: 'absolute top-1/4 left-1/4',
    size: 'size-18'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-37.png',
    alt: 'Ella Carter',
    className: 'absolute top-20 right-8',
    size: 'size-15'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-30.png',
    alt: 'Jackson Flynn',
    className: 'absolute top-3/7 left-1 max-sm:left-6',
    size: 'size-16'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-36.png',
    alt: 'Olivia Bennett',
    className: 'absolute top-1/2 right-0 max-sm:right-5',
    size: 'size-20'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-35.png',
    alt: 'Ethan Blackwood',
    className: 'absolute top-3/7 left-1/2',
    size: 'size-16'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-33.png',
    alt: 'Ava Thompson',
    className: 'absolute top-3/5 left-1/4',
    size: 'size-15'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-34.png',
    alt: 'Mason Rodriguez',
    className: 'absolute bottom-0 left-4',
    size: 'size-20'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-38.png',
    alt: 'Grace Collins',
    className: 'absolute bottom-0 left-1/2',
    size: 'size-25'
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
