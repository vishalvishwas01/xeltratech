
import "./testimonials.css";
import testimonials_pic from "./images/testimonials_pic.jpg"
import testimonial1 from "./images/testimonial1.jpg"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules


// Import Autoplay module
import { Pagination, Autoplay } from 'swiper/modules'; 


function testimonials() {
  return (
    
    <div className='testimonials-box'>
      <div className='testimonials-pic'><img src={testimonials_pic}/></div>
      <div className='testimonials-content-box'>
        <div className='testimonials-content-heading1'>TESTIMONIALS</div>
        
              <div className='testimonials-content-heading2'>What Clients Say About Us </div>
              <div className="testimonials-content-heading-picture"><img src={testimonials_pic}/></div>
              <div className='testimonials-content-heading-box'>
              <div className='testimonials-content-heading3'>


              <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]} // Include Autoplay module
                    autoplay={{
                      delay: 1000, // 0.5 seconds
                      disableOnInteraction: false, // Keep autoplay running even after user interaction
                    }}
                    className="mySwiper"
                  >
                <SwiperSlide>
                  <div className="testimonials-quote">
                    <text className="testimonials-quote1">This Shirt Is So Soft And Comfortable. I Was A Bit Worried About The Size Running Small, But I Normally Wear A Medium And It Fits Great.</text>
                    <div className="test-photo">
                    <ul>
                      <li><img src={testimonial1}/></li>
                      <li><div className="test-photo-name"><div className="span1">Brian Perkins</div>
                                                          <div className="span2">Human Resource</div>
                          
                          </div></li>
                    </ul>
                    </div>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="testimonials-quote">
                    <text>This Shirt Is So Soft And Comfortable. I Was A Bit Worried About The Size Running Small, But I Normally Wear A Medium And It Fits Great.</text>
                    <div className="test-photo">
                    <ul>
                      <li><img src={testimonial1}/></li>
                      <li><div className="test-photo-name"><div className="span1">Brian Perkins</div>
                                                          <div className="span2">Human Resource</div>
                          
                          </div></li>
                    </ul>
                    </div>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="testimonials-quote">
                    <text>This Shirt Is So Soft And Comfortable. I Was A Bit Worried About The Size Running Small, But I Normally Wear A Medium And It Fits Great.</text>
                    <div className="test-photo">
                    <ul>
                      <li><img src={testimonial1}/></li>
                      <li><div className="test-photo-name"><div className="span1">Brian Perkins</div>
                                                          <div className="span2">Human Resource</div>
                          
                          </div></li>
                    </ul>
                    </div>
                    
                    </div>
                </SwiperSlide>
              </Swiper>



              </div>
        </div>
      </div>
    </div>
  )
}

export default testimonials
