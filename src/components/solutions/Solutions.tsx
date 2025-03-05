import React from 'react';
import { solutions } from '../../data/solutions';
import SolutionCard from './SolutionCard';

const Solutions = () => {
  return (
    <section id="solutions" className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Build your business with <span className="text-blue-600">FixAds</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Leveraging cutting-edge technology and proven strategies for your success
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;