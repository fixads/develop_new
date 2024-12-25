import React from 'react';
import FAQItem from '../components/faq/FAQItem';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of digital solutions, including website design and development, branding, social media management, digital marketing, SEO, and content creation."
  },
  {
    question: "How do you determine project pricing?",
    answer: "We price our projects based on the scope of work, complexity, required resources, and estimated timeframe. After discussing your goals, we'll provide a detailed quote."
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer: "Absolutely. We're happy to collaborate closely with your team to ensure our work aligns with your established brand identity."
  },
  {
    question: "How long does it take to complete a website design project?",
    answer: "Timelines vary depending on project size and complexity. On average, a standard website takes 4–8 weeks from initial planning to launch."
  },
  {
    question: "Will I be involved in the process?",
    answer: "Yes. We believe in transparency and collaboration. We involve you in each stage, sharing updates, gathering feedback, and making adjustments as needed."
  },
  {
    question: "Do you offer ongoing website maintenance and support?",
    answer: "Yes. We offer ongoing maintenance packages, including software updates, content changes, and technical support to ensure your site runs smoothly."
  },
  {
    question: "Can you help with search engine optimization (SEO)?",
    answer: "Yes. We have SEO specialists who can optimize your website's structure, content, and backlinks to improve search rankings and drive organic traffic."
  },
  {
    question: "Do you work with all types of businesses?",
    answer: "We've worked with a variety of industries and business sizes. We tailor our approach to meet each client's unique goals and audience."
  },
  {
    question: "How do you handle branding or logo design projects?",
    answer: "Our branding process involves understanding your mission, values, and target audience to create designs that reflect your identity and resonate with customers."
  },
  {
    question: "What is your content creation process?",
    answer: "We start by researching your audience, industry, and competitors, then develop a content strategy. Our writers and designers create compelling, on-brand materials to engage your audience."
  },
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer: "We track key performance indicators (KPIs) like website traffic, conversion rates, lead quality, social engagement, and ROI to measure and refine our strategies."
  },
  {
    question: "Can you help manage our social media accounts?",
    answer: "Yes. We can create content calendars, design graphics, schedule posts, engage with followers, and run targeted advertising campaigns."
  },
  {
    question: "What platforms do you specialize in for website development?",
    answer: "We're experienced in popular platforms like WordPress, Shopify, and custom builds using modern frameworks. We'll recommend the best solution for your needs."
  },
  {
    question: "Do you offer hosting services?",
    answer: "We can help you set up secure, reliable hosting through trusted third-party providers. We'll also handle server configuration and ongoing maintenance if needed."
  },
  {
    question: "What happens if I need changes after the project is completed?",
    answer: "We offer post-launch support. Minor changes are often included in your package, and we also offer additional update and maintenance plans."
  },
  {
    question: "How often will I receive updates on my project's progress?",
    answer: "We typically provide weekly or bi-weekly updates. We'll also schedule milestone reviews to ensure the project stays on track."
  },
  {
    question: "Can you integrate third-party tools or platforms into my website?",
    answer: "Yes. We frequently integrate tools like CRM systems, email marketing platforms, analytics tools, and payment gateways to streamline your operations."
  },
  {
    question: "How do you ensure my website is mobile-friendly?",
    answer: "We use responsive design techniques, testing your site across various devices and screen sizes to ensure a seamless mobile user experience."
  },
  {
    question: "Do you provide training on how to use the new website or tools?",
    answer: "Yes. We offer training sessions and documentation so you can manage content updates, product listings, and other essentials on your own."
  },
  {
    question: "Can you help with local SEO or region-specific marketing?",
    answer: "Absolutely. We research local keywords, optimize Google Business profiles, and create content targeting your specific geographic market."
  },
  {
    question: "What is your payment schedule?",
    answer: "We typically require an initial deposit to start, with subsequent payments tied to project milestones. The final balance is due upon project completion."
  },
  {
    question: "How do you handle intellectual property rights for deliverables?",
    answer: "Once the final invoice is paid, all agreed-upon deliverables, including website files, designs, and content, become your property."
  },
  {
    question: "Will my website be secure from hackers and malware?",
    answer: "We implement best practices like using secure hosting, SSL certificates, firewalls, and regular updates to minimize security risks."
  },
  {
    question: "Can you improve my existing website instead of building a new one?",
    answer: "Yes. We often perform website audits, implement UX improvements, update content, and optimize page speeds to enhance your current site."
  },
  {
    question: "How do I get started?",
    answer: "Contact us through our online form or by email. We'll schedule a consultation to discuss your needs, goals, and potential solutions before moving forward."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;