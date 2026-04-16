import BrowserStatesCard from '@/components/shadcn-studio/blocks/widget-browser-states'

const browserData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-chrome.png',
    browser: 'Google Chrome',
    percentage: 54.6
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/mozilla-firefox.png',
    browser: 'Mozilla Firefox',
    percentage: 37.5
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-edge.png',
    browser: 'Microsoft Edge',
    percentage: 22.8
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/opera.png',
    browser: 'Opera',
    percentage: 10
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/safari.png',
    browser: 'Safari',
    percentage: 6.7
  }
]

const WidgetCardPreview = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16'>
      <div className='flex justify-center'>
        <BrowserStatesCard
          title='Browser states'
          subTitle='Counter April 2022'
          browserData={browserData}
          className='w-full max-w-100'
        />
      </div>
    </div>
  )
}

export default WidgetCardPreview
