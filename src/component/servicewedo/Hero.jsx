import React from 'react'
import './hero.css'
import servicebanner from '../images/servicewedo.png'



function Hero() {
  return (
    <div className='hero-body'>
            <img src={servicebanner}/>
            <div className='hero-box'>
              <div className='hero-box-heading1'>Services We Offer</div>
              <div className='hero-box-heading2'>As a web development company we offer a complete solution in responsive website designing and software develpoment services.</div>
            </div>
        </div>
  )
}

export default Hero
