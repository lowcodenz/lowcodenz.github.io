export default function EnterpriseCredibility() {
  const credentials = [
    {
      title: 'Certified Mendix Experts',
      icon: 'fa-sharp-duotone fa-light fa-graduation-cap',
      description: 'Official certification and deep expertise'
    },
    {
      title: 'Official Siemens Partner & Reseller',
      icon: 'fa-sharp-duotone fa-light fa-handshake',
      description: 'Authorized partner status'
    },
    {
      title: 'Trusted by NZ Enterprises Big and Small',
      icon: 'fa-sharp-duotone fa-light fa-building',
      description: 'Proven track record across company sizes'
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Enterprise Credibility
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className={`${credential.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {credential.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}