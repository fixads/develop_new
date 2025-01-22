import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-red-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-[90vh] py-8 md:py-12">
          <div className="relative z-20 text-white text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Digital Agency for
              <span className="block text-yellow-400">
                Performance Marketing
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 mt-4">
              We implement marketing strategies with a clear purpose: to achieve your goals and drive meaningful results.
            </p>
          </div>
          
          <div className="relative mt-4 lg:mt-0">
            <div className="relative z-10 max-w-lg mx-auto">
              <img
                src="/laptop-social.png"
                alt="Social Media Marketing"
                className="w-full h-auto"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;