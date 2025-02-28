import React from 'react'
import './Hero.css'
import banner from "./images/banner.jpg"




function Hero() {
  return (
    <div>
      <div className="hero-body">
                    <img className="h-full w-full object-cover" src={banner}/>
                    <div className=' hero-box'>
                      <div className='hero-box-heading1'>Hybrid App Development</div>
                    </div>
                </div>
    </div>
  )
}

export default Hero
