import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsrcr7i', 'template_cgeh35s', form.current, 'mB8GaOyq57UYg0WB6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
         <article className='contact_option'>
           <MdOutlineEmail className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>amankaint7@gmail.com</h5>
           <a href="mailto:amankaint7@gmail.com" target="_blank">Send a Message</a>
         </article>
         <article className='contact_option'>
           <AiFillMessage className='contact_option-icon'/>
           <h4>Messenger</h4>
           <h5>egotutorials</h5>
           <a href="https://google.com">Send a Message</a>
         </article>
         <article className='contact_option'>
           <IoLogoWhatsapp className='contact_option-icon'/>
           <h4>WhatsApp</h4>
           <h5>+123-4342</h5>
           <a href="https://whatsapp.com">Send a Message</a>
         </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact