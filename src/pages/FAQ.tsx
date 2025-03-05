import React from 'react';
import FAQItem from '../components/faq/FAQItem';
import LeadForm from '../components/contact/LeadForm';
import { faqs } from '../data/faqs';

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

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h2>
            <p className="text-gray-600">
              Get in touch with us and we'll help you find the answers you need.
            </p>
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default FAQ;