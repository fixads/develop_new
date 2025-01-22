import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <p className="text-sm text-gray-500">
      © {currentYear} <a href="/" className="hover:underline">FixAds™</a>. All Rights Reserved. <span className="block sm:inline">Berlin, Germany</span>
    </p>
  );
};

export default Copyright;