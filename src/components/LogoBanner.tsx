export default function LogoBanner() {
  const logos = [
    { name: 'ING', src: '/images/logos/ing.svg' },
    { name: 'Vodafone', src: '/images/logos/vodafone.svg' },
    { name: 'Vattenfall', src: '/images/logos/vattenfall.svg' },
    { name: 'Kühne + Nagel', src: '/images/logos/keuhne nagel.svg' },
    { name: 'Stockholm Stad', src: '/images/logos/stockholmsstad.svg' },
    { name: 'FC', src: '/images/logos/FC.svg' },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-1 font-medium leading-tight">
          Trusted by enterprises all over the world.
        </p>
        <p className="text-center text-gray-400 text-sm mb-8 leading-tight">
          (help us add some kiwi logos)
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
