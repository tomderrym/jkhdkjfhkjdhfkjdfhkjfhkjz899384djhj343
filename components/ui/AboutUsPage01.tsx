import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from './button';
import { BaseComponentProps } from '../../types';

type StatItem = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  description: string;
};

const AboutUsPage01: React.FC<BaseComponentProps & { stats?: StatItem[] }> = ({ theme, stats = [] }) => {
  const defaultStats: StatItem[] = [
    { icon: () => <span>👥</span>, value: '10K+', description: 'Active Users' },
    { icon: () => <span>⭐</span>, value: '4.9', description: 'Rating' },
    { icon: () => <span>🌍</span>, value: '50+', description: 'Countries' },
    { icon: () => <span>💼</span>, value: '500+', description: 'Companies' },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section 
      className='bg-muted py-8 sm:py-16 lg:py-24'
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <h2 
            className='text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl'
            style={{ color: theme?.primaryTextColor }}
          >
            About Us
          </h2>
          <p 
            className='text-muted-foreground text-xl'
            style={{ color: theme?.secondaryTextColor }}
          >
            Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
            challenges, celebrated victories, and woven a narrative of growth and success.
          </p>
          <Button size='lg' className='group rounded-lg text-base shadow-sm has-[>svg]:px-6'>
            <a href='#' className='no-underline'>
              Read more
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
        </div>

        {/* Video player and stats */}
        <div className='relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24'>
          <div className='aspect-video w-full overflow-hidden rounded-xl lg:h-[644px]'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/RQYZXwLBY8A?si=MvvPX6xaOdzySLfb'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>

          {/* Stats card overlapping the video section */}
          <div className='bg-background grid gap-10 rounded-md border p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max'>
            {displayStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className='flex flex-col items-center justify-center gap-2.5 text-center'>
                  <div className='flex size-7 items-center justify-center [&>svg]:size-7'>
                    <IconComponent />
                  </div>
                  <span 
                    className='text-2xl font-semibold'
                    style={{ color: theme?.primaryTextColor }}
                  >
                    {stat.value}
                  </span>
                  <p 
                    className='text-muted-foreground text-lg'
                    style={{ color: theme?.secondaryTextColor }}
                  >
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage01;

