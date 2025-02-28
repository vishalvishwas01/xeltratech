import React from 'react'
import "./why.css"
import whybanner from "./images/whybanner.svg"
import WhyCard from '../../cards/WhyCard'

function why() {
    const data = [
        {
            heading: "Reduced Development Cost",
            para:"Optimize resources and accelerate project timelines with smart development strategies, efficient workflows, and cost-effective solutions that ensure high-quality results without overspending.",
        },
        {
            heading: "Enhanced User Experience",
            para:"Deliver seamless interactions and responsive performance to engage users effortlessly and create memorable digital experiences that drive retention and long-term success.",
        },
        {
            heading: "Unified Development",
            para:"Streamline workflows and integrate teams with a cohesive development approach that enhances collaboration, boosts efficiency, and ensures consistent, high-quality outcomes.",
        },
        {
            heading: "Ease of Integration",
            para:"Simplify system connectivity and accelerate deployment with seamless integration solutions that ensure smooth data flow and improved efficiency across all platforms.",
        },
          ]
  return (
    <>
    <div className='why-body'>
        <div className="why-box">
            <div className='why-box-left-column'>
                <div className='why-box-left-column-header'><span>Why Should</span> You Go For Hybrid App Development?</div>
                <div className='why-box-left-column-image'><img src={whybanner}/></div>
            </div>
            <div className='why-box-right-column'>
                
            {data.map((data,index)=>(<WhyCard key={index} heading={data.heading} para={data.para}/>))}
            
            </div>
        </div>
      
    </div>
    </>
  )
}

export default why
