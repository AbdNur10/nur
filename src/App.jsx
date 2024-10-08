import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Instructor from './components/Instructor';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';



const App = () => {
  return (
   <>
   <Navbar/>
   <Home NavLink={true}/>
   <Courses NavLink={true}/>
   <Instructor NavLink={true}/>
   <About NavLink={true}/>
   <Footer/>
{  /* <Login/>
   <Signup/> */}
   </>
  )
}

export default App;