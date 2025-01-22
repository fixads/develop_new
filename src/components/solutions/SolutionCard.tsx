import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SolutionCard = ({ icon: Icon, title, description }: SolutionCardProps) => {
  return (
    <div className="group p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-center mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">
        {title}
      </h3>
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
        </div>
      </div>
      <p className="text-center text-sm sm:text-base text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;