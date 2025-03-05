import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const SuccessStory = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-900">סיפור הצלחה של לקוח</h3>
        <Star className="w-5 h-5 text-yellow-400" />
      </div>

      <div className="relative">
        <blockquote className="text-gray-600 mb-6">
          "העבודה עם FixAds שינתה לחלוטין את הנוכחות הדיגיטלית שלנו. הגישה האסטרטגית 
          והצוות המסור שלהם עשו את כל ההבדל בצמיחה שלנו."
        </blockquote>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">מיכאל כהן</p>
            <p className="text-sm text-gray-500">מנכ"ל, TechGrowth Solutions</p>
          </div>
          <div className="flex items-center text-green-600 text-sm font-medium">
            <span>צמיחה של 300%+</span>
            <TrendingUp className="w-4 h-4 mr-1" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { label: 'עלייה בלידים', value: '300%' },
            { label: 'צמיחה ב-ROI', value: '250%' },
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