import React from 'react'
import './ComponentsStyles.css'
import AboutPic from '../assets/profile2.jpg'
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from '../assets/hero.png'

import AboutComponent from './AboutComponent';
const Hero = (props) => {
  return (
<>
<div className="t" >
   <div className="home" id="home">
    <div id="particles-js"></div>

    <div className="content">
    <h2>Hi There,<br/> I'm Santhosh <span>T</span></h2>
    <p>I am <span className="typing-text">
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Java Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'FullStack Developer',
        1000,
        'Web Designer',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </span></p>
    <a href="#about" className="btn"><span>About Me</span>
      <i className="fas fa-arrow-circle-down"></i>
    </a>
    <div className="socials">
        <ul className="social-icons">
          <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/santhosh-t-a07813270/" target="_blank"><i className="fab fa-linkedin"></i></a></li> 
          <li><a className="github" aria-label="GitHub" href='https://github.com/santhosht1009'  target='_blank'><i className="fab fa-github"></i></a></li>
          <li><a className="twitter" aria-label="Twitter" href="#" ><i className="fab fa-twitter"></i></a></li>
          <li><a className="telegram" aria-label="Telegram" href="#" ><i className="fab fa-telegram-plane"></i></a></li>
          <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/itssanthosh_reddy/" target="_blank"><i className="fab fa-instagram" ></i></a></li>
          </ul>
      </div>
    </div>
<div className="image">
    <img draggable="false" className="tilt" src={ProfilePic} alt="" />
</div>
</div>
</div>


<AboutComponent />
    </>
  )
}

export default Hero