import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const SuccessStory = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center space-x-2 mb-4">
        <Star className="w-5 h-5 text-yellow-400" />
        <h3 className="text-lg font-semibold text-gray-900">Client Success Story</h3>
      </div>

      <div className="relative">
        <blockquote className="text-gray-600 mb-6">
          "Working with FixAds transformed our digital presence completely. Their strategic approach 
          and dedicated team made all the difference in our growth."
        </blockquote>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">Michael Chen</p>
            <p className="text-sm text-gray-500">CEO, TechGrowth Solutions</p>
          </div>
          <div className="flex items-center text-green-600 text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+300% Growth</span>
          </div>
        </div>

        {/* Results Grid - Reduced size on mobile */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { label: 'Leads Increase', value: '300%' },
            { label: 'ROI Growth', value: '250%' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;