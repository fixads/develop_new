import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const orbsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate orbs
      const orbs = orbsRef.current?.children;
      if (orbs) {
        gsap.to([...orbs], {
          scale: 1.2,
          opacity: 0.6,
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: {
            amount: 2,
            from: "random"
          }
        });
      }

      // Animate grid
      gsap.to(gridRef.current, {
        backgroundPosition: '50px 50px',
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated orbs */}
      <div ref={orbsRef} className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-400/30 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-2xl" />
      </div>
      
      {/* Animated grid */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};