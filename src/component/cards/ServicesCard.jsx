import React from 'react'
import "../Homepage/style.css"
function ServicesCard({icon,head,para}) {
  return (
                            <div className='box-bottom-content'>
                                <div className='box-bottom-content-logo'><img src={icon}/></div>
                                <div className='box-bottom-content-heading'>{head}</div>
                                <div className='box-bottom-content-para'>{para}</div>
                            </div>
  )
}

export default ServicesCard
