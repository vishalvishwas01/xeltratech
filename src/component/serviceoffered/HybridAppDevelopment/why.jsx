import React from 'react'
import "./why.css"
import whybanner from "./images/whybanner.png"
import WhyCard from '../../cards/WhyCard'

function why() {
    const data = [
        {
            heading: "Reduced Development Cost",
            para:"Lorem ipsum dolor sit amet consectetur. Elit tempor velit ornare pretium rutrum id. Imperdiet leo turpis vehicula netus. Proin turpis bibendum vivamus odio libero. Vel duis pharetra integer",
        },
        {
            heading: "Enhanced User Experience",
            para:"Lorem ipsum dolor sit amet consectetur. Elit tempor velit ornare pretium rutrum id. Imperdiet leo turpis vehicula netus. Proin turpis bibendum vivamus odio libero. Vel duis pharetra integer",
        },
        {
            heading: "Unified Development",
            para:"Lorem ipsum dolor sit amet consectetur. Elit tempor velit ornare pretium rutrum id. Imperdiet leo turpis vehicula netus. Proin turpis bibendum vivamus odio libero. Vel duis pharetra integer",
        },
        {
            heading: "Ease of Integration",
            para:"Lorem ipsum dolor sit amet consectetur. Elit tempor velit ornare pretium rutrum id. Imperdiet leo turpis vehicula netus. Proin turpis bibendum vivamus odio libero. Vel duis pharetra integer",
        },
       
          ]
  return (
    <>
    <div className='why-body'>
        <div className="why-box">
            <div className='why-box-left-column'>
                <div className='why-box-left-column-header'><span className='text-[#ED1C24]'>Why Should</span> You Go For Hybrid App Development?</div>
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
