import React from 'react'
import image from "../assets/packagepic.svg"
const Hero = () => {
  return (
    <div className=' w-100vw h-100vh  overflow-hidden'>
         <img src={image}  className=' h-[299px] w-screen '/>
         
    </div>
  )
}

export default Hero