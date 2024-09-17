import React from 'react';  

const Login = () => {  
  return (  
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">  
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">  
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>  
        <form>  
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
          <div className="mb-6">  
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>  
            <input  
              type="password"  
              id="password"  
              placeholder="Enter your password"  
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"  
              required  
            />  
          </div>  
          <button className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition duration-200">  
            Login  
          </button>  
        </form>  
        <p className="text-center text-gray-600 mt-4">  
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>  
        </p>  
      </div>  
    </div>  
  );  
};  

export default Login;