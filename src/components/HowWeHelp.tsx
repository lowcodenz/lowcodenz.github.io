export default function HowWeHelp() {
  const services = [
    {
      title: 'Connect the Moving Parts',
      description: 'IoT sensors, legacy systems, Power BI dashboards—we integrate everything so your data flows seamlessly to quality managers, analysts, and decision-makers.',
      icon: 'fa-sharp-duotone fa-light fa-diagram-project',
    },
    {
      title: 'Digitize Your Processes',
      description: 'Transform paper forms and Excel spreadsheets into robust apps that work seamlessly within your company. Reduce shadow IT, understand actual processes, and uncover optimization opportunities.',
      icon: 'fa-sharp-duotone fa-light fa-file-arrow-up',
    },
    {
      title: 'Integrate After Acquisition',
      description: 'Just been acquired? Suddenly facing new compliance requirements and enterprise standards? We help you meet parent company expectations while maintaining operational continuity.',
      icon: 'fa-sharp-duotone fa-light fa-handshake-simple',
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
              <div className="text-4xl mb-4 text-orange-500">
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

        {/* Proof in the Pudding */}
        <div className="bg-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proof in the Pudding
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Case Study: Local Manufacturer
              </h4>
              <p className="text-lg text-gray-700 mb-6">
Before the project was even finished, we identified data anomalies that prevented over 10 tons of product from going to landfill and saving the client more than 15× our project cost.              </p>
              <blockquote className="border-l-4 border-orange-500 pl-6 text-gray-700 italic text-xl">
                &ldquo;We didnt get what we asked for, we got something better.&rdquo;
              </blockquote>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">10+ tons</div>
                  <div className="text-sm text-gray-600">Product saved from landfill</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15×</div>
                  <div className="text-sm text-gray-600">ROI on project cost</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg col-span-2">
                  <div className="text-2xl font-bold text-orange-600">During build</div>
                  <div className="text-sm text-gray-600">Value identified before completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}