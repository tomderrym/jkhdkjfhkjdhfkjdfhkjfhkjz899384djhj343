import FAQ from '@/components/shadcn-studio/blocks/faq-component-03/faq-component-03'

const faqItems = [
  {
    question: 'What services does your travel agency provide?',
    answer:
      "We offer a range of travel services, including flight bookings, hotel reservations, tour packages, cruise bookings, travel insurance, visa assistance, and customized itineraries. Whether you're planning a vacation, romantic getaway, or business trip, we've got you covered!"
  },
  {
    question: 'What offerings does your travel agency specialize in?',
    answer:
      "Our travel agency specializes in a variety of services such as booking flights, reserving hotels, creating tour packages, arranging cruises, providing travel insurance, assisting with visa applications, and crafting personalized itineraries. No matter if you're organizing a holiday."
  },
  {
    question: 'What types of trips can I book through your travel agency?',
    answer:
      'You can easily book a variety of exciting trips through our trusted travel agency, including vacations, romantic getaways, business trips, and adventure tours. We also proudly provide flexible options for cruise bookings.'
  },
  {
    question:
      'Are you looking for personalized trip planning, flight and hotel bookings, guided tours, and travel insurance?',
    answer:
      'Are you in need of tailored trip planning, flight and hotel reservations, guided tours, and travel insurance? We provide a variety of travel services to meet your needs!'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
