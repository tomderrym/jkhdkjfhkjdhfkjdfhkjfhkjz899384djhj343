import FAQ from '@/components/shadcn-studio/blocks/faq-component-04/faq-component-04'

const tabsData = [
  {
    name: 'General',
    value: 'general',
    faqs: [
      {
        id: 'what-is-larasaas',
        question: 'What is LaraSaas? Why do I need a LaraSaas Boilerplate?',
        answer:
          'LaraSaas is a Laravel boilerplate specifically designed to help you launch your SaaS application quickly and efficiently. It provides pre-built features for user management, subscriptions, payments, and more, saving you significant development time and effort.'
      },
      {
        id: 'is-demo-available',
        question: 'Is there a demo available?',
        answer:
          'Yes, we offer a comprehensive demo that showcases all the features and capabilities of our platform. You can access it through our website and explore the interface firsthand.'
      },
      {
        id: 'payment-providers',
        question: 'Which payment providers are supported?',
        answer:
          'We support major payment providers including Stripe, PayPal, and Square. Our platform is designed to be flexible and can be integrated with additional payment gateways based on your needs.'
      },
      {
        id: 'codebase-distribution',
        question: 'How is the codebase distributed?',
        answer:
          "The codebase is distributed through a private repository system. Upon purchase, you'll receive access to the full source code and all future updates through our version control system."
      },
      {
        id: 'integration-question',
        question: 'I want to integrate LaraSaas into my existing project. Should I buy it?',
        answer:
          "While it's possible to integrate LaraSaas into existing projects, it's primarily designed as a standalone boilerplate. We recommend starting fresh with LaraSaas for the best experience and to fully utilize all features."
      }
    ]
  },
  {
    name: 'Pricing',
    value: 'pricing',
    faqs: [
      {
        id: 'pricing-plans',
        question: 'What pricing plans are available?',
        answer:
          'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. Each plan is designed to cater to different business needs and scales with your growth.'
      },
      {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, PayPal, and bank transfers. Enterprise plans also support purchase orders and custom billing arrangements.'
      },
      {
        id: 'billing-cycle',
        question: 'How does the billing cycle work?',
        answer:
          'Billing cycles are monthly or annually, with significant discounts for annual subscriptions. The cycle starts on your subscription date.'
      },
      {
        id: 'refund-policy',
        question: 'What is your refund policy?',
        answer:
          "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact support for a full refund within this period."
      },
      {
        id: 'plan-changes',
        question: 'Can I change my plan later?',
        answer:
          'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.'
      }
    ]
  },
  {
    name: 'Dashboard',
    value: 'dashboard',
    faqs: [
      {
        id: 'dashboard-features',
        question: 'What features are available in the dashboard?',
        answer:
          'Our dashboard includes real-time analytics, user management, subscription tracking, and customizable reports.'
      },
      {
        id: 'dashboard-customization',
        question: 'Can I customize the dashboard?',
        answer:
          "Yes, you can arrange widgets, configure notifications, and brand the interface with your company's colors and logo."
      },
      {
        id: 'dashboard-access',
        question: 'How do I manage user access?',
        answer:
          "Admins can manage user roles, permissions, and access levels through the dashboard's user management section."
      },
      {
        id: 'dashboard-reports',
        question: 'What types of reports are available?',
        answer:
          'We offer usage analytics, user activity, performance metrics, and custom report generation capabilities.'
      },
      {
        id: 'dashboard-backup',
        question: 'How is my dashboard data backed up?',
        answer:
          'Dashboard data is automatically backed up daily with 30-day retention. Enterprise plans include custom backup schedules.'
      }
    ]
  },
  {
    name: 'API',
    value: 'api',
    faqs: [
      {
        id: 'api-documentation',
        question: 'Where can I find the API documentation?',
        answer:
          'Our comprehensive API documentation is available at our developer portal with detailed endpoints and examples.'
      },
      {
        id: 'api-limits',
        question: 'Are there any API rate limits?',
        answer:
          'Yes, limits vary by plan. Basic plans include 1000 requests per hour, with higher limits for premium plans.'
      },
      {
        id: 'api-authentication',
        question: 'How does API authentication work?',
        answer:
          'We use API keys and OAuth 2.0 for authentication. Secure your credentials and never share them publicly.'
      },
      {
        id: 'api-versions',
        question: 'Which API versions are supported?',
        answer:
          'We maintain the current version and one previous version. Legacy versions are supported for 6 months after deprecation.'
      },
      {
        id: 'api-support',
        question: 'How can I get API support?',
        answer: 'We provide developer support through our dedicated API support channel and developer community forum.'
      }
    ]
  },
  {
    name: 'License',
    value: 'license',
    faqs: [
      {
        id: 'license-types',
        question: 'What types of licenses are available?',
        answer: 'We offer Single-domain, Multi-domain, and Enterprise licenses with one year of updates and support.'
      },
      {
        id: 'license-transfer',
        question: 'Can I transfer my license?',
        answer: 'License transfers are available on a case-by-case basis. Contact support for transfer requests.'
      },
      {
        id: 'license-renewal',
        question: 'How do license renewals work?',
        answer: 'Licenses can be renewed annually with a discount. Auto-renewal is available for convenience.'
      },
      {
        id: 'license-usage',
        question: 'What are the usage restrictions?',
        answer:
          'Usage restrictions vary by license type. Single-domain is for one production site, Multi-domain for multiple sites.'
      },
      {
        id: 'license-support',
        question: 'What support is included?',
        answer: 'All licenses include email support and access to documentation. Enterprise includes priority support.'
      }
    ]
  }
]

const FAQPage = () => {
  return <FAQ tabs={tabsData} />
}

export default FAQPage
