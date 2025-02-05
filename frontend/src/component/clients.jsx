import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// Import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

import './clients.css';
import architect from './images/architect.png';
import aurora from './images/aurora.png';
import connection from './images/connection.png';
import domo from './images/domo.png';
import marine from './images/marine.png';

function Clients() {
  return (
    <div className='clients-body'>
      <div className='clients-heading1'>
        Clients<span>Our Clients</span>
      </div>
      <div className='clients-list'>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Autoplay]} // Add Autoplay module
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 1000, // Time in ms before the next slide is shown
            disableOnInteraction: false, // Keep autoplay running after interaction
          }}
        >
          <SwiperSlide><img src={architect} alt="architect" /></SwiperSlide>
          <SwiperSlide><img src={aurora} alt="aurora" /></SwiperSlide>
          <SwiperSlide><img src={connection} alt="connection" /></SwiperSlide>
          <SwiperSlide><img src={domo} alt="domo" /></SwiperSlide>
          <SwiperSlide><img src={marine} alt="marine" /></SwiperSlide>
          <SwiperSlide><img src={marine} alt="marine" /></SwiperSlide>
          <SwiperSlide><img src={marine} alt="marine" /></SwiperSlide>
          <SwiperSlide><img src={marine} alt="marine" /></SwiperSlide>
          <SwiperSlide><img src={marine} alt="marine" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
