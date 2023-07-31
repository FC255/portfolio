import React, {useRef} from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

 

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_qjzwmll', 'template_r0wixik', form.current, 'RwddPo21cOTcXtCYO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>fengc1994@gmail.com</h5>
            <a href="mailto:fengc1994@gmail.com ">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>fengc1994@gmail.com</h5>
            <a href="mailto:fengc1994@gmail.com ">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>fengc1994@gmail.com</h5>
            <a href="mailto:fengc1994@gmail.com ">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact