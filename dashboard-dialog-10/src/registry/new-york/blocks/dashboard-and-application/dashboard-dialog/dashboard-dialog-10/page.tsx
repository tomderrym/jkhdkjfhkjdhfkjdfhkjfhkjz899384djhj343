import { Button } from '@/components/ui/button'
import PaymentMethodDialog from '@/components/shadcn-studio/blocks/dashboard-dialog-10/dialog-payment-method'

const paymentMethods = [
  {
    name: 'Visa',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-8.png',
    value: 'visa',
    cardType: 'credit card'
  },
  {
    name: 'Mastercard',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-9.png',
    value: 'mastercard',
    cardType: 'credit card'
  },
  {
    name: 'American Express',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-10.png',
    value: 'american-express',
    cardType: 'credit card'
  },
  {
    name: 'JCB',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-11.png',
    value: 'jcb',
    cardType: 'debit card'
  },
  {
    name: 'Diners Club',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-12.png',
    value: 'diners-club',
    cardType: 'credit card'
  }
]

const DialogPage = () => {
  return (
    <div className='flex h-dvh items-start justify-center p-8'>
      <PaymentMethodDialog
        defaultOpen
        paymentMethods={paymentMethods}
        trigger={
          <Button variant='outline'>
            <span>Pay</span>
          </Button>
        }
      />
    </div>
  )
}

export default DialogPage
