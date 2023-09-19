import React from 'react'
import './ProjectCard.css'

import { Link, useNavigate } from 'react-router-dom'
function ProjectCard({project}) {



  const navigate=useNavigate()
  return (
    <div className='productCard w-[40rem] m-5 transition-all cursor-pointer'>
       <div className='h-[20rem] w-[40rem]'>
        
        <img className='h-full w-full object-cover object-left-top'
        src={project.image}></img>
        </div> 
       <div className='textPart bg-white p-3'>
       <div>
       <p className='font-bold text-xl pb-3'>{project.title}</p>

       <p className='bg-green-600 font-semibold mb-2'>Technologies</p>
       <span className='bg-red-500 text-white pl-2 pr-2 font-semibold'>FrontEnd</span>
       {project.FrontEnd.map((value,index)=><p className='font-bold opacity-60'>{value}</p>)}
        {project.MiddleWare &&<>
       <span className='bg-red-500 text-white pl-2 pr-2 font-semibold'>Middleware</span>
       <p className='font-bold opacity-60'>{project.MiddleWare}</p></>}
       {project.Backend &&<>
       <span className='bg-red-500 text-white pl-2 pr-2 font-semibold'>BackEnd</span>
       <p className='font-bold opacity-60'>{project.Backend}</p></>}
       </div>
       <div className='flex justify-evenly '>
       <a className='bg-green-600 text-2xl p-5 rounded-md hover:bg-green-300' href={project.gith} target='_blank'><i className="fa-brands fa-github"></i> <button>Github</button></a>
       
       {
        project.live ? <><span className='bg-green-600 text-2xl p-5 rounded-md hover:bg-green-300'>
        
        <i className="fa-brands fa-telegram"></i><button >Live</button></span></>:<><span className='bg-green-600 text-2xl p-5 rounded-md hover:bg-green-300'>
       <Link to='/project/details'  state={{pro:project}} >
         <i className="fa-solid fa-circle-info"></i><button >Details</button></Link></span></>
       }
       
    
       </div>
       </div></div>
  )
}

export default ProjectCard