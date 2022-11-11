import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

function Experience() {
  return (
   <section>
       <h5>What Skills I have</h5>
       <h2>My Experience</h2>
       <div className='container experience_container'>
        <div className='experience_frontend'>
            <h3>Front End Development</h3>
            <div className='experience_content'>
               <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>HTML</h4>
                   <small className='text-light'>Experienced</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>HTML</h4>
                   <small className='text-light'>Experienced</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>CSS</h4>
                   <small className='text-light'>Experienced</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>JavaScript</h4>
                   <small className='text-light'>Experienced</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>React Js</h4>
                   <small className='text-light'>Experienced</small>
                   </article> 
                  
                 </div>
        </div>
        {/*BACK END*/}
        <div className='experience_backend'>
            <h3>Back End Development</h3>
            <div className='experience_content'>
               <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>Node Js</h4>
                   <small className='text-light'>Basic</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>Mongo Db</h4>
                   <small className='text-light'>Basic</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 
                   <h4>Express</h4>
                   <small className='text-light'>Basic</small>
                   </article> 
                   <article className='experience_details'>
                   <BsFillPatchCheckFill />
                 </article>                  
                 </div>
        </div>
       </div>
   </section>
   
  )
}

export default Experience