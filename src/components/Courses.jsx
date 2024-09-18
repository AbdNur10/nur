import React from "react";  
import { motion } from "framer-motion"; 
 

  
const edyCourses = [  
  {  
    id: "1",  
    name: "Cadet Admission Course",  
    img: "https://via.placeholder.com/400.png?text=Cadet+Admission",  
    desc: "Preparation for cadet college entrance exams.",  
    price: "$99",  
    disCount: "$79",  
    classType: "Live Class",  
    numberOfClasses: 10,  
    instructors: ["John Doe", "Jane Smith"]  
  },  
  {  
    id: "2",  
    name: "Thumbnail Design",  
    img: "https://via.placeholder.com/400.png?text=Thumbnail+Design",  
    desc: "Creating thumbnails for graphic design.",  
    price: "$120",  
    disCount: "$99",  
    classType: "Recorded Class",  
    numberOfClasses: 8,  
    instructors: ["Alice Johnson"]  
  },  
  {  
    id: "3",  
    name: "Digital Marketing",  
    img: "https://via.placeholder.com/400.png?text=Digital+Marketing",  
    desc: "Learn SEO, SEM, and social media marketing strategies.",  
    price: "$199",  
    disCount: "$149",  
    classType: "Live Class",  
    numberOfClasses: 12,  
    instructors: ["Mark Lee", "Emily Davis"]  
  },  
  {  
    id: "4",  
    name: "Cyber Security",  
    img: "https://via.placeholder.com/400.png?text=Cyber+Security",  
    desc: "Deep dive into Cyber Security concepts.",  
    price: "$150",  
    disCount: "$120",  
    classType: "Recorded Class",  
    numberOfClasses: 15,  
    instructors: ["David Brown"]  
  },  
  {  
    id: "5",  
    name: "Scratch Programming for Kids",  
    img: "https://via.placeholder.com/400.png?text=Scratch+Programming",  
    desc: "Understanding coding basics in Scratch.",  
    price: "$80",  
    disCount: "$60",  
    classType: "Live Class",  
    numberOfClasses: 6,  
    instructors: ["Laura Lopez"]  
  },  
  {  
    id: "6",  
    name: "Full Stack Web Development",  
    img: "https://via.placeholder.com/400.png?text=Full+Stack+Web+Development",  
    desc: "Become a full-stack web developer.",  
    price: "$130",  
    disCount: "$99",  
    classType: "Recorded Class",  
    numberOfClasses: 20,  
    instructors: ["Karen Kim"]  
  },  
];

const Courses = () => {  
  return (  
    <div className="p-6 bg-gray-800 ">  
      <h2 className="text-2xl font-bold mb-6 text-center text-white">  
        Our Courses  
      </h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        {edyCourses.map((course, index) => (  
          <motion.div  
            key={course.id}  
            className="relative p-4 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out bg-gray-800 text-white group"  
            initial={{ opacity: 0, scale: 0.7 }}  
            animate={{ opacity: 1, scale: 1 }}  
            exit={{ opacity: 0, scale: 0.7 }}  
            transition={{ duration: 0.6, delay: index * 0.1 }}  
            whileHover={{ scale: 1.03 }}  
            style={{  
              background: `linear-gradient(135deg, rgba(0,255,150,0.5), rgba(0,204,0,0.5))`,  
            }}  
          >  
            <img  
              src={course.img}  
              alt={course.name}  
              className="rounded-lg mb-4 max-w-full w-full h-[250px] object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"  
              loading="lazy"  
            />  
            <h3 className="text-xl font-semibold mb-2">  
              {course.name}  
            </h3>  
            <p className="text-gray-300 mb-2">  
              {course.desc}  
            </p>  
            <div className="flex justify-between items-center mb-2">  
              <span className="text-lg font-bold">{course.price}</span>  
              {course.disCount && (  
                <span className="text-gray-400 line-through">{course.disCount}</span>  
              )}  
            </div>  
            <div className="mb-2">  
              <span className="text-sm text-black font-bold text-center">Class Type: {course.classType}</span>  
            </div>  

            {/* Hidden Details for Hover Effect */}  
            <div className="absolute inset-0 bg-gray-700 bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4">  
              <h4 className="text-lg font-semibold">Details:</h4>  
              <p className=" text-white font-bold text-2xl">Number of Classes: {course.numberOfClasses}</p>  
              <p className="text-white font-bold text-2xl">Instructors: {course.instructors.join(", ")}</p>  
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

