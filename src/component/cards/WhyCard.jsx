import React from 'react'
import "../serviceoffered/HybridAppDevelopment/why.css"

function WhyCard({heading, para}) {
  return (
    <div className='why-box-right-column-content1'>
                    <div className='why-box-right-column-content1-heading'>{heading}</div>
                    <div className='why-box-right-column-content1-para'>{para}</div>
     </div>
  )
}

export default WhyCard
