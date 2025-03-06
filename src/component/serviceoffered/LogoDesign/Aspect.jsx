import React from 'react'
import "./aspect.css"
import AspectCard from "../../cards/AspectCard"

function Aspect() {
    const data=[
        {
            head:"Simplicity",
            para:"A simple logo ensures clarity and instant recognition. Avoid excessive details or complex elements. A clean, minimalistic design makes it easier for the audience to remember and associate with the brand.",
        },
        {
            head:"Memorability",
            para:"A memorable logo leaves a lasting impression. Unique shapes, distinct colors, and clever design elements enhance recognition. It should be easy to recall after a brief glance, ensuring brand retention.",
        },
        {
            head:"Scalability",
            para:"A logo must maintain its clarity and impact across different sizes and formats. Whether on a business card or billboard, it should remain legible and visually appealing without losing essential details.",
        },
        {
            head:"Relevance",
            para:"A logo should align with the brand’s identity, industry, and target audience. The colors, typography, and symbols must effectively communicate the brand’s message, values, and purpose to create a strong connection.",
        },
    ]
  return (
    <>
    <div className='aspect-body'>
        <div className='aspect-box'>

            <div className='box-heading'>
                <div className='header'><span>Important Aspect</span> Of Logo Desigining</div>
                <div className='para'>Mastering Logo Design: Essential Elements for Creating a Powerful, Memorable, and Timeless Brand Identity</div>
            </div>
            <div className='box-content'>
            {data.map((data,index)=>(<AspectCard key={index} head={data.head} para={data.para}/>))}
            </div>
        </div>
       
      
    </div>
    </>
  )
}

export default Aspect
