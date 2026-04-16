import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Separator } from './separator';
import { BaseComponentProps } from '../../types';

const FooterComponent01: React.FC<BaseComponentProps> = ({ theme }) => {
  return (
    <footer style={{ backgroundColor: theme?.backgroundColor }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='#'>
          <div className='flex items-center gap-3'>
            <span 
              className='gap-3 text-xl font-bold'
              style={{ color: theme?.primaryTextColor }}
            >
              Logo
            </span>
          </div>
        </a>

        <div 
          className='flex items-center gap-5 whitespace-nowrap'
          style={{ color: theme?.secondaryTextColor }}
        >
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Works</a>
          <a href='#'>Career</a>
        </div>

        <div className='flex items-center gap-4'>
          <a href='#'>
            <FacebookIcon className='size-5' />
          </a>
          <a href='#'>
            <InstagramIcon className='size-5' />
          </a>
          <a href='#'>
            <TwitterIcon className='size-5' />
          </a>
          <a href='#'>
            <YoutubeIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p 
          className='text-center font-medium text-balance'
          style={{ color: theme?.secondaryTextColor }}
        >
          {`©${new Date().getFullYear()}`} <a href='#'>Shadcn/studio</a>, Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent01;

