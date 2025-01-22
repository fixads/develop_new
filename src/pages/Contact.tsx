import React from 'react';
import SEO from '../components/layout/SEO';
import ContactHero from '../components/contact/ContactHero';
import LeadForm from '../components/contact/LeadForm';
import SuccessStory from '../components/contact/SuccessStory';
import StatsGrid from '../components/contact/StatsGrid';
import { CheckCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with FixAds for innovative digital marketing solutions and business growth strategies."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-12">
            <ContactHero />
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Start Your Success Story
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Join hundreds of businesses that have transformed their digital presence with FixAds. 
                Get your personalized strategy today!
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm text-green-600 font-medium">
                  Quick Response Guaranteed
                </span>
              </div>

              <LeadForm />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {['GDPR Compliant', 'Secure Data', '24/7 Support', 'No Obligations'].map((item, index) => (
                    <div key={index} className="text-sm text-gray-500">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mb-12">
            <SuccessStory />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <StatsGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;