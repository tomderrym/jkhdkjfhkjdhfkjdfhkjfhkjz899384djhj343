import React from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Avatar, AvatarFallback } from './avatar';
import { BaseComponentProps } from '../../types';

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const PricingComponent02: React.FC<BaseComponentProps & { features?: Feature[][] }> = ({ theme, features = [] }) => {
  // Default features if none provided
  const defaultFeatures: Feature[][] = [
    [
      { icon: () => <span>✓</span>, title: 'Feature 1', description: 'Description 1' },
      { icon: () => <span>✓</span>, title: 'Feature 2', description: 'Description 2' },
    ],
    [
      { icon: () => <span>✓</span>, title: 'Feature 3', description: 'Description 3' },
      { icon: () => <span>✓</span>, title: 'Feature 4', description: 'Description 4' },
    ],
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <div 
      className='bg-muted py-8 sm:py-16 lg:py-24'
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 flex flex-col gap-4 sm:mb-16 lg:mb-24'>
          <h2 
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            style={{ color: theme?.primaryTextColor }}
          >
            Make the best investment
          </h2>
          <p 
            className='text-muted-foreground w-2/3 text-xl'
            style={{ color: theme?.secondaryTextColor }}
          >
            Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a
            seamless fit!
          </p>
        </div>

        <Card className='py-0'>
          <CardContent className='grid grid-cols-1 justify-between divide-y px-0 lg:grid-cols-3 lg:divide-x'>
            <div className='flex gap-10 p-6 max-md:flex-col lg:col-span-2'>
              {displayFeatures.map((column, columnIndex) => (
                <div key={columnIndex} className='space-y-6'>
                  {column.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className='flex items-center gap-4'>
                        <Avatar className='bg-primary/10 size-12 rounded-md border'>
                          <AvatarFallback className='rounded-md'>
                            <IconComponent />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 
                            className='text-lg font-medium'
                            style={{ color: theme?.primaryTextColor }}
                          >
                            {feature.title}
                          </h3>
                          <p 
                            className='text-muted-foreground'
                            style={{ color: theme?.secondaryTextColor }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className='flex flex-col items-center justify-center gap-3 p-6 text-center'>
              <h3 
                className='text-5xl font-bold'
                style={{ color: theme?.primaryColor }}
              >
                $99
              </h3>
              <span 
                className='text-sm font-medium'
                style={{ color: theme?.secondaryTextColor }}
              >
                Lifetime Account
              </span>
              <Button size='lg'>Subscribe Now</Button>
              <span 
                className='text-muted-foreground text-sm'
                style={{ color: theme?.secondaryTextColor }}
              >
                30 Days Money back Guarantee
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingComponent02;

