import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Features = {
  value: string
  label: string
}

const SocialProof = ({ features }: { features: Features[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-x-20 gap-y-6 lg:grid-cols-2'>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <Badge variant='outline' className='rounded-full text-sm font-normal'>
                Social Proof
              </Badge>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Real value, real success!</h2>
              <p className='text-muted-foreground text-xl'>
                In construction, success stems from collaboration and shared commitment. By combining diverse skills,
                teams create innovative solutions that achieve project goals and foster lasting relationships.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {features.map((feature, index) => (
                <Card key={index} className='bg-muted rounded-md shadow-none'>
                  <CardHeader className='gap-6 text-center'>
                    <CardTitle className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{feature.value}</CardTitle>
                    <CardDescription className='text-base'>{feature.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Button className='rounded-full text-base shadow-sm' size='lg'>
              Learn More
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className='my-auto h-fit'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/social-proof/image-3.png'
              alt='Social Widget'
              className='w-full rounded-md'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
