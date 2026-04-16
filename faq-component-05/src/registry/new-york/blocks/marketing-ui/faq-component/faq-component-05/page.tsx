import FAQ from '@/components/shadcn-studio/blocks/faq-component-05/faq-component-05'

const faqItems = [
  {
    question: 'What services does your travel agency provide?',
    answer:
      'We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance.'
  },
  {
    question: 'What payment methods do you guys accept?',
    answer:
      'We offer several payment options for your convenience, including credit/debit card payments, bank transfers.'
  },
  {
    question: 'Could you please guide me on how to book a trip with your agency?',
    answer:
      'Booking a trip with us is easy! You can book through our website, call our customer service team, or visit our office in person.'
  },
  {
    question: 'Do you provide travel insurance as part of your services?',
    answer:
      'Yes, we offer comprehensive travel insurance plans that cover a variety of needs, including trip cancellations, medical emergencies, lost luggage, and more.'
  },
  {
    question: 'Is it possible to customize my travel itinerary with your agency?',
    answer:
      'Absolutely! We specialize in creating tailor-made travel experiences. You can customize everything from your flights and accommodations to tours and activities.'
  },
  {
    question: 'Can you help me with the visa application process?',
    answer:
      'Yes, we provide visa assistance services. Our team can guide you through the application process, help gather documents, and support you until your visa is approved.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
