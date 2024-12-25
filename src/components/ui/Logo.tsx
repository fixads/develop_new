import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/logos/my_logo/Fixads_logo.png" 
        alt="Fix Ads Logo" 
        className="w-8 h-8 object-contain"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-main to-secondary-main bg-clip-text text-transparent">
        Fix Ads
      </span>
    </div>
  );
};

export default Logo;