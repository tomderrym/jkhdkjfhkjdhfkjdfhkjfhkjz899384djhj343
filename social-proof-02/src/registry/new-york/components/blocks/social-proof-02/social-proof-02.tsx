import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type socialMediaStats = {
  name: string
  image: string
  users: string
  description: string
}

const SocialProof = ({ socialMediaStats }: { socialMediaStats: socialMediaStats[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Social Media{' '}
            <span className='relative z-10 max-sm:inline-block'>
              Advertising Reach Statistics
              <span className='bg-primary absolute bottom-0 left-0 -z-10 h-px w-full' aria-hidden='true' />
            </span>{' '}
            - 2025
          </h2>
          <p className='text-muted-foreground text-xl'>
            Explore the vast advertising potential across leading social media platforms.
          </p>
        </div>

        {/* Social Media Stats Grid */}
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {socialMediaStats.map((platform, index) => (
            <div key={index} className='flex flex-col items-center gap-6'>
              <Avatar className='size-20'>
                <AvatarImage src={platform.image} alt={platform.name} />
                <AvatarFallback className='text-xs'>{platform.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className='space-y-2.5 text-center'>
                <div className='flex items-center justify-center gap-2.5'>
                  <h3 className='text-xl font-medium'>{platform.name}</h3>
                  <Badge className='bg-primary/10 [a&]:hover:bg-primary/5 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 text-primary border-none text-sm focus-visible:outline-none'>
                    {platform.users}
                  </Badge>
                </div>
                <p className='text-muted-foreground'>{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
