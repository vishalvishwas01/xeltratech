import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

import './clients.css'
import architect from './images/architect.png'
import aurora from './images/aurora.png'
import connection from './images/connection.png'
import domo from './images/domo.png'
import marine from './images/marine.png'

function clients() {
  return (
    <div className='clients-body'>
      <div className='clients-heading1'>Clients<span>Our Clients</span></div>
      <div className='clients-list'>
        <ul>
            <li><img src={architect}/></li>
            <li><img src={aurora}/></li>
            <li><img src={connection}/></li>
            <li><img src={domo}/></li>
            <li><img src={marine}/></li>
        </ul>
      </div>
    </div>

  )
}

export default clients
