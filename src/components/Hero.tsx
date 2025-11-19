export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Enterprise Solutions That Actually Work for{' '}
              <span className="text-orange-500">Kiwi Companies</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Falling behind on compliance? Struggling with internal red tape? 
              Just merged and now need to meet global standards? We help NZ companies 
              fix problems fast—practical solutions, no fluff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                Grab a Coffee
              </button>
              <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 rounded-md font-medium text-lg transition-colors">
                See Real Results
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certified Mendix Experts
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Official Siemens Partner
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by NZ Enterprises
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-2">
              <div className="bg-orange-100 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Workflow</h3>
                <div className="space-y-2">
                  <div className="bg-orange-500 h-2 w-3/4 rounded"></div>
                  <div className="bg-orange-300 h-2 w-1/2 rounded"></div>
                  <div className="bg-orange-200 h-2 w-2/3 rounded"></div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500 rounded h-12 flex items-center justify-center text-white font-medium">
                    ✓ 98%
                  </div>
                  <div className="bg-blue-500 rounded h-12 flex items-center justify-center text-white font-medium">
                    Live
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-500 rounded-2xl p-6 text-white transform -rotate-2">
              <div className="text-2xl font-bold">4 weeks</div>
              <div className="text-sm">Average delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}