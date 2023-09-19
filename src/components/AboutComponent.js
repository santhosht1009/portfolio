import React from 'react'
import AboutPic from '../assets/profile.jpg'
import Resume from '../assets/resume/Santhosh T.pdf'
import '../components/ComponentsStyles.css'
function AboutComponent() {
  return (

    <div>
        
        
        <div className="about" id="about">
    <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div className="row">

    <div className="image">
        <img draggable="false" className="tilt" src={AboutPic} alt="" />
    </div>
    <div className="content">
        <h3>I'm Santhosh T</h3>
        <span className="tag">Full Stack Developer</span>
        
        <p>I am a Full-Stack developer based in Bangalore, India. 
          I am an Master of Computer Application postgraduate from Bangalore University.
          I am very passionate about improving my coding skills & developing applications & websites.
          I build WebApps and Websites using Java Full Stack.
          Working for myself to improve my skills.
          Love to build Full-Stack clones. </p>
        
        <div className="box-container">
        
            <div className="box">
              <p><span> Email : </span> santhosht1009@gmail.com</p>
              <p><span> Place : </span> Bangalore, India - 560057</p>
            </div>
        </div>
        
        <div className="resumebtn">
            <a href={Resume} target="_blank" className="btn"><span>Resume</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</div></div>
  )
}

export default AboutComponent