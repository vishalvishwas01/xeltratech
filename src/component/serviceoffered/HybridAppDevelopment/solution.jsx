import React from 'react'
import "./solution.css"
import SolutionCard from '../../cards/SolutionCard'

import AnimatedContent from "../../SingleComponents/AnimatedContent"
import SplitText from '../../SingleComponents/SplitText';
import data from '../../../arraydata/SolutionArray';

function solution() {
  
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Innovative <span>Hybrid App</span> Solutions</div>
                {/* <div className='solution-box-header2'>Cutting-edge hybrid app solutions that blend native performance with cross-platform flexibility, ensuring seamless user experiences, faster development, and cost-effective scalability. </div> */}
                <SplitText text="Cutting-edge hybrid app solutions that blend native performance with cross-platform flexibility, ensuring seamless user experiences, faster development, and cost-effective scalability." className="solution-box-header2" delay={10}/>
            </div>
            <div className="solution-box-line"></div>
            
            <AnimatedContent>
            <div className="solution-box-content">

            {data.map((data,index)=>(<SolutionCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}
                
            </div>
            </AnimatedContent>
        </div>
      
    </div>
    </>
  )
}

export default solution
