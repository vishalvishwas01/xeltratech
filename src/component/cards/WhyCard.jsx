import React from 'react'
import "../serviceoffered/HybridAppDevelopment/why.css"
import AnimatedContent from "../SingleComponents/AnimatedContent"

function WhyCard({heading, para}) {
  return (
    <div className='why-box-right-column-content1'>
                    <div className='why-box-right-column-content1-heading'>{heading}</div>
                    <AnimatedContent>
                    <div className='why-box-right-column-content1-para'>{para}</div>
                    </AnimatedContent>
     </div>
  )
}

export default WhyCard
