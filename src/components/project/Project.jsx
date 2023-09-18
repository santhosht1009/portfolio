import ProjectCard from './ProjectCard'
import { projects } from './Data'




export default function Project() {


  return (
    <div className="bg-white relative top-[11rem] mb-28">
      <p className='font-bold text-5xl mb-7 mt-4'>My Projects</p>
     <div className="lg:col-span-4">
                
                <div className='flex flex-wrap py-5 justify-center bg-white'>
                    
                    {projects.map((item)=><ProjectCard project={item}/>)}
                     </div>
                </div>
    </div>
  )
}
