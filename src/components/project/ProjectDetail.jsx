import React from 'react'

import '../ComponentsStyles.css'

import { Link, useLocation } from 'react-router-dom';




const ProjectDetail = (props) => {
  const location = useLocation();
  const pro=location.state.pro;
  const concatenatedNames = pro.FrontEnd.join(', ');
  return (
<div className='tc'>


<div className="contact" id="contact">
  
  <h2 className="heading"><i className="fa-solid fa-laptop-code"></i> Project <span>Details</span></h2>

  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={pro.image} alt="" />
      </div>
    <form id="contact-form">
      
      <div className="form-group">
      <h1>Project Name</h1>
        <div className="field">
          
          <input type="text"  value={pro.title} disabled  />
          
        </div>
        <h1>Project FrontEnd</h1>
        <div className="field">
          <input type="text"    value={concatenatedNames
          } disabled />
         
        </div>
        <h1>Project BackEnd</h1>
        <div className="field">
          <input type="text"  className='be' value={pro.MiddleWare} disabled/>
          <input type="text"  className='be' value={pro.Backend} disabled/>
        </div>
        <h1>Project Description</h1>
        <div className="message">
        <textarea value={pro.description}  className='pd' disabled></textarea>
        
        </div>
        </div>

        <div className="button-area">
          <Link to={'/projects'}>
        <button type="submit">
         Back <i className="fa-solid fa-right-from-bracket"></i></button></Link>
      </div>
    </form>

  </div>
  </div>
</div>




 </div>
  )
}

export default ProjectDetail