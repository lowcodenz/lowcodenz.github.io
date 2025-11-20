export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Hero Section */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Enterprise Solutions That Actually Work for{' '}
            <span className="text-orange-500">Kiwi Companies</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            Falling behind on compliance? Struggling with internal red tape? 
            Just merged and now need to meet global standards? We help NZ companies 
            fix problems fast—practical solutions, no fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-medium text-lg transition-colors">
              Grab a Coffee
            </button>
            <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-8 py-4 rounded-md font-medium text-lg transition-colors">
              See Real Results
            </button>
          </div>
        </div>

        {/* Why Lowcode NZ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Lowcode NZ?
          </h2>
          <p className="text-xl text-gray-700 mb-8 text-center font-medium">
            We&apos;re boots on the ground. We don&apos;t do buzzwords. We solve problems.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical, not theoretical</h3>
              <p className="text-gray-600 text-sm">Tools and workflows your team can actually use</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enterprise-ready</h3>
              <p className="text-gray-600 text-sm">Reporting, auditing, and compliance—done right</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kiwi mentality</h3>
              <p className="text-gray-600 text-sm">Fast, pragmatic, no-nonsense</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trusted & Certified</h3>
              <p className="text-gray-600 text-sm">Certified Mendix experts and official Siemens partner & reseller</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}