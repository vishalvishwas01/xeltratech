import React from 'react'
import './Hero.css'
import banner from "./images/banner.png"

function Hero() {
  return (
    <div>
      <div className=" hero-body w-[100%] h-[350px] flex justify-center items-center">
                    <img className="h-full w-full object-cover" src={banner}/>
                    <div className=' hero-box'>
                      <div className='hero-box-heading1'>Hybrid App Development</div>
                    </div>
                </div>
    </div>
  )
}

export default Hero
