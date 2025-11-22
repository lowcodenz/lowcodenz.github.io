export default function HowWeHelp() {
  const services = [
    {
      title: 'Catch Up on Compliance',
      description: 'From audits to reporting, we make sure you meet enterprise requirements—without endless meetings.',
      icon: '📊',
    },
    {
      title: 'Cut Through Red Tape',
      description: 'Streamline workflows, automate approvals, and empower teams to innovate.',
      icon: '⚡',
    },
    {
      title: 'Integrate After Mergers',
      description: 'Bring systems together, stay compliant, and scale efficiently after acquisitions.',
      icon: '🔄',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Help
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proof in the Pudding */}
        <div className="bg-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proof in the Pudding
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Case Study: Local Manufacturer
              </h4>
              <p className="text-gray-700 mb-6">
                Went from months of manual approvals to enterprise-grade workflows in under 4 weeks.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 text-gray-700 italic text-lg">
                &ldquo;Fast, practical, and straight to the point. Exactly what we needed.&rdquo;
              </blockquote>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">163%</div>
                  <div className="text-sm text-gray-600">Increase in acquisition</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-gray-600">Reduction in costs</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg col-span-2">
                  <div className="text-2xl font-bold text-orange-600">4 weeks</div>
                  <div className="text-sm text-gray-600">From manual to automated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}