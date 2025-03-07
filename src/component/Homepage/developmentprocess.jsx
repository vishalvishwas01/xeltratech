import './developmentprocess.css'
import React from 'react'

import AnimatedContent from "../SingleComponents/AnimatedContent"
import DevelopmentProcessCard from '../cards/DevelopmentProcessCard'
import data from '../../arraydata/DevelopmentprocessArray'

function Developmentprocess() {
    
  return (
    <>
    <div className='dp'>
    <div className='dp-body'>
                <div className='dp-header-box'>
                        <div className='dp-header'>
                                <div className='dp-header1'>OUR FEATURED SERVICES</div>
                                <div className='dp-header2'>Our development process & Business Criteria</div>
                               
                        </div>
                </div>
                <div className='dp-content-body'>
                        <AnimatedContent>
                        <div className='dp-content-box'>
                        {data.map((data,index)=>(<DevelopmentProcessCard key={index} icon={data.icon} head={data.head}/>))}        
                        </div>
                        </AnimatedContent>
                </div>
    </div>
    </div>
    </>
  )
}

export default Developmentprocess
