'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Lowcode<span className="text-orange-500">.</span>
            </span>
            <span className="text-2xl font-bold text-gray-900 ml-1">
              NZ Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              href="/contact" 
              className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Grab a Coffee
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                Services
              </Link>
              <Link 
                href="/case-studies" 
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium"
              >
                Case Studies
              </Link>
              <Link 
                href="/contact" 
                className="bg-orange-500 text-white hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium mt-2"
              >
                Grab a Coffee
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}