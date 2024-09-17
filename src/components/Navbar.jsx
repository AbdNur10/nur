import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import Edupy from "../assets/edupy.png";

const links = [
  { link: "Home", path: "/" },
  { link: "Courses", path: "/courses" },
  { link: "Instructor", path: "/instructor" },
  { link: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const pressLogin = () => {
    navigate("/login");
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <header className="w-full bg-[rgb(241,245,249)] fixed top-0 shadow-md h-auto z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={Edupy} alt="Logo" className="h-10 w-full" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4 gap-6">
            {links.map((item) => (
              <li key={item.link} onClick={() => changeSection(item.link)}>
                <Link to={item.path} className="hover:text-blue-500 font-bold">
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 items-center ml-4">
            <Link to="/login" onClick={pressLogin}>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:font-bold transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:font-bold transition duration-300">
                Register
              </button>
            </Link>
          </div>
          {/* Hamburger Icon for mobile */}
          <div className="md:hidden ml-4 cursor-pointer" onClick={handleMenu}>
            <button className="text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {links.map((item) => (
            <li key={item.link}>
              <Link
                to={item.path}
                className="block hover:text-blue-500 font-bold"
                onClick={handleMenu}
              >
                {item.link}
              </Link>
            </li>
          ))}
          {/* Uncomment if you want to include the Login button in the mobile menu */}
          {/* <li>
            <Link to="/login">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
                Login
              </button>
            </Link>
          </li> */}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
