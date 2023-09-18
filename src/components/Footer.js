import React from 'react'
import './FooterStyles.css'
const Footer = () => {

  


  return (
    <div className='footer'>
        <div className='top'>
           
            <div><a href='/'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/itssanthosh_reddy/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href='/contact'><i className="fa-solid fa-envelope"></i></a>
            <a href='https://www.linkedin.com/in/santhosh-t-a07813270/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
<div className='bottom'>
    <div>
<h4>UseFull Links</h4>
<a href='/'>Home</a>
<a href='/about'>About Us</a>
<a href='/contact'>Contact Us</a>

    </div>

    <div>
<h4>My Services</h4>
<a href='#'>Web Design</a>
<a href='#'>Web Development</a>
<a href='#'>BackEnd</a>

    </div>

    <div>
<h4>Community</h4>
<a href='https://github.com/santhosht1009'  target='_blank'>GitHub</a>
<a href='/projects'>Projects</a>
<a href='#'>Twitter</a>

    </div>

    <div>
<h4>Others</h4>
<a href='#'>Terms Of Services</a>
<a href='#'>Private Policy</a>
<a href='#'>License</a>

    </div>
</div>
    </div>
  )
}

export default Footer