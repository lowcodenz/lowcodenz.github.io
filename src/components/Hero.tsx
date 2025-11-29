'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden parallax-hero"
    >
      {/* Background image layer - rotated */}
      <div 
        className="absolute  pointer-events-none parallax-hero"
        style={{
          backgroundImage: "url('/images/hero/hero.png')",
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-13deg) scale(1.1)',
          transformOrigin: 'right center',
          top: `${scrollY * 0.3 -200}px`,
          height: '100%',
          width: '100%',  
        }}
      ></div>

      {/* Radial gradient overlay for better text readability */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Side by Side, Mobile: Vertical */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center lg:min-h-[60vh]">
          
          {/* Hero Main Content - Left side on desktop */}
          <div className="lg:col-span-7 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise Solutions for{' '}
              <span className="text-orange-400">Kiwi Companies</span>
            </h1>
            
            <p className="text-2xl text-gray-200 mb-8 leading-relaxed lg:max-w-none max-w-4xl mx-auto lg:mx-0">
              Need to seize a time sensitive opportunity? <br/>
              Recently aquired? and need to meet enterprise complience?<br/>
              Still working on paper? <br/>
              <br/>
              We help NZ companies.
            </p>

            {/* TODO: Add links when pages are ready */}
            {/* <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                Grab a Coffee
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                See Real Results
              </button>
            </div> */}
          </div>

          {/* Why Lowcode NZ Section - Right side on desktop */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 lg:p-8 border border-white/20">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
                Why Lowcode NZ?
              </h2>
              <p className="text-lg text-white/90 mb-6 text-center font-medium">
                We&apos;re boots on the ground. Practical hands on software partners.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className="fa-sharp-duotone fa-light fa-wrench text-2xl text-white"></i>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base">Practical</h3>
                    <p className="text-white/80 text-sm">Tools that work</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <i className="fa-sharp-duotone fa-light fa-building text-2xl text-white"></i>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base">Enterprise-ready</h3>
                    <p className="text-white/80 text-sm">Compliance done right</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <i className="fa-sharp-duotone fa-light fa-kiwi-bird text-2xl text-white"></i>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base">Kiwi mentality</h3>
                    <p className="text-white/80 text-sm">No-nonsense</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <i className="fa-sharp-duotone fa-light fa-circle-check text-2xl text-white"></i>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base">Certified</h3>
                    <p className="text-white/80 text-sm">Mendix experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}