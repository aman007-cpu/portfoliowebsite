import React from 'react'
import './header.css'
import CTA from './CTA'
import AK from '../../assets/ak.jpg'
import Headersocials from './Headersocials'
const Header = () => {
  return (
     <header>
       <div className="container header_container">
         <h4>Hello I'm</h4>
         <h1>Aman Kaintura</h1>
         <h5 className="text-light">Android & Frontend-web Developer</h5>
         <CTA/>
         <Headersocials/>
         <div className="me">
           <img src={AK} alt="ak" />
         </div>
         <a href="#contact" className='scroll_down'>Scroll Down</a>
       </div>
     </header>
  )
}

export default Header