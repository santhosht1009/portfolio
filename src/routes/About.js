import React from 'react'
import  '../components/ComponentsStyles.css'

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import AboutComponent from '../components/AboutComponent';
const About = () => {
  return (
    <><Navbar />
    <div className='ta'>
   <AboutComponent />



    </div>
    <Footer/>
    </>
  )
}

export default About