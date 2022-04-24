import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tony kk',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse eaque veritatis incidunt voluptatem vitae, velit fugiat nemo autem maiores hic? Perferendis commodi qui est hic dicta nam fuga asperiores!'
  },
  {
    avatar: AVTR2,
    name: 'HIMAD GR',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse eaque veritatis incidunt voluptatem vitae, velit fugiat nemo autem maiores hic? Perferendis commodi qui est hic dicta nam fuga asperiores!'
  },
  {
    avatar: AVTR3,
    name: 'SMILY',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse eaque veritatis incidunt voluptatem vitae, velit fugiat nemo autem maiores hic? Perferendis commodi qui est hic dicta nam fuga asperiores!'
  },
  {
    avatar: AVTR4,
    name: 'JKOLS',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse eaque veritatis incidunt voluptatem vitae, velit fugiat nemo autem maiores hic? Perferendis commodi qui est hic dicta nam fuga asperiores!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Review From Clients</h5>
<h2>Testimonials</h2>
  <Swiper className="container testimonials_container"
   modules={[Pagination]}
   spaceBetween={40}
   slidesPerView={1}
   pagination={{ clickable: true }}
   >
   {
     data.map(({avatar,name,review}, index)=>{
       return( <SwiperSlide key={index} className="testimonial">
       <div className="client_avatar">
         <img src={avatar}/>
        </div>
        <h5 className='client_name'>{name}</h5>
         <small className='client_review'>{review}</small>
       
     </SwiperSlide>)
     })
   }
    
  </Swiper>
    </section>
  )
}

export default Testimonials