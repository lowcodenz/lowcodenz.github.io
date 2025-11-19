export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s Chat
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are just a call away. Use the scheduler to plan in a free consultation chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
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

              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/jason-teunissen-537a9327" 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://dribbble.com/jasonteunissen" 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                  <a 
                    href="https://medium.com/@jasonteunissen" 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>
                  <a 
                    href="https://anchor.fm/jason-teunissen" 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Podcast
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-300">
                No fluff, just real solutions:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>Grab a Coffee:</strong> Let&apos;s talk your challenges—no pitch
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <strong>Meetup:</strong> Join us at the next low-code meetup
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors">
                Schedule a Video Call
              </button>
              <p className="text-sm text-gray-400 text-center">
                Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 Lowcode NZ Limited. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}