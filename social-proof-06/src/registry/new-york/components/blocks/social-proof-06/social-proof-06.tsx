'use client'

import { useEffect } from 'react'

import type { JSX } from 'react'

import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

export type MetricCard = {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  description: string
  icon: JSX.Element
  classNames: string
}

const SocialProof = ({ metrics }: { metrics: MetricCard[] }) => {
  useEffect(() => {
    const all = document.querySelectorAll('.card')

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.blob') as HTMLElement
        const fblob = e.querySelector('.fake-blob') as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()

        blob.style.opacity = '0.8'

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - 24 - rec.width / 2
              }px, ${ev.clientY - rec.top - 24 - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='p'
            className='text-primary text-sm font-medium uppercase'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            social proof
          </MotionPreset>

          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Engagement and Activity Overview
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            Key Metrics for Monthly Inquiries, Followers, and Interactions
          </MotionPreset>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {metrics.map((metric, index) => (
            <MotionPreset
              key={index}
              className='bg-foreground/10 card group relative h-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'
              fade
              blur
              transition={{ duration: 0.8 }}
              delay={0.9 + index * 0.1}
            >
              <Card className='group-hover:bg-card/90'>
                <CardHeader className='flex items-center justify-between gap-6'>
                  <CardTitle className='text-muted-foreground text-xl font-semibold'>{metric.title}</CardTitle>
                  <Avatar className='size-14.5'>
                    <AvatarFallback className={metric.classNames}>{metric.icon}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <h3 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{metric.value}</h3>
                  <div className='flex items-center gap-2'>
                    <div
                      className={cn('flex items-center gap-0.5 text-xl font-medium', {
                        'text-green-600 dark:text-green-400': metric.trend === 'up',
                        'text-destructive': metric.trend === 'down'
                      })}
                    >
                      {metric.trend === 'up' ? (
                        <ArrowUpIcon className='size-4' />
                      ) : (
                        <ArrowDownIcon className='size-4' />
                      )}
                      <p>{metric.change}</p>
                    </div>
                    <p className='text-muted-foreground text-xl'>{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
              <div className='blob bg-primary absolute top-0 left-0 -z-1 h-62.5 w-62.5 rounded-full opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
              <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] h-40 w-40 rounded-full' />
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
