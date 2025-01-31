import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './header.css';
import logo1 from './images/logo1.png';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';




function Header() {
    return (
        <>
            {/* Navbar (Fixed) */}
            <div className='navbar'>
                <img src={logo1} alt='Xeltratech'/>
                <div className='navmenu'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Packages</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            {/* Swiper Slider with Autoplay */}
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={false}
                keyboard={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='banner-slider1'>
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Started</button></div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='banner-slider2'>
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Started</button></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='banner-slider3'>
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Quote</button></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Header;
