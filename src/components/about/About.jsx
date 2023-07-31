import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ years experience</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ World</small>
          </article>

          <article className='about__card'>
            <FaAward className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eligendi dolorum aperiam possimus sint ipsum facilis, officia pariatur voluptates consequatur aliquid culpa error veritatis rem quia velit odit doloremque nisi.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default about