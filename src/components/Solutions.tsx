import React from 'react';
import { solutions } from '../data/solutions';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Build your business with <span className="text-blue-600">FixAds</span>
          </h2>
          <p className="text-xl text-gray-600">
            Leveraging cutting-edge technology and proven strategies for your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-center mb-4 text-xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-center text-gray-600">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;