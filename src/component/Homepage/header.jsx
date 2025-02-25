import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import banner from '../images/banner.jpg';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';

// import "./style.css";

function Header() {
    const [visible, setVisible] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='body-main'>
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={false}
                keyboard={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='banner-slider1'>
                    <img src={banner} alt="Banner" />
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Started</button></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='banner-slider1'>
                    <img src={banner1} alt="Banner" />
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Started</button></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='banner-slider1'>
                    <img src={banner2} alt="Banner" />
                    <div className='banner-slider1-content'>
                        <div className='banner-slider1-content-text1'>Boosting Business with Tech</div>
                        <div className='banner-slider1-content-text2'>Unlocking Your Business</div>
                        <div className='banner-slider1-content-text4'>Potential with Technology</div>
                        <div className='banner-slider1-content-text5'>Providing a comprehensive range of services, from cloud computing and cybersecurity to data analytics and software development.</div>
                        <div className='banner-slider1-content-btn'><button>Get Started</button></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
        
        </div>
    );
}

export default Header;
