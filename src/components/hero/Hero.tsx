import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-red-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-[90vh] py-8 md:py-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};