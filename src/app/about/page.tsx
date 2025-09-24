export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600">
          Learn more about the Product Explorer platform and how it can help you browse through products effortlessly.
        </p>
      </div>
      <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-base text-gray-700">
            Our mission is to provide a seamless and engaging product browsing experience, enabling users to easily explore a wide range of products, read reviews, and make informed decisions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-base text-gray-700">
            We envision a world where discovering new products is as easy as a few clicks. Our goal is to create a platform that combines ease of use with advanced features to meet the needs of all users.
          </p>
        </div>
      </div>
    </div>
  );
}
