import React from 'react';
import { Target, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    icon: <Target className="w-6 h-6" />,
    label: 'Successful Projects',
    value: '50+',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: 'Client Growth Rate',
    value: '150%',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: 'Response Time',
    value: '< 24h',
  }
];

const StatsGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="relative group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in transform hover:-translate-y-1"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Gradient background that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white/90 transition-colors">
                {stat.icon}
              </div>
              <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
            </div>
            <p className="text-gray-600 font-medium group-hover:text-blue-600 transition-colors">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;