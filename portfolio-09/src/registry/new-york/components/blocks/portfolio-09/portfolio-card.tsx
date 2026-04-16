import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import * as motion from 'motion/react-client'
import type { LucideProps } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type Portfolio = {
  image: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  title: string
  date: string
}

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <motion.div className='group relative overflow-hidden rounded-xl' whileHover='hover' initial='initial'>
      <img src={portfolio.image} alt={portfolio.title} className='aspect-auto h-full w-full object-cover' />
      <motion.div
        className='absolute inset-0 bg-black/70 blur-xs'
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30
        }}
      />
      <div className='absolute inset-0 space-y-4 p-6'>
        <motion.div
          variants={{
            initial: { opacity: 0, x: 32 },
            hover: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 12,
                delay: 0
              }
            }
          }}
        >
          <Avatar className='size-11 border border-white text-white'>
            <AvatarFallback className='bg-transparent'>
              <portfolio.icon className='size-7' />
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.div
          className='text-lg font-medium text-white'
          variants={{
            initial: { opacity: 0, x: 32 },
            hover: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 10,
                delay: 0.2
              }
            }
          }}
        >
          {portfolio.title}
        </motion.div>
        <motion.div
          className='text-xs text-white'
          variants={{
            initial: { opacity: 0, x: 32 },
            hover: {
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                stiffness: 160,
                damping: 8,
                delay: 0.4
              }
            }
          }}
        >
          {portfolio.date}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PortfolioCard
