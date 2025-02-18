import React from 'react'
import './hero.css'
import aboutus from '../images/aboutus.png'

function hero() {
  return (
    <div className='hero-body'>
        <img src={aboutus}/>
        <div className='hero-body-text'>About <span>Us</span></div>
    </div>
  )
}

export default hero
