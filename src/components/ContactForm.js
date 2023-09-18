import React from 'react'
import './ComponentsStyles.css'
import ContactPic from '../assets/contact1.png'
const ContactForm = () => {
  return (
 <div className='tc'>


<div className="contact" id="contact">
  
  <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={ContactPic} alt="" />
      </div>
    <form id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name" required />
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Email" required />
          <i className='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="phone" placeholder="Phone" />
          <i className='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</div>




 </div>


  )
}

export default ContactForm