export default function Services() {
  const services = [
    {
      title: 'Catch Up on Compliance',
      description: 'From audits to reporting, we make sure you meet enterprise requirements—without endless meetings.',
      icon: '📊',
      features: ['Automated reporting', 'Audit trails', 'Compliance dashboards']
    },
    {
      title: 'Cut Through Red Tape',
      description: 'Streamline workflows, automate approvals, and empower teams to innovate.',
      icon: '⚡',
      features: ['Workflow automation', 'Approval processes', 'Team empowerment']
    },
    {
      title: 'Integrate After Mergers',
      description: 'Bring systems together, stay compliant, and scale efficiently after acquisitions.',
      icon: '🔄',
      features: ['System integration', 'Data migration', 'Scalable solutions']
    },
  ];

  const expertise = [
    {
      title: 'Mendix Implementation Specialist',
      description: 'Bringing years of EU implementation experience to our humble corner of the world.',
      icon: '🛠️'
    },
    {
      title: 'Mendix Design System',
      description: 'The quickest way to achieve consistency and development speed is through a design system.',
      icon: '🎨'
    },
    {
      title: 'Mendix Front End Training',
      description: 'Using the Utility Class Methodology everyone can style their applications.',
      icon: '🎓'
    },
    {
      title: 'UX Design',
      description: 'Sometimes you just need a little bit of UX help, I can help.',
      icon: '💡'
    },
    {
      title: 'Traineeship',
      description: 'Do you want to become a lowcode developer? Or are you looking for more lowcode developers? We can help.',
      icon: '🚀'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We solve problems fast with practical, enterprise-ready solutions
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
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
              <p className="text-gray-600 mb-4">
                Went from months of manual approvals to enterprise-grade workflows in under 4 weeks.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 text-gray-600 italic">
                &ldquo;Fast, practical, and straight to the point. Exactly what we needed.&rdquo;
              </blockquote>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-100 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-600">163%</div>
                <div className="text-sm text-gray-600">Increase in acquisition</div>
              </div>
              <div className="bg-green-100 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600">60%</div>
                <div className="text-sm text-gray-600">Reduction in costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}