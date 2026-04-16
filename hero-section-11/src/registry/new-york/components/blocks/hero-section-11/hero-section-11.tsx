'use client'

import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

const HeroSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = imageContainerRef.current

    if (!container) return

    // Check if screen is large enough for 3D effects (1024px+)
    const checkScreenSize = () => window.innerWidth >= 1024

    /**
     * Handle mouse movement for 3D tilt effect
     * Calculates rotation based on mouse position relative to container center
     */
    const handleMouseMove = (e: MouseEvent) => {
      if (!checkScreenSize()) return

      const rect = container.getBoundingClientRect()

      // Calculate rotation angles (reduced multiplier for subtle effect)
      const x = (e.clientX - rect.left - rect.width / 2) * 0.0075
      const y = (e.clientY - rect.top - rect.height / 2) * 0.0075

      // Apply 3D transform with perspective and slight scale
      container.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.01, 1.01, 1.01)`
      container.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)'
    }

    // Initialize hover state with smooth transition
    const handleMouseEnter = (e: MouseEvent) => {
      if (!checkScreenSize()) return

      container.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'
      handleMouseMove(e)
    }

    // Reset to neutral position when mouse leaves
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      container.style.boxShadow = 'none'
      container.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'
    }

    // Add event listeners for 3D tilt interaction
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className='flex-1 py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Content */}
        <div className='flex flex-col items-center gap-6 text-center'>
          <MotionPreset
            fade
            slide
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='border-primary text-muted-foreground bg-background rounded-full border px-3 py-2'
          >
            Join our Collaboration Survey! we&apos;ll donate $20 for each response 👍 . ----{' '}
            <span className='text-primary font-medium'>Take Survey</span>
          </MotionPreset>

          <MotionPreset
            component='h1'
            fade
            slide
            delay={0.3}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='max-w-3xl text-3xl leading-[1.29167] font-bold sm:text-4xl lg:text-5xl'
          >
            Unified Community and Business Insights Platform.
          </MotionPreset>

          <MotionPreset
            component='p'
            fade
            slide
            delay={0.6}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='text-muted-foreground max-w-4xl'
          >
            Showcase the value of your community to the business, Tlakbase sets the stage for successful
            cross-collaboration among community teams working with customer, marketing, sales and product development.
          </MotionPreset>

          <MotionPreset
            fade
            slide
            delay={0.9}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex flex-wrap items-center gap-4'
          >
            <Button size='lg' className='rounded-lg text-base shadow-sm' asChild>
              <a href='#'>Get Started for Free</a>
            </Button>
            <Button
              size='lg'
              asChild
              className='bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-base shadow-none'
            >
              <a href='#'>Live Demo</a>
            </Button>
          </MotionPreset>
        </div>

        {/* Hero Image with 3D Tilt Effect */}
        <MotionPreset
          ref={imageContainerRef}
          fade
          zoom={{ initialScale: 0.75 }}
          delay={1.3}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='rounded-xl'
        >
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-18.png'
            alt='hero-image'
            className='w-full rounded-xl object-cover dark:hidden'
          />
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-18-dark.png'
            alt='hero-image'
            className='hidden w-full rounded-xl object-cover dark:inline-block'
          />
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
