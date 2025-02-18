// Topmenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Homepage/header.css'
import logo1 from '../images/logo1.png';
import menu from '../images/menu.svg';
import arrow from '../images/arrow.svg';

const Topmenu = () => {
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
    <div className='navbar-box'>
      <div className={sticky ? "navbar sticky scrolled" : "navbar"}>
        <img className='logo1' src={logo1} alt='Xeltratech' />
        <div className='navmenu-latest'>
          <ul>
            <li>Home</li>
            <li><Link to="/AboutUs">About Us</Link></li>
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
                  <li>Mobile App Ui <img className='services-arrow1' src={arrow} alt="arrow" /></li>
                  <li>Website Design <img className='services-arrow2' src={arrow} alt="arrow" /></li>
                  <li>Digital Marketing <img className='services-arrow3' src={arrow} alt="arrow" /></li>
                  <li>Website Development <img className='services-arrow4' src={arrow} alt="arrow" /></li>
                </ul>
              </div>
            </li>
            <li>Packages</li>
            <li>Careers</li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
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
                  <div><button><Link to="/AboutUs">About Us</Link></button></div>
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
    </div>
  );
};

export default Topmenu;
