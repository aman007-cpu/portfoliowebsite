import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I have</h5>
       <h2>My Experience</h2>

       <div className="container experience_container">

         <div className="experience_Technical">
            <h3>Technical Skills</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Basic</small>
                </div>
                
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
                </div>
               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Reactjs</h4>
                <small className='text-light'>Intermediate</small>
                </div>
               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
               
                <div> <h4>PHP</h4>
                <small className='text-light'>Basic</small></div>
               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Cloud Computing</h4>
                <small className='text-light'>Basic</small>
                </div>
                
              </article>
            </div>
         </div>
         <div className="experience_soft">
         <h3>Soft Skills</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>

                <h4>Communication Skills</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Problem Solving</h4>
                <small className='text-light'>Intermediate</small>
                </div>
               
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Leadership Skills</h4>
                <small className='text-light'>Experienced</small>
                </div>
                
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Team Worker</h4>
                <small className='text-light'>Experienced</small>
                </div>
               
              </article>
              
            </div>
         </div>
       </div>

    </section>
  )
}

export default Experience