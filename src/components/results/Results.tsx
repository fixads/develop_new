import React, { useState } from 'react';
import StatsCard from './StatsCard';
import ClientShowcase from './ClientShowcase';
import GooglePartnerModal from '../modals/GooglePartnerModal';
import GrowthSection from './GrowthSection';

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="results" className="pb-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            We deliver results
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              With our expert team and partnerships, including{' '}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Google Ads
              </button>
              , we've driven a{' '}
              <span className="font-bold text-gray-900">30% average ROI increase</span>{' '}
              for clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatsCard value="30%" label="Average ROI Increase" />
            <StatsCard value="90%" label="Customer Satisfaction" />
            <StatsCard value="3 Months" label="See Results" />
          </div>

          <GrowthSection />
          <ClientShowcase />
        </div>
      </div>

      <GooglePartnerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Results;