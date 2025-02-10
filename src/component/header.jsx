import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo1 from './images/logo1.png';
import banner from './images/banner.jpg';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import menu from './images/menu.svg';
import Example from "./cards/Example";


// import "./style.css";

function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='body-main'>
        <>
            <div className='navbar'>
                <img src={logo1} alt='Xeltratech' />
                <div className='navmenu-latest'>

                    <ul>
                        <li ><a className='menu1'>Home</a></li>
                        <li><a className='menu1'>About Us</a></li>
                        <li><Example/></li>
                        <li><Example/></li>
                        <li><a  className='menu1'>Careers</a></li>
                        <li><a  className='menu1'>Contact Us</a></li>
                    </ul>
                    {/* <a>Home</a>
                    <Example/>
                    <Example/> */}
                </div>
               
                <div className='navmenu'>
                    
                            
                            
                    <div className='navmenu-btn'>
                        <CButton color="primary" onClick={() => setVisible(true)}>
                            <img src={menu} alt="Menu" />
                        </CButton>
                        <COffcanvas placement="end" visible={visible} onHide={() => setVisible(false)} className="offcanvas-transparent offcanvas-custom-width">
                            <COffcanvasHeader>
                                <COffcanvasTitle>Navigation</COffcanvasTitle>
                                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                            </COffcanvasHeader>
                            <COffcanvasBody>
                            <div className='offcanvas-navmenu'>
                                <div><button><a href='#'>Home</a></button></div>
                                <div><button><a href='#'>About</a></button></div>
                                <div><button><a href='#'>Services</a></button></div>
                                <div><button><a href='#'>Portfolio</a></button></div>
                                <div><button><a href='#'>Packages</a></button></div>
                                <div><button><a href='#'>Careers</a></button></div>
                                <div><button><a href='#'>Contact Us</a></button></div>
                            </div>
                            </COffcanvasBody>
                        </COffcanvas>
                    </div>
                </div>
            </div>
            

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
