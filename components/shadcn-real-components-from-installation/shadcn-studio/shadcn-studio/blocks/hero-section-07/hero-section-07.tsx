import { ClipboardCheckIcon, Clock4Icon, ListChecksIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='min-h-screen overflow-hidden py-12 sm:py-16 lg:py-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-12 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-8 self-center text-center'>
          <MotionPreset
            component='h1'
            fade
            blur
            slide
            transition={{ duration: 0.5 }}
            className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'
          >
            Streamline Your Tasks, Achieve Your Goals 🚀
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            blur
            slide
            delay={0.3}
            transition={{ duration: 0.5 }}
            className='text-muted-foreground text-balance'
          >
            Transform the way you manage your daily tasks and projects. Experience unparalleled efficiency and clarity
            in your workflow
          </MotionPreset>

          <MotionPreset
            fade
            slide
            delay={0.6}
            transition={{ duration: 0.5 }}
            className='mt-1.5 flex items-center gap-4 max-lg:justify-center'
          >
            {/* Avatar Group */}
            <div className='flex -space-x-4'>
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
                    <AvatarFallback className='text-xs'>+3651</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>3651 more</TooltipContent>
              </Tooltip>
            </div>

            <div className='flex flex-col items-start gap-1'>
              <h3 className='text-3xl font-bold'>1.5M</h3>
              <span className='font-medium'>Users using this app</span>
            </div>
          </MotionPreset>
        </div>

        {/* Hero Content */}
        <MotionPreset
          fade
          blur
          zoom={{ initialScale: 0.8 }}
          slide={{ direction: 'down' }}
          delay={1}
          transition={{ duration: 0.5 }}
          className='bg-primary text-primary-foreground flex items-center gap-12 rounded-3xl p-12 max-lg:flex-col sm:gap-16 sm:p-16 lg:gap-24 lg:p-24'
        >
          {/* Left Content */}
          <div className='flex-1 space-y-6'>
            {/* Hero Title */}
            <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>How App Can Help You?</h2>

            {/* List of Features */}
            <ul className='space-y-2'>
              <li className='flex gap-2.5 p-2.5'>
                <ListChecksIcon />
                <div className='flex flex-col gap-1'>
                  <span className='text-lg font-medium'>Smart Task Organization</span>
                  <span>Keep your tasks sorted and prioritized.</span>
                </div>
              </li>
              <li className='flex gap-2.5 p-2.5'>
                <Clock4Icon />
                <div className='flex flex-col gap-1'>
                  <span className='text-lg font-medium'>Deadline Reminders</span>
                  <span>Never miss a deadline with timely notifications.</span>
                </div>
              </li>
              <li className='flex gap-2.5 p-2.5'>
                <ClipboardCheckIcon />
                <div className='flex flex-col gap-1'>
                  <span className='text-lg font-medium'>Collaborative Projects</span>
                  <span>Work together with your team seamlessly.</span>
                </div>
              </li>
            </ul>

            {/* Download Section */}
            <div className='flex flex-wrap gap-6 max-lg:justify-center'>
              <a href='#' className='text-primary bg-primary-foreground flex items-center gap-4 rounded-md px-6 py-2.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/apple-icon.png'
                  alt='App Store Icon'
                  className='h-7 dark:invert'
                />
                <div>
                  <span className='block text-xs'>Download on the</span>
                  <span className='font-medium'>App Store</span>
                </div>
              </a>

              <a href='#' className='text-primary bg-primary-foreground flex items-center gap-4 rounded-md px-6 py-2.5'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-play-icon.png'
                  alt='Google Play Icon'
                  className='h-7'
                />
                <div>
                  <span className='block text-xs'>Download on the</span>
                  <span className='font-medium'>Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className='flex-1'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-15.png'
              alt='Mobile screen'
              className='mx-auto w-full max-w-116'
            />
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
