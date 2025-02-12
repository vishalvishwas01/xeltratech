import React, { useState, useEffect } from 'react';
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
import arrow from './images/arrow.svg';



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
            <div className={sticky ? "navbar sticky scrolled" : "navbar"}>
                <img  className='logo1' src={logo1} alt='Xeltratech' />
                <div className='navmenu-latest'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Portfolio
                        <div className='dropdown-services'>
                                <ul>
                                    <li>Android</li>
                                    <li>IOS</li>
                                    <li>Website</li>
                                    <li>SEO</li>
                                </ul>
                        </div>
                        </li>
                        <li>Services
                            <div className='dropdown-services'>
                                <ul>
                                    <li>Mobile App Ui <img className='services-arrow1' src={arrow}/>
                                        <div className='dropdown-services-submenu1'>
                                            <ul>
                                                <li><a href='#'>Mobile App Ui</a></li>
                                                <li><a href='#'>Hybrid Development</a></li>
                                                <li><a href='#'>IOS App Development</a></li>
                                                <li><a href='#'>Mobile App Maintenance</a></li>
                                                <li><a href='#'>Android App Development</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>Website Design <img className='services-arrow2' src={arrow}/>
                                    <div className='dropdown-services-submenu1'>
                                            <ul>
                                                <li><a href='#'>Logo Design</a></li>
                                                <li><a href='#'>React Design</a></li>
                                                <li><a href='#'>Graphic Design</a></li>
                                                <li><a href='#'>Custom Web Design</a></li>
                                                <li><a href='#'>Responsive + Website Design</a></li>
                                            </ul>
                                    </div>
                                    </li>
                                    <li>Digital Marketing <img className='services-arrow3' src={arrow}/>
                                    <div className='dropdown-services-submenu1'>
                                            <ul>
                                                <li><a href='#'>PHP Development</a></li>
                                                <li><a href='#'>Drupal Development</a></li>
                                                <li><a href='#'>Interspire Development</a></li>
                                                <li><a href='#'>WordPress Development</a></li>
                                                <li><a href='#'>E-Commerce Development</a></li>
                                            </ul>
                                    </div>
                                    </li>
                                    <li>Website Development <img className='services-arrow4' src={arrow}/>
                                    <div className='dropdown-services-submenu1'>
                                            <ul>
                                                <li><a href='#'>SEO Consulting</a></li>
                                                <li><a href='#'>PPC Advertising</a></li>
                                                <li><a href='#'>Content Writing</a></li>
                                                <li><a href='#'>Social Media Marketing</a></li>
                                                <li><a href='#'>Online Reputation Management</a></li>
                                            </ul>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>Packages
                        <div className='dropdown-packages'>
                                <ul>
                                    <li>Apps Packages</li>
                                    <li>SEO Packages</li>
                                    <li>SMO Packages</li>
                                    <li>PPC Packages India</li>
                                    <li>ORM Packages India</li>
                                    <li>Static Packages India</li>
                                    <li>Wordpress Development Plans</li>
                                    <li>Content Writing Packages India</li>
                                    <li>Ecommerce Development Plans</li>
                                </ul>
                        </div>
                        </li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>

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
