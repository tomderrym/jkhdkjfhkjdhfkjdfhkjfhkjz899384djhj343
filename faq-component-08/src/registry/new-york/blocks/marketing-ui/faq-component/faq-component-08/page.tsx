import { BriefcaseBusinessIcon, HeadphonesIcon, LockKeyholeIcon, CreditCardIcon } from 'lucide-react'

import FAQ from '@/components/shadcn-studio/blocks/faq-component-08/faq-component-08'

const tabsData = [
  {
    value: 'general',
    label: 'General Questions',
    icon: BriefcaseBusinessIcon,
    faqs: [
      {
        question: 'What types of accommodations do you offer?',
        answer:
          "We offer a variety of accommodations including hotels, motels, and vacation rentals to suit every traveler's needs. Our properties range from luxury resorts to budget-friendly options, ensuring there's something for everyone."
      },
      {
        question: 'How do I make a booking?',
        answer:
          'Making a booking is simple! You can book directly through our website by selecting your desired dates, location, and accommodation type. Enter your details, choose your preferred payment method, and receive instant confirmation. For assistance, our customer service team is available 24/7.'
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'Our standard cancellation policy allows free cancellation up to 48 hours before check-in. For cancellations made within 48 hours of check-in, a one-night charge may apply. Some rates and special offers may have different cancellation terms, which will be clearly displayed during booking.'
      },
      {
        question: 'Can I modify my booking after it has been confirmed?',
        answer:
          'Yes, you can modify your booking after confirmation, subject to availability. Changes can be made through your account or by contacting our customer service team. Modifications made less than 48 hours before check-in may incur additional charges. We recommend reviewing the specific terms of your booking before making changes.'
      },
      {
        question: 'Are pets allowed in your accommodations?',
        answer:
          'Many of our properties are pet-friendly, but policies vary by location. Pet-friendly accommodations may require an additional cleaning fee and have specific rules regarding size and number of pets allowed. Please check the individual property details or contact us for specific pet policies.'
      }
    ]
  },
  {
    value: 'miscellaneous',
    label: 'Miscellaneous',
    icon: LockKeyholeIcon,
    faqs: [
      {
        question: 'Is WiFi available at your properties?',
        answer:
          'Yes, all our properties offer complimentary high-speed WiFi access. Premium high-speed internet is also available for an additional fee at select locations for guests requiring enhanced connectivity.'
      },
      {
        question: 'What are the parking options?',
        answer:
          "Parking options vary by location. Many properties offer free self-parking, while others provide valet services for a fee. Electric vehicle charging stations are available at select locations. Specific parking details are listed on each property's page."
      },
      {
        question: 'Is breakfast included in the stay?',
        answer:
          'Breakfast options vary by property and rate plan. Many of our hotels offer complimentary continental breakfast, while others have paid breakfast options. You can view breakfast details when booking your stay.'
      },
      {
        question: 'What are the check-in and check-out times?',
        answer:
          'Standard check-in time is 3:00 PM and check-out is 11:00 AM local time. Early check-in and late check-out may be available upon request, subject to availability and additional charges.'
      },
      {
        question: 'What amenities are available at your properties?',
        answer:
          "Our properties offer various amenities including fitness centers, swimming pools, restaurants, business centers, and spa services. Specific amenities vary by location and are listed in detail on each property's page."
      }
    ]
  },
  {
    value: 'payment',
    label: 'Payment Information',
    icon: CreditCardIcon,
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, MasterCard, American Express, Discover), digital wallets (Apple Pay, Google Pay), and PayPal. Some locations also accept direct bank transfers for corporate bookings.'
      },
      {
        question: 'In which currency will I be charged?',
        answer:
          'You can view and pay for your booking in multiple currencies. The default is the local currency of the property, but you can choose to pay in your preferred currency. Exchange rates are updated daily.'
      },
      {
        question: 'Is a deposit required for booking?',
        answer:
          'Deposit requirements vary by property and length of stay. Typically, we require a credit card authorization at check-in for incidentals. Some special rates or peak season bookings may require a prepayment.'
      },
      {
        question: 'When will I be charged for my stay?',
        answer:
          "For most bookings, payment is processed at check-out. Some rates require prepayment at the time of booking. Any incidental charges will be processed at check-out. You'll receive a detailed invoice for all charges."
      },
      {
        question: 'How long do refunds take to process?',
        answer:
          "Refunds are typically processed within 24-48 hours of approval. The funds may take 5-10 business days to appear in your account, depending on your bank or credit card issuer's processing time."
      }
    ]
  },
  {
    value: 'support',
    label: 'Support Team',
    icon: HeadphonesIcon,
    faqs: [
      {
        question: 'What are your customer support hours?',
        answer:
          'Our customer support team is available 24/7, 365 days a year. We provide round-the-clock assistance to ensure you receive help whenever you need it, regardless of your time zone.'
      },
      {
        question: 'How can I contact customer support?',
        answer:
          'You can reach our support team through multiple channels: live chat on our website, email at support@example.com, phone at 1-800-SUPPORT, or through our mobile app. We typically respond to emails within 1 hour.'
      },
      {
        question: 'What if I need emergency assistance during my stay?',
        answer:
          'For emergencies during your stay, we provide a dedicated 24/7 emergency hotline. The number is provided in your booking confirmation and is also available in your room. Our local staff can assist with immediate response and coordination with emergency services.'
      },
      {
        question: 'How can I provide feedback about my experience?',
        answer:
          'We welcome your feedback! You can leave a review directly on our website after your stay, respond to our follow-up email, or contact our customer service team. Your feedback helps us improve our services for future guests.'
      },
      {
        question: 'Do you offer support in multiple languages?',
        answer:
          'Yes, our support team is multilingual and can assist you in English, Spanish, French, German, Chinese, and Japanese. Just let us know your preferred language when contacting us.'
      }
    ]
  }
]

const FAQPage = () => {
  return <FAQ tabsData={tabsData} />
}

export default FAQPage
