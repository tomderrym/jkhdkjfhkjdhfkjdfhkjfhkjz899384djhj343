import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { Marquee } from '@/components/ui/marquee'
import { MotionPreset } from '@/components/ui/motion-preset'

type brandLogos = {
  image: string
  name: string
}

const LogoCloud = ({ brandLogos }: { brandLogos: brandLogos[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-12 max-md:flex-col sm:gap-16 lg:gap-24'>
          {/* Header */}
          <div className='space-y-4'>
            <MotionPreset
              component='p'
              className='text-primary text-sm font-medium uppercase'
              fade
              slide={{ offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
            >
              The Brands We Work With
            </MotionPreset>

            <MotionPreset
              component='h2'
              className='text-2xl font-semibold md:text-3xl lg:text-4xl'
              fade
              slide={{ offset: 50 }}
              blur
              delay={0.3}
              transition={{ duration: 0.5 }}
            >
              Building strong partnerships with the world&apos;s most influential companies.
            </MotionPreset>

            <MotionPreset
              component='p'
              className='text-muted-foreground text-xl'
              fade
              blur
              slide={{ offset: 50 }}
              delay={0.6}
              transition={{ duration: 0.5 }}
            >
              Collaborating with enterprises and startups alike to push boundaries, disrupt markets, and achieve
              groundbreaking results.
            </MotionPreset>

            <MotionPreset fade blur slide={{ offset: 50 }} delay={0.9} transition={{ duration: 0.5 }}>
              <Button className='rounded-lg text-base shadow-sm' size='lg' asChild>
                <a href='#'>Explore more</a>
              </Button>
            </MotionPreset>
          </div>

          <div className='relative grid shrink-0 grid-cols-3 gap-9 lg:grid-cols-4'>
            <div className='from-background absolute top-0 z-1 h-1/3 w-full bg-gradient-to-b to-transparent' />
            <div className='from-background absolute bottom-0 z-1 h-1/3 w-full bg-gradient-to-t to-transparent' />
            <Marquee vertical pauseOnHover duration={20} gap={2.75} className='h-135 w-fit p-0'>
              {brandLogos.slice(0, 5).map((logo, index) => (
                <Avatar className='size-17.5' key={index}>
                  <AvatarImage src={logo.image} alt={logo.name} />
                  <AvatarFallback>{logo.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover duration={20} gap={2.75} reverse className='h-135 w-fit p-0'>
              {brandLogos.slice(5, 10).map((logo, index) => (
                <Avatar className='size-17.5' key={index}>
                  <AvatarImage src={logo.image} alt={logo.name} />
                  <AvatarFallback className='text-xs'>{logo.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover duration={20} gap={2.75} className='h-135 w-fit p-0'>
              {brandLogos.slice(10, 16).map((logo, index) => (
                <Avatar className='size-17.5' key={index}>
                  <AvatarImage src={logo.image} alt={logo.name} />
                  <AvatarFallback className='text-xs'>{logo.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover duration={20} gap={2.75} reverse className='h-135 w-fit p-0 max-lg:hidden'>
              {brandLogos.slice(16).map((logo, index) => (
                <Avatar className='size-17.5' key={index}>
                  <AvatarImage src={logo.image} alt={logo.name} />
                  <AvatarFallback className='text-xs'>{logo.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
