'use client';

import FormspreeForm from './FormspreeForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        />
      </div>
    </div>
  );
}
