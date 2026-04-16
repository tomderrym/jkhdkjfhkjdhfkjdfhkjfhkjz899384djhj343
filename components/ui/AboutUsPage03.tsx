import React from 'react';
// // // import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-03/about-us-page-03'
// Placeholder - original component not available
const AboutUs = () => <div>Component placeholder</div>;
// Placeholder - original component not available
const aboutUsData = {
  contentTitle: 'We help in creating Educational Resources',
  contentDescription:
    'We understand the significance of quality educational materials in the learning process and take our role in supporting educators seriously. We are committed to providing our users with the best possible resources and support.',
  tabs: [
    {
      name: 'Mission',
      value: 'mission',
      content: (
        <>
          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              Our mission is to empower educators and institutions by providing innovative, high-quality educational
              resources that enhance learning outcomes. We strive to make education more accessible, engaging, and
              effective through our comprehensive solutions and unwavering commitment to excellence in educational
              content development.
            </p>
            <p className='text-muted-foreground'>
              Through collaboration with educators and continuous improvement of our methodologies, we aim to transform
              the educational landscape and contribute to the success of learners worldwide.
            </p>
          </div>
        </>
      )
    },
    {
      name: 'Vision',
      value: 'vision',
      content: (
        <>
          <div className='space-y-4'>
            <p className='text-muted-foreground'>
              Educational resources are essential for effective teaching, but creating them can be challenging and
              time-consuming. Educators often spend countless hours developing lesson plans, activities, and
              assessments. This process can be overwhelming and divert a teacher&apos;s attention from engaging with
              their students.
            </p>
            <p className='text-muted-foreground'>
              Our team of educational experts is always available to answer questions, offer guidance, and assist our
              users in enhancing their teaching methods.
            </p>
          </div>
        </>
      )
    },
    {
      name: 'Our Value',
      value: 'values',
      content: (
        <>
          <div className='space-y-4'>
            <p className='text-muted-foreground'>Our core values guide everything we do:</p>
            <ul className='text-muted-foreground list-inside list-disc space-y-2'>
              <li>
                <span className='text-foreground font-semibold'>Excellence:</span> We maintain the highest standards in
                educational content development
              </li>
              <li>
                <span className='text-foreground font-semibold'>Innovation:</span> We continuously evolve our approaches
                to meet modern educational needs
              </li>
              <li>
                <span className='text-foreground font-semibold'>Collaboration:</span> We work closely with educators to
                ensure our resources meet real classroom needs
              </li>
              <li>
                <span className='text-foreground font-semibold'>Accessibility:</span> We believe in making quality
                education available to all
              </li>
            </ul>
          </div>
        </>
      )
    }
  ]
}

const AboutUsPage = () => {
  return <AboutUs aboutUsData={aboutUsData} />
}

export default AboutUsPage
