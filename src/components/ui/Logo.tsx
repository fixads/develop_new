import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/logos/my_logo/Fixads_logo.png" 
        alt="FixAds Logo" 
        className="w-8 h-8 object-contain"
      />
      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
        FixAds
      </span>
    </div>
  );
};

export default Logo;