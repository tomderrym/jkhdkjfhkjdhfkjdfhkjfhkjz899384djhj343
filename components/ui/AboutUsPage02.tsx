import React from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { BaseComponentProps } from '../../types';

type StatCardData = {
  value: string;
  title: string;
  description: string;
};

type ImageCardData = {
  src: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
};

type AboutUsData = {
  leftImage: ImageCardData;
  rightImage: ImageCardData;
  stats: StatCardData[];
};

const AboutUsPage02: React.FC<BaseComponentProps & { aboutUs?: AboutUsData }> = ({ theme, aboutUs }) => {
  const defaultData: AboutUsData = {
    leftImage: {
      src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-1.png',
      alt: 'Left Image',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    rightImage: {
      src: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-2.png',
      alt: 'Right Image',
      buttonText: 'Explore',
      buttonLink: '#',
    },
    stats: [
      { value: '10K+', title: 'Active Users', description: 'Growing daily' },
      { value: '4.9', title: 'Rating', description: 'User satisfaction' },
      { value: '50+', title: 'Countries', description: 'Global reach' },
    ],
  };

  const displayData = aboutUs || defaultData;

  return (
    <section 
      className='bg-muted py-8 sm:py-16 lg:py-24'
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 space-y-4 text-center md:mb-16 lg:mb-24'>
          <h2 
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            style={{ color: theme?.primaryTextColor }}
          >
            The{' '}
            <span className='relative'>
              Adventure of Our
              <span 
                className='absolute bottom-0 left-0 h-px w-full'
                style={{ backgroundColor: theme?.primaryColor }}
              ></span>
            </span>{' '}
            Success
          </h2>
          <p 
            className='text-muted-foreground max-w-6xl text-xl'
            style={{ color: theme?.secondaryTextColor }}
          >
            Our journey showcases the power of collaboration and determination. Together, we have faced challenges,
            celebrated our victories, and woven a story of progress and achievement.
          </p>
          <Button size='lg' className='group rounded-full text-base shadow-sm has-[>svg]:px-6'>
            <a href='#' className='no-underline'>
              Read more
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Left Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl'>
            <img
              src={displayData.leftImage.src}
              alt={displayData.leftImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute top-6 right-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='rounded-full text-base'>
                <a href={displayData.leftImage.buttonLink} className='no-underline'>{displayData.leftImage.buttonText}</a>
              </Button>
              <Button variant='secondary' size='lg' className='size-10 rounded-full shadow-sm'>
                <a href={displayData.leftImage.buttonLink} className='no-underline'>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className='grid gap-6'>
            {displayData.stats.map((stat, index) => (
              <Card key={index} className='shadow-none'>
                <CardContent className='flex h-full flex-col items-center justify-center gap-2.5 text-center'>
                  <h3 
                    className='text-2xl font-semibold md:text-3xl lg:text-4xl'
                    style={{ color: theme?.primaryTextColor }}
                  >
                    {stat.value}
                  </h3>
                  <div 
                    className='text-xl font-medium'
                    style={{ color: theme?.secondaryTextColor }}
                  >
                    {stat.title}
                  </div>
                  <div 
                    className='text-xl'
                    style={{ color: theme?.secondaryTextColor }}
                  >
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Image */}
          <div className='group relative h-142 overflow-hidden rounded-xl md:max-lg:col-span-2'>
            <img
              src={displayData.rightImage.src}
              alt={displayData.rightImage.alt}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute right-6 bottom-6 flex gap-3'>
              <Button variant='secondary' size='lg' className='rounded-full text-base shadow-sm'>
                <a href={displayData.rightImage.buttonLink} className='no-underline'>{displayData.rightImage.buttonText}</a>
              </Button>
              <Button variant='secondary' size='lg' className='size-10 rounded-full'>
                <a href={displayData.rightImage.buttonLink} className='no-underline'>
                  <ArrowUpRightIcon className='transition-all duration-300 group-hover:rotate-45' />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage02;

