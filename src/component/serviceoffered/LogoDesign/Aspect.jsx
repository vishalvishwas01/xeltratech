import React from 'react'
import "./aspect.css"
import AspectCard from "../../cards/AspectCard"
import AnimatedContent from "../../SingleComponents/AnimatedContent"
import data from '../../../arraydata/AspectArray'


function Aspect() {
    
  return (
    <>
    <div className='aspect-body'>
        <div className='aspect-box'>

            <div className='box-heading'>
                <div className='header'><span>Important Aspect</span> Of Logo Desigining</div>
                <div className='para'>Mastering Logo Design: Essential Elements for Creating a Powerful, Memorable, and Timeless Brand Identity</div>
            </div>
            <AnimatedContent>
            <div className='box-content'>
            {data.map((data,index)=>(<AspectCard key={index} head={data.head} para={data.para}/>))}
            </div>
            </AnimatedContent>
        </div>
       
      
    </div>
    </>
  )
}

export default Aspect
