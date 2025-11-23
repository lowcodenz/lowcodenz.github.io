export default function EnterpriseCredibility() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Enterprise Credibility
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Gartner */}
          <div className="text-center lg:text-left">
            <a 
              href="https://www.gartner.com/doc/reprints?id=1-2LJ2SZQ2&ct=250725&st=sb"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="/images/2025Gartner.png" 
                alt="Gartner Report 2025"
                className="w-full max-w-md mx-auto lg:mx-0 hover:opacity-90 transition-opacity"
              />
            </a>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">
                Recognized by Gartner
              </h3>
              <p className="text-gray-300 mb-4">
                Mendix has been positioned as a Leader in the 2025 Gartner® Magic Quadrant™ for Enterprise Low-Code Application Platforms. 
                As certified Mendix experts and official Siemens partners, we bring this enterprise-grade technology to New Zealand businesses.
              </p>
              <a 
                href="https://www.gartner.com/doc/reprints?id=1-2LJ2SZQ2&ct=250725&st=sb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-2"
              >
                Read the full report
                <i className="fa-sharp-duotone fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Right Column - Mendix & Siemens */}
          <div className="space-y-8">
            {/* Mendix Partner */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/Expert-min.png" 
                    alt="Mendix Expert"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Certified Mendix Experts
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    The only Mendix certified experts in New Zealand
                  </p>
                  <p className="text-gray-400 text-sm">
                    With advanced certifications and years of implementation experience across Europe and the Pacific, 
                    we bring world-class low-code expertise to Kiwi enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Siemens Partner */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <i className="fa-sharp-duotone fa-light fa-handshake text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Official Siemens Partner & Reseller
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Authorized partner status with full reseller capabilities
                  </p>
                  <p className="text-gray-400 text-sm">
                    As an official Siemens partner, we provide not just implementation expertise but also direct access 
                    to Mendix licensing and enterprise support for New Zealand organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}