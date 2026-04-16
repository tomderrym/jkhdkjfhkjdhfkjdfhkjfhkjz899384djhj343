import React, { useState } from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Switch } from './switch';
import { Separator } from './separator';
import { BaseComponentProps } from '../../types';

type PricingPlan = {
  id: string;
  title: string;
  description: string;
  monthly: number;
  annual: number;
};

const PricingComponent01: React.FC<BaseComponentProps & { pricingData?: PricingPlan[] }> = ({ theme, pricingData = [] }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const defaultPricingData: PricingPlan[] = [
    { id: '1', title: 'Starter', description: 'Perfect for individuals', monthly: 9, annual: 90 },
    { id: '2', title: 'Professional', description: 'Best for small teams', monthly: 29, annual: 290 },
    { id: '3', title: 'Enterprise', description: 'For large organizations', monthly: 99, annual: 990 },
  ];

  const displayData = pricingData.length > 0 ? pricingData : defaultPricingData;

  return (
    <section 
      className='bg-muted py-8 sm:py-16 lg:py-24'
      style={{ backgroundColor: theme?.backgroundColor }}
    >
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-10 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <h2 
              className='text-2xl font-semibold sm:text-3xl lg:text-4xl'
              style={{ color: theme?.primaryTextColor }}
            >
              Select the Best Plan for You!
            </h2>
            <p 
              className='text-muted-foreground text-xl'
              style={{ color: theme?.secondaryTextColor }}
            >
              Discover Our Flexible Plans, Compare Features, and Choose <br />
              the Ideal Option for Your Needs.
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <span 
              className='font-medium'
              style={{ color: theme?.secondaryTextColor }}
            >
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span 
              className='font-medium'
              style={{ color: theme?.secondaryTextColor }}
            >
              Annually
            </span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-6 max-lg:flex-col'>
          {displayData.map(plan => {
            const price = isAnnual ? plan.annual : plan.monthly;
            const period = isAnnual ? 'year' : 'month';
            const savings = isAnnual ? plan.monthly * 12 - plan.annual : null;

            return (
              <Card key={plan.id} className='w-full shadow-none sm:w-lg'>
                <CardContent className='flex justify-between gap-4'>
                  <div className='flex flex-col justify-center gap-5'>
                    <div className='flex flex-col gap-2'>
                      <h3 
                        className='text-3xl font-semibold'
                        style={{ color: theme?.primaryTextColor }}
                      >
                        {plan.title}
                      </h3>
                      <p 
                        className='text-muted-foreground text-base'
                        style={{ color: theme?.secondaryTextColor }}
                      >
                        {plan.description}
                      </p>
                    </div>
                    <div className='flex flex-col items-end sm:hidden'>
                      <div className='flex items-end'>
                        <span 
                          className='text-5xl font-bold'
                          style={{ color: theme?.primaryColor }}
                        >
                          ${price}
                        </span>
                        <span 
                          className='ml-1 text-lg'
                          style={{ color: theme?.secondaryTextColor }}
                        >
                          /{period}
                        </span>
                      </div>
                      {savings && (
                        <span className='mt-1 text-sm font-medium text-green-600'>
                          Save ${savings.toLocaleString()}/year
                        </span>
                      )}
                    </div>
                    <Button className='w-fit'>Enterprise</Button>
                  </div>

                  <Separator orientation='vertical' className='!h-[132px] max-sm:hidden' />

                  <div className='flex items-end justify-end max-sm:hidden'>
                    <div className='flex flex-col items-end'>
                      <div className='flex items-end'>
                        <span 
                          className='text-5xl font-bold'
                          style={{ color: theme?.primaryColor }}
                        >
                          ${price}
                        </span>
                        <span 
                          className='ml-1 text-lg'
                          style={{ color: theme?.secondaryTextColor }}
                        >
                          /{period}
                        </span>
                      </div>
                      {savings && (
                        <span className='mt-1 text-sm font-medium text-green-600'>
                          Save ${savings.toLocaleString()}/year
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent01;

