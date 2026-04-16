import FAQ from '@/components/shadcn-studio/blocks/faq-component-09/faq-component-09'

const faqItems = [
  {
    question: 'Could you please provide details on the various types of accommodations available?',
    answer:
      'We offer a diverse range of accommodations to suit every preference and budget. Our hotels provide luxury and standard rooms with full amenities, while our motels offer convenient and comfortable stays for travelers. For extended stays or family trips, we have fully furnished vacation rentals with kitchen facilities and living spaces.'
  },
  {
    question: 'What is the process for making a booking?',
    answer:
      "Booking with us is simple and straightforward. Select your desired accommodation type, check availability for your dates, and complete the reservation through our secure online system. You'll receive instant confirmation and detailed information about your stay via email."
  },
  {
    question: 'Could you please provide details regarding your cancellation policy?',
    answer:
      'Our flexible cancellation policy allows free cancellation up to 48 hours before check-in for most bookings. Specific terms may vary by property and season. For detailed information, please review the cancellation terms provided during the booking process.'
  },
  {
    question: 'Is it possible to modify my booking after it has been confirmed?',
    answer:
      'Yes, you can modify your confirmed booking through our online booking management system or by contacting our customer service team. Changes to dates, room types, or guest numbers are subject to availability and may affect the pricing.'
  },
  {
    question: 'Are pets permitted in your accommodations?',
    answer:
      'Select properties are pet-friendly and welcome your furry companions. Additional pet fees and restrictions may apply. Please check the specific property details or contact us directly to confirm pet policies and arrangements.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
