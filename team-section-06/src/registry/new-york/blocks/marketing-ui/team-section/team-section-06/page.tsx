import Team from '@/components/shadcn-studio/blocks/team-section-06/team-section-06'

const teamMembers = [
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-40.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-41.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-50.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-51.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-60.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-65.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-63.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-59.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-57.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-56.png'
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
