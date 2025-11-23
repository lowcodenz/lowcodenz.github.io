export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Next Steps
          </h2>
          <p className="text-xl text-gray-600">
            No fluff, just real solutions:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Grab a Coffee */}
          <div className="bg-orange-50 rounded-2xl p-8 text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <i className="fa-sharp-duotone fa-light fa-mug-hot text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Grab a Coffee</h3>
            <p className="text-gray-700 mb-6">
              Let&apos;s talk your challenges—no pitch.
            </p>
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-medium text-lg transition-colors w-full">
              Schedule a Chat
            </button>
          </div>

          {/* Meetup */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <i className="fa-sharp-duotone fa-light fa-people-group text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meetup</h3>
            <p className="text-gray-700 mb-6">
              Join us at the next low-code meetup and see what works.
            </p>
            <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition-colors w-full">
              Join Next Meetup
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Email</h4>
                  <div className="space-y-1">
                    <p>jason.teunissen@lowcode.co.nz</p>
                    <p>kitti.bradley@lowcode.co.nz</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Address</h4>
                  <p>
                    10 Venice Place<br />
                    Stoke, Nelson 7011<br />
                    New Zealand
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-400 mb-6">Follow Us</h4>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.linkedin.com/in/jason-teunissen-537a9327" 
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://dribbble.com/jasonteunissen" 
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-dribbble"></i>
                  <span>Dribbble</span>
                </a>
                <a 
                  href="https://medium.com/@jasonteunissen" 
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-medium"></i>
                  <span>Medium</span>
                </a>
                <a 
                  href="https://anchor.fm/jason-teunissen" 
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-sharp-duotone fa-light fa-podcast"></i>
                  <span>Podcast</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 Lowcode NZ Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}