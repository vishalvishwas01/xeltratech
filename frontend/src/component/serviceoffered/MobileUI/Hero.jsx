import React from "react";
import './Hero.css'
import servicebanner from "../../images/servicewedo.png"


function Hero() {
  return (
  <div className='hero-body'>
              <img src={servicebanner}/>
              <div className='hero-box'>
                <div className='hero-box-heading1'>Mobile App UI/Ux Design</div>
                <div className='hero-box-heading2'>XELTRATECH is a leading is leading Mobile UI design company in (Noida) India, USA and UK for Android, IOS, Hybrid & others. View Our WorkGet A Quote</div>
              </div>
          </div>
  )
}

export default Hero;
