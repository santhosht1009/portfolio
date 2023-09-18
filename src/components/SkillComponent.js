import React from 'react'
import {skillsets} from './SkillData'
import SkillCard from './SkillCard'





function SkillComponent() {
  return (
    <div>
<div className="skills" id="skills">

<h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

<div className="container flex flex-wrap">
     
{skillsets.map((item)=><SkillCard key={item.id} skillset={item}/>)}




 
</div>
</div>


    </div>
  )
}

export default SkillComponent