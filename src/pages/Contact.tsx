import React from 'react';
import SuccessStory from '../components/contact/SuccessStory';
import LeadForm from '../components/contact/LeadForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-text-primary mb-8">
          Let's Grow Your Business Together
        </h1>
        
        <SuccessStory />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-text-primary mb-8">
            Get in Touch
          </h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;