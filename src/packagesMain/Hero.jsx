import React from 'react'
import banner from '../component/servicewedo/images/banner.jpg'
const Hero = () => {
  return (
    <div className=' w-100vw h-100vh  overflow-hidden'>
         <img src={banner}  className=' h-[400px] w-screen object-cover'/>
         
    </div>
  )
}

export default Hero