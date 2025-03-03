import React from 'react'
import "./services.css"
import logo1 from "./images/appicon.svg"
import logo2 from "./images/mobileapp.svg"
import logo3 from "./images/visual.svg"
import logo4 from "./images/user.svg"
import MobileUIServices from '../../cards/MobileUIServices'

function Services() {
    const data =[
        {
            logo:logo1,
            heading:"APP ICON DESIGNING",
            para:"Crafting visually stunning, memorable app icons that enhance brand identity and user engagement effortlessly.",
        },
        {
            logo:logo2,
            heading:"MOBILE APP PROTOTYPE",
            para:"Designing interactive and user-friendly mobile app prototypes to visualize and refine your app experience.",
        },
        {
            logo:logo3,
            heading:"VISUAL DESIGN",
            para:"Creating stunning and user-centric visual designs that enhance aesthetics and brand identity seamlessly.",
        },
        {
            logo:logo4,
            heading:"MOBILE (UX) DESIGNING",
            para:"Crafting intuitive and user-friendly mobile UX designs that enhance engagement and overall experience.",
        },
    ]
  return (
    <>
    <div className='services-body'>
        <div className='services-box'>
        <div className='services-heading'>SERVICES <span>WE’RE</span> PROVIDING</div>
        <div className='services-content'>
            <div className='services-content-box'>

            {data.map((data,index)=>(<MobileUIServices key={index} logo={data.logo} heading={data.heading} para={data.para}/>))}
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
