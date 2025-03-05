import React from 'react';

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </>
  );
};

export default HeroBackground;