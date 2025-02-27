import React from 'react'
import "../Homepage/style.css"
function ServicesCard({icon,head,para}) {
  return (
    <div className='ul'>
        <div className="li">
                                    <img className="app-icon" src={icon} alt="App Development"/>
                                    <div className="app-development-head">{head}</div>
                                    <div className="app-development-para">{para}</div>
         </div>
    </div>
  )
}

export default ServicesCard
