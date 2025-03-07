import React from 'react'
import "../Homepage/wecando.css"
import AnimatedContent from "../SingleComponents/AnimatedContent"
function wecandocard({icon,head,para}) {
  return (

    < AnimatedContent>
    <div className='ul'>
        <div className="li">
                                    <img className="app-icon" src={icon} alt="App Development"/>
                                    <div className="app-development-head">{head}</div>
                                    <div className="app-development-para">{para}</div>
         </div>
    </div>
    </AnimatedContent>
  )
}

export default wecandocard