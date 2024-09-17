import React, { useState } from 'react';   

const Signup = () => {  
  const [selectedImage, setSelectedImage] = useState(null);  

  const handleImageChange = (event) => {  
    if (event.target.files && event.target.files[0]) {  
      setSelectedImage(URL.createObjectURL(event.target.files[0]));  
    }  
  };  

  return (  
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">  
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">  
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>  
        <form>  
          <div className="mb-4">  
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>  
            <input  
              type="text"  
              id="name"  
              placeholder="Enter your full name"  
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"  
              required  
            />  
          </div>  

          <div className="mb-4">  
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>  
            <input  
              type="email"  
              id="email"  
              placeholder="Enter your email"  
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"  
              required  
            />  
          </div>  

          <div className="mb-4">  
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>  
            <input  
              type="password"  
              id="password"  
              placeholder="Enter your password"  
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"  
              required  
            />  
          </div>  

          <div className="mb-4">  
            <label htmlFor="image" className="block text-gray-700 mb-1">Choose Profile Image</label>  
            <input  
              type="file"  
              id="image"  
              accept="image/*"  
              onChange={handleImageChange}  
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"  
            />  
          </div>  

          {selectedImage && (  
            <div className="mb-4 flex justify-center">  
              <img   
                src={selectedImage}   
                alt="Selected"   
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"  
              />  
            </div>  
          )}  

          <button className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition duration-200">  
            Sign Up  
          </button>  
        </form>  
        <p className="text-center text-gray-600 mt-4">  
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>  
        </p>  
      </div>  
    </div>  
  );  
};  

export default Signup;