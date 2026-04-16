import FAQ from '@/components/shadcn-studio/blocks/faq-component-11/faq-component-11'

const faqItems = [
  {
    question: 'Do you charge for each upgrade?',
    answer:
      'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie'
  },
  {
    question: 'Do I need to purchase a license for each website?',
    answer:
      'Yes, you need to purchase a separate license for each website where you plan to use our components. This ensures proper licensing compliance and helps us maintain and improve our products. However, we offer bundle deals for multiple licenses at a discounted rate.'
  },
  {
    question: 'What is regular license?',
    answer:
      'A regular license grants you permission to use our components in a single end product (website or application) that users can access for free. This includes personal websites, business websites, and free web applications. The license is perpetual and includes 6 months of support and updates.'
  },
  {
    question: 'What is extended license?',
    answer:
      'An extended license provides additional rights beyond the regular license. It allows you to use our components in products that require users to pay before accessing them (SaaS, premium websites, etc.). It also includes priority support, lifetime updates, and the ability to use components in unlimited projects within a single organization.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
