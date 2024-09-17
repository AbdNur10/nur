import React from "react";  
import { motion } from "framer-motion";  

const edyCourses = [  
  {  
    id: "1",  
    name: "Introduction to React",  
    img: "https://miro.medium.com/v2/resize:fit:1200/1*r9tt9nzSsSarK9kMwqsNuQ.png",  
    desc: "Learn the basics of React, a popular JavaScript library for building user interfaces.",  
    price: "$99",  
    disCount: "$79",  
  },  
  {  
    id: "2",  
    name: "Cyber Security",  
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6XlLc2AyYFm6_u2Xgkh9nGbMGo3JkIvG6w&s",  
    desc: "Deep dive into Cyber Security concepts and techniques to enhance your skills.",  
    price: "$120",  
    disCount: "$99",  
  },  
  {  
    id: "3",  
    name: "Web Development",  
    img: "https://miro.medium.com/v2/resize:fit:1200/1*r9tt9nzSsSarK9kMwqsNuQ.png",  
    desc: "Become a full-stack web developer with this comprehensive bootcamp.",  
    price: "$199",  
    disCount: "$149",  
  },  
  {  
    id: "4",  
    name: "Data Analysis and Visualization",  
    img: "https://miro.medium.com/v2/resize:fit:1200/1*r9tt9nzSsSarK9kMwqsNuQ.png",  
    desc: "Learn data analysis and visualization using Python and its libraries.",  
    price: "$150",  
    disCount: "$120",  
  },  
  {  
    id: "5",  
    name: "Scratch Programming",  
    img: "https://miro.medium.com/v2/resize:fit:1200/1*r9tt9nzSsSarK9kMwqsNuQ.png",  
    desc: "Understand the principles of UI/UX design and create user-friendly interfaces.",  
    price: "$80",  
    disCount: "$60",  
  },  
  {  
    id: "6",  
    name: "Digital Marketing Masterclass",  
    img: "https://miro.medium.com/v2/resize:fit:1200/1*r9tt9nzSsSarK9kMwqsNuQ.png",  
    desc: "Master the art of digital marketing and grow your online business.",  
    price: "$130",  
    disCount: "$99",  
  },  
];  

const Courses = () => {  
  return (  
    <div className="p-6 bg-gray-100">  
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  
        Our Courses  
      </h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        {edyCourses.map((course, index) => (  
          <motion.div  
            key={course.id}  
            className="relative p-4 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out"  
            initial={{ opacity: 0, scale: 0.7 }}  
            animate={{ opacity: 1, scale: 1 }}  
            exit={{ opacity: 0, scale: 0.7 }}  
            transition={{ duration: 0.6, delay: index * 0.1 }}  
            whileHover={{ scale: 1.03 }}  
            style={{  
              background: `linear-gradient(135deg, rgba(255,0,150,0.5), rgba(0,204,255,0.5))`,  
            }}  
          >  
            <img  
              src={course.img}  
              alt={course.name}  
              className="rounded-lg mb-4 max-w-full w-full h-[250px] object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"  
              loading="lazy"  
            />  
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-black via-green-500 to-black bg-clip-text text-transparent">
              {course.name}  
            </h3>  
            <p className="text-gray-600 mb-2 bg-gradient-to-r from-black via-green-500 to-black bg-clip-text text-transparent">
              {course.desc}  
            </p>  
            <div className="flex justify-between items-center mb-2">  
              <span className="text-lg font-bold text-blue-500">{course.price}</span>  
              {course.disCount && (  
                <span className="text-gray-500 line-through">{course.disCount}</span>  
              )}  
            </div>  
            <div className="flex gap-2">  
              <button   
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300"  
                aria-label={`Buy ${course.name}`}  
                onClick={() => alert(`Buying ${course.name}`)}  
              >  
                Buy Now  
              </button>  
              <button   
                className="bg-green-600 text-white py-2 px-4 rounded-lg w-full hover:bg-green-700 transition duration-300"  
                aria-label={`Details for ${course.name}`}  
                onClick={() => alert(`Showing details for ${course.name}`)}  
              >  
                Show Details  
              </button>  
            </div>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Courses;
