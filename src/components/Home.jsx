import React from "react";
import { motion } from "framer-motion";
import eduu from "../assets/eduuu.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-6 md:p-10">
      {/* Left Section: Title and Buttons */}
      <motion.div
        className="flex flex-col items-center justify-start text-center md:mr-10 mt-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-lg font-semibold text-gray-700 mb-2">
          Empowering Learning, One Website at a Time
        </p>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          We are <span className="text-blue-500">Edupy Academy</span>
        </h3>
        <p className="text-gray-600 mb-4 max-w-xl">
          We're dedicated to delivering innovative educational solutions.
          Enhance your learning experience with our cutting-edge digital tools.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
          <button className="bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="mt-10 md:mt-0 bg-blue-400 p-4 rounded-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={eduu}
          alt="Learning illustration"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Home;
