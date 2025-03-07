import React from 'react'
import "./why.css"
import whybanner from "./images/whybanner.svg"
import WhyCard from '../../cards/WhyCard'
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/WhyHybridArray'

function why() {
    
  return (
    <>
    <div className='why-body'>
        <div className="why-box">
            <div className='why-box-left-column'>
                <div className='why-box-left-column-header'><span>Why Should</span> You Go For Hybrid App Development?</div>
                <AnimatedContent>
                <div className='why-box-left-column-image'><img src={whybanner}/></div>
                </AnimatedContent>
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
