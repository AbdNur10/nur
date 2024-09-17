import React from "react";  
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import { motion } from "framer-motion";  

const instructors = [  
  {  
    id: "1",  
    name: "John Doe",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Web Development",  
  },  
  {  
    id: "2",  
    name: "Jane Smith",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Graphic Design",  
  },  
  {  
    id: "3",  
    name: "Alice Johnson",  
    img: "https://t3.ftcdn.net/jpg/06/57/85/22/360_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg",  
    expertise: "Data Science",  
  },  
  {  
    id: "4",  
    name: "Bob Martin",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Digital Marketing",  
  },  
  {  
    id: "5",  
    name: "Charlie Brown",  
    img: "https://t3.ftcdn.net/jpg/06/57/85/22/360_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg",  
    expertise: "UI/UX Design",  
  },  
  {  
    id: "6",  
    name: "David White",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Cyber Security",  
  },  
  {  
    id: "7",  
    name: "Emma Wilson",  
    img: "https://t3.ftcdn.net/jpg/06/57/85/22/360_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg",  
    expertise: "Software Engineering",  
  },  
  {  
    id: "8",  
    name: "Frank Jones",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Mobile Development",  
  },  
  {  
    id: "9",  
    name: "Grace Lee",  
    img: "https://t3.ftcdn.net/jpg/06/57/85/22/360_F_657852299_5py03y6oH4mrUDyZnf9XxFSFfrjcqAzP.jpg",  
    expertise: "Data Analysis",  
  },  
  {  
    id: "10",  
    name: "Hannah Brown",  
    img: "https://t3.ftcdn.net/jpg/06/15/44/70/360_F_615447011_GOGWROsPNgamAzolXBW28iKX3AAXKqMP.jpg",  
    expertise: "Cloud Computing",  
  },  
];  

const Instructor = () => {  
  const settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,  
    autoplay: true, // Automatically plays the slider  
    autoplaySpeed: 3000, // Time between slides  
    slidesToShow: 3,  
    slidesToScroll: 1,  
    responsive: [  
      {  
        breakpoint: 768, // Adjusts for tablets  
        settings: {  
          slidesToShow: 1,  
          slidesToScroll: 1,  
        },  
      },  
    ],  
  };  

  return (  
    <div className="p-6 bg-gray-100">  
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">  
        Our Instructors  
      </h2>  
      <Slider {...settings}>  
        {instructors.map((instructor, index) => (  
          <motion.div  
            key={instructor.id}  
            className="p-4 flex justify-center"  
            initial={{ opacity: 0, scale: 0.8 }}  
            animate={{ opacity: 1, scale: 1 }}  
            exit={{ opacity: 0, scale: 0.8 }}  
            transition={{ duration: 0.5, delay: index * 0.1 }}  
          >  
            <div className="bg-gradient-to-r from-green-500 to-green-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 w-[300px] h-[350px] flex flex-col items-center justify-between transform hover:scale-105">  
              <img  
                src={instructor.img}  
                alt={instructor.name}  
                className="rounded-full border-4 border-white w-32 h-32 mb-4"  
              />  
              <h3 className="text-xl font-semibold from-black via-green-500 to-black text-center">{instructor.name}</h3>  
              <p className="from-black via-green-500 to-black text-center">{instructor.expertise}</p>  
            </div>  
          </motion.div>  
        ))}  
      </Slider>  
    </div>  
  );  
};  

export default Instructor;