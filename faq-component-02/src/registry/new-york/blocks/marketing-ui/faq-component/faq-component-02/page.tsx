import { BriefcaseIcon, BookIcon, CreditCardIcon, DollarSignIcon, StarIcon, MapPinIcon } from 'lucide-react'

import FAQ from '@/components/shadcn-studio/blocks/faq-component-02/faq-component-02'

const faqItems = [
  {
    icon: BriefcaseIcon,
    title: 'What services does your agency provide?',
    subtitle: 'Create detailed itineraries based on your preferences',
    description:
      "We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance, and customized itineraries. Whether you're planning a vacation, romantic getaway, or business trip, we've got you covered!"
  },
  {
    icon: DollarSignIcon,
    title: 'What are your payment options ?',
    subtitle: 'Most online travel platforms accept major credit',
    description:
      'We offer several payment options for your convenience, including credit/debit card payments, bank transfers, and online payment gateways. We also offer flexible payment plans for select travel packages.'
  },
  {
    icon: BookIcon,
    title: 'How do I book a trip with your agency ?',
    subtitle: 'Destinations based on your interests',
    description:
      'Booking a trip with us is easy! You can book online through our website, call our customer service team, or visit our office in person. Simply choose your desired destination, select your preferred travel dates, and let us take care of the rest.'
  },
  {
    icon: StarIcon,
    title: 'Do you offer travel insurance ?',
    subtitle: 'Different types of travel insurance coverage',
    description:
      'Yes, we offer comprehensive travel insurance plans that cover a variety of needs, including trip cancellations, medical emergencies, lost luggage, and more. We highly recommend purchasing travel insurance for peace of mind during your trip.'
  },
  {
    icon: MapPinIcon,
    title: 'Can I customize my travel itinerary ?',
    subtitle: 'Fully customize your travel itinerary with help',
    description:
      "Absolutely! We specialize in creating tailor-made travel experiences. You can customize everything from your flights and accommodations to tours and activities. Just let us know your preferences, and we'll design an itinerary that suits your needs."
  },
  {
    icon: CreditCardIcon,
    title: 'Can you help with visa applications ?',
    subtitle: 'Visa for your destination based on your nationality purpose',
    description:
      'Yes, we provide visa assistance services. Our team can guide you through the application process, help gather documents, and support you until your visa is approved. We also update you on changes in visa requirements or processing times to keep you informed.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
