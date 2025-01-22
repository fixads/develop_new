import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl font-bold text-primary-main mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;