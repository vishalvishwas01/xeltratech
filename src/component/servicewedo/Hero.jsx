import React from 'react'
import './hero.css'
import banner from './images/banner.jpg'



function Hero() {
  return (
    <div className='hero-body'>
            <img src={banner}/>
            <div className='hero-box'>
              <div className='hero-box-heading1'>Services We Offer</div>
            </div>
        </div>
  )
}

export default Hero
