export default function HowWeHelp() {
  const services = [
    {
      title: 'Connect the Moving Parts',
      description: 'IoT sensors, legacy systems, Power BI dashboards—we integrate everything so your data flows seamlessly to quality managers, analysts, and decision-makers.',
      icon: 'fa-sharp-duotone fa-light fa-diagram-project',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Digitize Your Processes',
      description: 'Transform paper forms and Excel spreadsheets into robust apps that work seamlessly within your company. Reduce shadow IT, understand actual processes, and uncover optimization opportunities.',
      icon: 'fa-sharp-duotone fa-light fa-file-arrow-up',
      iconColor: 'text-green-500',
    },
    {
      title: 'Integrate After Acquisition',
      description: 'Just been acquired? Suddenly facing new compliance requirements and enterprise standards? We help you meet parent company expectations while maintaining operational continuity.',
      icon: 'fa-sharp-duotone fa-light fa-handshake-simple',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Help
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            As enterprise software partners we build bespoke software solutions that meet stringent enterprise and regulatory requirements. 
            Every application is designed for compliance, security, and scalability—without sacrificing speed or flexibility.
          </p>
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're dealing with SOC 2, ISO 27001, GDPR, or industry-specific regulations, 
              our low-code approach ensures full audit trails, role-based access controls, data encryption, 
              and automated compliance reporting. You get enterprise-grade governance built in from day one.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className={`text-4xl mb-4 ${service.iconColor}`}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}