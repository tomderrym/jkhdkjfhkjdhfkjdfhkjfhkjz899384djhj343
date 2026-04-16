import {
  BriefcaseBusinessIcon,
  BookIcon,
  MapPinIcon,
  CreditCardIcon,
  StarIcon,
  CircleDollarSignIcon
} from 'lucide-react'

import FAQ from '@/components/shadcn-studio/blocks/faq-component-06/faq-component-06'

const faqItems = [
  {
    icon: BriefcaseBusinessIcon,
    question: 'What services  your agency provide ?',
    answer:
      'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance.'
  },
  {
    icon: BookIcon,
    question: 'How do I book a trip with your agency ?',
    answer:
      'Booking a trip with us is easy! You can book online through our website, call our customer service team, or visit our office in person.'
  },
  {
    icon: MapPinIcon,
    question: 'Can I customize my travel itinerary ?',
    answer:
      'Absolutely! We specialize in creating tailor-made travel experiences. You can customize everything from your flights.'
  },
  {
    icon: CircleDollarSignIcon,
    question: 'What are your payment options ?',
    answer:
      'We offer several payment options for your convenience, including credit/debit card payments, bank transfers, and online payment gateways.'
  },
  {
    icon: StarIcon,
    question: 'Do you offer travel insurance ?',
    answer:
      'Yes, we offer comprehensive travel insurance plans that cover a variety of needs, including trip cancellations, medical emergencies, lost luggage.'
  },
  {
    icon: CreditCardIcon,
    question: 'Can you help with visa applications ?',
    answer:
      'Yes, we provide visa assistance services. Our team can guide you through the application process, help gather documents, and support you until your visa is approved.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
