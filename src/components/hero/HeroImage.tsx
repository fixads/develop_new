import React from 'react';

const HeroImage = () => {
  return (
    <div className="relative mt-4 lg:mt-0">
      <div className="relative z-10 max-w-lg mx-auto">
        <img
          src="/laptop-social.png"
          alt="Social Media Marketing"
          className="w-full h-auto drop-shadow-2xl"
          style={{
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
          }}
        />
      </div>
    </div>
  );
};