import React from 'react';

const HeroContent = () => {
  return (
    <div className="relative z-20 text-white space-y-4 lg:space-y-6 text-center lg:text-left">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        Digital Agency for
        <span className="block text-yellow-400">
          Performance Marketing
        </span>
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
        We implement marketing strategies with a clear purpose: to achieve your goals and drive meaningful results.
      </p>
    </div>
  );
};