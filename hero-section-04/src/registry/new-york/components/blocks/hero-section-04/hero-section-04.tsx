import { CircleDollarSignIcon, DollarSignIcon, TruckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'

import ShippedOrdersCard from '@/components/shadcn-studio/blocks/statistics-card-01'
import TotalRevenueCard from '@/components/shadcn-studio/blocks/statistics-card-02'
import RatingsCard from '@/components/shadcn-studio/blocks/statistics-card-04'
import TotalIncomeCard from '@/components/shadcn-studio/blocks/statistics-card-05'

import RatingsCardSvg from '@/assets/svg/ratings-card-svg'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='relative flex min-h-screen pt-16'>
      <div className='mx-auto flex max-w-7xl flex-1 flex-col gap-12 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        <div className='grid flex-1 gap-19 lg:grid-cols-2'>
          {/* Hero Content */}
          <div className='flex flex-col justify-center gap-9 py-20.5 max-lg:items-center max-lg:text-center'>
            <div className='flex flex-col gap-4 max-lg:items-center'>
              <MotionPreset fade slide transition={{ duration: 0.5 }}>
                <Badge className='rounded-full'>UI/UX</Badge>
              </MotionPreset>

              <MotionPreset
                component='h1'
                fade
                slide
                delay={0.3}
                transition={{ duration: 0.5 }}
                className='text-2xl font-bold text-balance sm:text-3xl lg:text-4xl'
              >
                Hello I&apos;m
                <br />
                <span className='text-primary text-6xl leading-[1.29167]'>John Smith</span>
                <br />
                Creative UI/UX Designer
              </MotionPreset>

              <MotionPreset
                component='p'
                fade
                slide
                delay={0.6}
                transition={{ duration: 0.5 }}
                className='text-muted-foreground max-w-3xl'
              >
                A UI/UX Designer focuses on creating user-friendly interfaces and optimizing the overall user experience
                by understanding user needs and behaviors.They combine visual design skills with research and testing to
                ensure that digital products are both functional and engaging.
              </MotionPreset>
            </div>

            <MotionPreset fade slide delay={0.9} transition={{ duration: 0.5 }} className='flex'>
              <Button size='lg'>Let&apos;s Work Together</Button>
            </MotionPreset>

            {/* Avatar Group */}
            <MotionPreset fade slide delay={1.2} transition={{ duration: 0.5 }} className='mt-2 flex -space-x-4'>
              {avatars.map((avatar, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                      <AvatarImage src={avatar.src} alt={avatar.name} />
                      <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{avatar.name}</TooltipContent>
                </Tooltip>
              ))}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md'>
                    <AvatarFallback>+1K</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>1K more</TooltipContent>
              </Tooltip>
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 64 }}
            delay={1.5}
            transition={{ duration: 0.5 }}
            className='bg-primary/10 absolute -top-16 right-0 h-192 w-[48%] rounded-bl-[140px] max-lg:hidden'
          >
            {/* User Image */}
            <MotionPreset
              component='img'
              fade
              delay={1.8}
              transition={{ duration: 0.5 }}
              className='absolute bottom-0 left-32 max-w-88 xl:max-w-95'
              motionProps={{
                src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-16.png',
                alt: 'User'
              }}
            />

            {/* Arrow SVG */}
            <svg
              width='232'
              height='187'
              viewBox='0 0 232 187'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 -left-20'
            >
              <MotionPreset
                component='path'
                delay={2}
                transition={{ duration: 0.7 }}
                motionProps={{
                  d: 'M16.0439 185.417C49.6136 191.49 126.317 125.391 121.762 74.1373C116.069 10.0708 21.1127 34.9571 48.82 93.2459C76.5273 151.535 220.975 140.213 214.47 25.6005',
                  stroke: 'var(--primary)',
                  strokeOpacity: '0.3',
                  strokeLinecap: 'round',
                  strokeDasharray: '10 10',
                  variants: {
                    hidden: { strokeDashoffset: 50, opacity: 0 },
                    visible: {
                      strokeDashoffset: 0,
                      opacity: 1
                    }
                  }
                }}
              />
              <MotionPreset
                component='path'
                delay={2.3}
                transition={{ duration: 0.5 }}
                motionProps={{
                  d: 'M221.9 21.2326L212.919 13.8813L205.567 22.8631',
                  stroke: 'var(--primary)',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  variants: {
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1
                    }
                  }
                }}
              />
            </svg>

            {/* Shipped Orders Card */}
            <MotionPreset
              fade
              className='absolute top-36 -left-6 w-72 origin-top-left scale-85'
              motionProps={{
                animate: {
                  y: [0, -16, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 2.7
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 2.7
                  }
                }
              }}
            >
              <ShippedOrdersCard
                icon={<TruckIcon className='size-4' />}
                title='Shipped Orders'
                value='42'
                changePercentage='+18.2%'
              />
            </MotionPreset>

            {/* Ratings Card */}
            <MotionPreset
              fade
              motionProps={{
                animate: {
                  y: [0, -16, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 2.9
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 2.9
                  }
                }
              }}
              className='absolute top-86 -left-15 w-65 origin-top-left scale-80'
            >
              <RatingsCard
                title='Ratings'
                badgeContent='Last 6 months'
                value='8.14k'
                changePercentage={18.2}
                svg={<RatingsCardSvg />}
              />
            </MotionPreset>

            {/* Total Revenue Card */}
            <MotionPreset
              fade
              motionProps={{
                animate: {
                  y: [0, -16, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 3.1
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 3.1
                  }
                }
              }}
              className='absolute top-58 left-95 w-72 origin-top-left scale-85 lg:max-[1321px]:hidden'
            >
              <TotalRevenueCard
                icon={<DollarSignIcon className='size-3.5' />}
                title='Total Revenue'
                value='$12,400'
                changePercentage={15}
              />
            </MotionPreset>

            {/* Total Income Card */}
            <MotionPreset
              fade
              motionProps={{
                animate: {
                  y: [0, -16, 0],
                  opacity: 1
                },
                transition: {
                  y: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 3.3
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 3.3
                  }
                }
              }}
              className='absolute top-98 left-125 w-50 origin-top-left scale-85 lg:max-[1415px]:hidden'
            >
              <TotalIncomeCard
                icon={CircleDollarSignIcon}
                title='Total Income'
                time='Last week'
                value='$4,673'
                changePercentage={25.2}
              />
            </MotionPreset>
          </MotionPreset>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <MotionPreset
            component='p'
            fade
            slide
            delay={3.7}
            transition={{ duration: 0.5 }}
            className='text-muted-foreground font-medium'
          >
            Trusted by this great Companies
          </MotionPreset>

          <MotionPreset
            fade
            slide
            delay={4}
            transition={{ duration: 0.5 }}
            className='flex flex-wrap items-center justify-center gap-8 py-4 grayscale'
          >
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/dailydev-logo-bw.png'
              alt='Daily Dev'
              className='h-9.5 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/ycombinator-logo-bw.png'
              alt='Y Combinator'
              className='h-9 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/bestofjs-logo-bw.png'
              alt='Best of JS'
              className='h-9 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/product-hunt-logo-bw.png'
              alt='Product Hunt'
              className='h-9 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/reddit-logo-bw.png'
              alt='Reddit'
              className='h-9 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/launchtory-logo-bw.png'
              alt='Launchtory'
              className='h-11 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/medium-logo-bw.png'
              alt='Medium'
              className='h-8.5 shrink-0'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/devto-logo-bw.png'
              alt='Dev.to'
              className='h-11.5 shrink-0'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
