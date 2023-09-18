import React from 'react'
import SSLC from '../assets/education/SSLC.jpg'
import PUC from '../assets/education/PUC.jpg'
import BSC from '../assets/education/GSC.png'
import MCA from '../assets/education/71392554.jpg'
import './ComponentsStyles.css'
function EducationComponent() {
  return (
    <div>
<div className="education" id="education">

<h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>

  <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

  <div className="box-container">

  <div className="box">
      <div className="image">
      <img draggable="false" src={MCA} alt="" style={{width:"auto",height:"150px"}} />
      </div>
      <div className="content">
      <h3>Master Of Computer Application</h3>
      <p>Bangalore University,Bangalore</p>
      <h4>2019-2022 | Completed</h4>
      </div>
  </div>

  <div className="box">
    <div className="image">
    <img draggable="false" src={BSC} alt="" style={{width:"auto",height:"150px"}}/>
    </div>
    <div className="content">
    <h3>Bachelor of Science ||Computer Science</h3>
    <p>Government Science College,Bangalore</p>
    <h4>2015-2019 | Completed</h4>
    </div>
  </div>

  <div className="box">
    <div className="image">
    <img draggable="false" src={PUC} alt="" style={{width:"auto",height:"100px"}}/>
    </div>
    <div className="content">
    <h3>PUC || PCMB</h3>
    <p>Sharadamba Independent PU College,Tumkur</p>
    <h4>2013-2015 | Completed</h4>
    </div>
  </div>

  <div className="box">
    <div className="image">
    <img draggable="false" src={SSLC} alt=""   style={{width:"auto",height:"150px"}} />
    </div>
    <div className="content">
    <h3>SSLC</h3>
    <p>SMDMRHS,Badavanahalli,Madhugiri Taluk</p>
    <h4>2013 | Completed</h4>
    </div>
  </div>

</div>
</div>




    </div>
  )
}

export default EducationComponent