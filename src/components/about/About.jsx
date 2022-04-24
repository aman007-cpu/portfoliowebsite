import React from 'react'
import './about.css'
import ME from '../../assets/ak2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaMedal} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaMedal className='about_icon'/>
              <h5>Hackathons won</h5>
              <small>3</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Personal Projects</h5>
              <small>12+</small>
            </article>  
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, facere debitis in vero repellat aperiam veritatis aliquid, quis nulla a aut corporis, doloremque placeat nesciunt voluptatem porro officia alias voluptas!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About