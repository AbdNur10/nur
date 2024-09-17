import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import edu from "../assets/edupy.png";

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Footer = () => {
  return (
    <div className="bg-[rgb(0,20,34)] w-full py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between md:justify-around gap-8">
      {/* Footer Section */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-center gap-4 text-white text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={edu}
          alt="EduPy Logo"
          className="w-[150px] md:w-[200px] h-auto object-contain"
        />
        <p className="text-sm md:text-base">
          We are here to share our skills, techniques
        </p>
        <p className="text-sm md:text-base">and educational knowledge for the future.</p>
        <div className="flex items-center gap-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </motion.div>

      {/* Policy Section */}
      <motion.div
        className="text-white flex flex-col items-center md:items-start gap-4 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="text-blue-800 font-bold text-lg md:text-2xl">Policy</p>
        <h4 className="text-sm md:text-base">About Us</h4>
        <h4 className="text-sm md:text-base">Refund Policy</h4>
        <h4 className="text-sm md:text-base">Terms and Condition</h4>
        <h4 className="text-sm md:text-base">Privacy Policy</h4>
      </motion.div>

      {/* Quick Links Section */}
      <motion.div
        className="text-white flex flex-col items-center md:items-start gap-4 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <p className="text-blue-800 font-bold text-lg md:text-2xl">Quick Links</p>
        <h4 className="text-sm md:text-base">Blogs</h4>
        <h4 className="text-sm md:text-base">Free Live Class</h4>
        <h4 className="text-sm md:text-base">Upcoming Live Class</h4>
        <h4 className="text-sm md:text-base">All Courses</h4>
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        className="text-white flex flex-col items-center md:items-start gap-4 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <p className="text-blue-800 font-bold text-lg md:text-2xl">Contact Us</p>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <IoCallOutline className="text-lg" />
          <span>+880 1315851280</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <IoMailOpenOutline className="text-lg" />
          <span>ceo.edupybd@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <CiLocationOn className="text-lg" />
          <span>Mirpur, Dhaka 1216, Dhaka, Bangladesh</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
