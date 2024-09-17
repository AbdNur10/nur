import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto from-blue-400 to-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          We are a passionate team dedicated to providing the best educational
          resources and online learning experiences. Our mission is to empower
          individuals with the skills they need to succeed in today's fast-paced
          digital world. From web development to data science and everything in
          between, we offer a wide range of courses tailored to meet the needs
          of beginners and professionals alike.
        </p>
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto from-blue-400 to-white p-8 mt-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Stay updated with the latest courses and offers. Subscribe to our newsletter.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-4 sm:mb-0"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ml-0 sm:ml-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
