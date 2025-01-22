import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 sm:p-8 lg:p-12">
      {/* Animated background shapes - Reduced size on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">
          Let's Create Something
          <span className="block text-yellow-400 mt-1">Extraordinary Together</span>
        </h1>
        
        <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Join the ranks of businesses that have seen their digital presence transform with FixAds
        </p>

        <div className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-blue-600 bg-white rounded-full text-sm sm:text-base font-medium hover:scale-105 transition-transform duration-300 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
          <span>Average ROI Increase</span>
          <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="ml-1 sm:ml-2 text-xl sm:text-2xl font-bold">300%</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;