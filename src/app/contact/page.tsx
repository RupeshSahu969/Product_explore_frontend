export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600">
          We would love to hear from you! Reach out to us for any inquiries or support.
        </p>
      </div>
      <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h3>
          <p className="text-base text-gray-700">
            For any questions or support, feel free to drop us an email at:
          </p>
          <p className="text-base font-semibold text-blue-600 hover:text-blue-800">
            <a href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h3>
          <p className="text-base text-gray-700">You can also reach us by phone:</p>
          <p className="text-base font-semibold text-blue-600 hover:text-blue-800">
            <a href="tel:+1234567890">+1 234-567-890</a>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={5} 
              placeholder="Your message here..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
