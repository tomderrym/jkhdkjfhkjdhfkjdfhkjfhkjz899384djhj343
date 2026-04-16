import FAQ from '@/components/shadcn-studio/blocks/faq-component-07/faq-component-07'

const faqItems = [
  {
    question: 'What products do you offer?',
    answer:
      "Placing an order is simple! Browse our products, add items to your cart, and proceed to checkout. Select your shipping method, enter your delivery address, choose your preferred payment method, and confirm your order. You'll receive an order confirmation email with tracking details."
  },
  {
    question: 'How do I place an order?',
    answer:
      "We offer a wide range of products including [categories like clothing, electronics, home goods, beauty products, etc. Browse our collections to find everything you need, whether it's the latest fashion trends, top-notch gadgets, or everyday essentials."
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secure and encrypted to protect your financial information.'
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to over 100 countries. Shipping costs and delivery times vary by location. International orders may be subject to customs duties and taxes, which are the responsibility of the customer. Check our shipping calculator for rates to your country.'
  },
  {
    question: 'How can I track my order?',
    answer:
      "You can easily track your order by logging into your account or using the tracking number provided in your shipping confirmation email. Our tracking system provides real-time updates on your package's location and estimated delivery date."
  },
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows returns within 30 days of delivery.'
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement.'
  },
  {
    question: 'Do you offer discounts or promotions?',
    answer: 'Yes! We regularly offer seasonal sales and promotions.'
  },
  {
    question: 'How do I create an account?',
    answer: "Click the 'Sign Up' button and enter your details."
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
