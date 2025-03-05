import React from 'react';

interface CookieOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onToggle?: () => void;
}

const CookieOption = ({ icon, title, description, enabled, locked, onToggle }: CookieOptionProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enabled}
                onChange={onToggle}
                disabled={locked}
                className="sr-only peer"
              />
              <div className={`w-11 h-6 rounded-full peer ${
                locked ? 'bg-blue-600' : 'bg-gray-200 peer-checked:bg-blue-600'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default CookieOption;