import React, { useEffect, useState } from 'react'
import './ComponentsStyles.css'
import emailjs from '@emailjs/browser';
import ContactPic from '../assets/contact1.png'
const ContactForm = () => {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })
const [status,setStatus]=useState('')

  console.log(values);
const handleSubmit=(e)=>{
  e.preventDefault();
  emailjs.send('service_bgmssjt', 'template_3yg6zod', values, 'O04fSAS7wWojai71r')
.then(response=>{
  
  console.log("success",response);
  setValues({
    name:'',
    email:'',
    phone:'',
    message:'' 
  })
  setStatus("success")
},error=>{
  console.log('Error',error);
})
}


useEffect(()=>{
  if(status==="success"){
    setTimeout(()=>{
      setStatus('')
    },3000);
  }
},[status])

const handleChange=(e)=>{
  setValues(values=>({
    ...values,[e.target.name]:e.target.value
  }))
}



  return (
 <div className='tc'>


<div className="contact" id="contact">
  
  <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={ContactPic} alt="" />
      </div>
      
    <form id="contact-form" onSubmit={handleSubmit}>
    {status &&  <div className='px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5'>
    <p>your message submitted successfully</p>
     </div>}
      <div className="form-group">
        <div className="field">
          <input type="text" onChange={handleChange} name="name" value={values.name} placeholder="Name" required />
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" onChange={handleChange} value={values.email} placeholder="Email" required />
          <i className='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="phone" onChange={handleChange} value={values.phone} placeholder="Phone" />
          <i className='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" onChange={handleChange} value={values.message} name="message" required></textarea>
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