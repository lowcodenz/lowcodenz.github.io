'use client';

import { useState, useEffect } from 'react';
import FormspreeForm from './FormspreeForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset submitted state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'll send you a confirmation and get back to you soon.
            </p>

            <FormspreeForm 
              emailLabel="Email Address"
              messageLabel="Message"
              buttonText="Send Message"
              emailPlaceholder="your@email.com"
              messagePlaceholder="Tell us about your project..."
              onSuccess={() => setIsSubmitted(true)}
            />
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-check text-4xl text-orange-500"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks! We'll be in touch
            </h2>
            <p className="text-gray-600 mb-8">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
