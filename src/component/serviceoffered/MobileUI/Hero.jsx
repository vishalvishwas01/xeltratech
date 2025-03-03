import React from 'react'
import './Hero.css'
import banner from "./images/banner.svg"

function Hero() {
  return (
    <div>
      <div className="hero-body">
                    <img src={banner}/>
                    <div className=' hero-box'>
                      <div className='hero-box-heading1'>Mobile App UI/UX Design</div>
                    </div>
                </div>
    </div>
  )
}

export default Hero
