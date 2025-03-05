import React from 'react';
import { TrendingUp } from 'lucide-react';

const GrowthSection = () => {
  return (
    <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
        <h3 className="text-xl sm:text-2xl text-gray-900 font-semibold text-center">
          Growing businesses since 2020
        </h3>
      </div>
    </div>
  );
};

export default GrowthSection;