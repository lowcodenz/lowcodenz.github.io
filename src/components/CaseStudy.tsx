export default function CaseStudy() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src="/images/testimonial.jpg" 
                alt="Client testimonial" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Column */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Manufacturing Case Study: Transforming Quality Control with Low-Code Solutions.
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Before the project was even finished, we identified data anomalies that prevented over 10 tons of product from going to landfill and saving the client more than 15× our project cost.
                </p>
              </div>

              <blockquote className="mb-8">
                <p className="text-gray-700 italic text-xl mb-4">
                  &ldquo;We didnt get what we asked for, we got something better.&rdquo;
                </p>
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">10+ tons</div>
                  <div className="text-sm text-gray-600">Product saved from landfill</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15×</div>
                  <div className="text-sm text-gray-600">ROI on project cost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
