export default function ClientLogos() {
  const clients = [
    { name: 'Vattenfall', logo: '/logos/vattenfall.svg' },
    { name: 'ING', logo: '/logos/ing.svg' },
    { name: 'Kühne + Nagel', logo: '/logos/keuhne-nagel.svg' },
    { name: 'FC', logo: '/logos/fc.svg' },
    { name: 'Stockholm City', logo: '/logos/stockholmsstad.svg' },
    { name: 'Vodafone', logo: '/logos/vodafone.svg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            We&apos;ve worked with:
          </h2>
          <p className="text-gray-600">
            Bringing European enterprise experience to New Zealand
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div 
              key={client.name} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="w-32 h-16 flex items-center justify-center">
                <span className="text-gray-400 font-semibold text-lg">
                  {client.name}
                </span>
                {/* Placeholder for actual logos - you can add real SVGs later */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Lowcode NZ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Practical, not theoretical</h4>
                <p className="text-gray-600">Tools and workflows your team can actually use</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise-ready</h4>
                <p className="text-gray-600">Reporting, auditing, and compliance—done right</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kiwi mentality</h4>
                <p className="text-gray-600">Fast, pragmatic, no-nonsense approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}