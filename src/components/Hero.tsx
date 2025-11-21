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
      style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: `center ${scrollY * -0.3}px`,
        backgroundRepeat: 'no-repeat'
      }}
    >
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
              Enterprise Solutions That Actually Work for{' '}
              <span className="text-orange-400">Kiwi Companies</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed lg:max-w-none max-w-4xl mx-auto lg:mx-0">
              Falling behind on compliance? Struggling with internal red tape? 
              Just merged and now need to meet global standards? We help NZ companies 
              fix problems fast—practical solutions, no fluff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                Grab a Coffee
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-md font-medium text-lg transition-colors">
                See Real Results
              </button>
            </div>
          </div>

          {/* Why Lowcode NZ Section - Right side on desktop */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
                Why Lowcode NZ?
              </h2>
              <p className="text-gray-700 mb-6 text-center font-medium">
                We&apos;re boots on the ground. We don&apos;t do buzzwords. We solve problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Practical</h3>
                  <p className="text-gray-600 text-xs">Tools that work</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Enterprise-ready</h3>
                  <p className="text-gray-600 text-xs">Compliance done right</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🥝</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Kiwi mentality</h3>
                  <p className="text-gray-600 text-xs">No-nonsense</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✓</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Certified</h3>
                  <p className="text-gray-600 text-xs">Mendix experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}