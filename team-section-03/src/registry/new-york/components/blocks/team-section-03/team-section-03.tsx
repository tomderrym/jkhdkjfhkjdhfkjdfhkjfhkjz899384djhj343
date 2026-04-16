import TeamCard from '@/components/shadcn-studio/blocks/team-section-03/team-card'

type TeamMember = {
  image: string
  alt: string
  name: string
  role: string
  description: string
  socialLinks: {
    facebook: string
    twitter: string
    github: string
    instagram: string
  }
}[]

const Team = ({ teamMembers }: { teamMembers: TeamMember }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>The Team That Makes It All Happens !</h2>
          <p className='text-muted-foreground text-xl'>
            Passionate professionals dedicated to innovation, collaboration, and excellence.
          </p>
        </div>

        <TeamCard teamMembers={teamMembers} />
      </div>
    </section>
  )
}

export default Team
