import React from 'react'

function SkillCard({key,skillset}) {
  return (
    
        <div className='productCard w-[15rem] m-5 transition-all cursor-pointer'>
       <div className='h-[20rem] w-[15rem]'>
        
        <img className='h-full w-full object-cover object-left-top'
        src={skillset.image}></img>
        </div> 
       <div className='textPart bg-white p-1'>
    
       <div className='flex justify-evenly bg-green-600'>
      
       <a className=' text-2xl p-2 rounded-md hover:bg-green-300'> {skillset.title}</a>
       </div>
       </div></div>

    
  )
}

export default SkillCard