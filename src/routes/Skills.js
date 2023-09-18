import React from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import SkillComponent from '../components/SkillComponent';
const Skills = () => {
  return (
    <><Navbar />
   <div style={{margin:"120px 0 40px 0"}}>
<SkillComponent />
    </div>
    
    <Footer />
    
    </>
  )
}

export default Skills