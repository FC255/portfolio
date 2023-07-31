import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="javascript;" className='footer__logo'>ff</a>

      <ul className='permaLinks'> 
        <li><a href="javascript;">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer" ><BsGithub/></a>
      </div>

      
    </footer>
  )
}

export default Footer