import React from 'react'
import "./ChooseUsLogo.css"
import chooseus from "./images/chooseus.png"
import ChooseUsLogoCard from '../../cards/ChooseUsLogoCard'
import data from '../../../arraydata/ChooseUsLogoArray'


function ChooseUsLogo() {
  
  return (
    <>
    <div className='ChooseUsLogo-body'>
      <div className='ChooseUsLogo-box'>
        {/* box 1 start */}
        <div className='box1'>
          <div className="box1-content1">
            
            <div className="box1-content1-image"><img src={chooseus}/></div>
          </div>
        </div>
        {/* box 1 end */}

        {/* box 2 start */}

        <div className='box2'>
          <div className='box2-header'>Why Choose Us For <span>LOGO DESIGINING</span></div>
          <div className='box2-content'>

          {data.map((data,index)=>(<ChooseUsLogoCard key={index} number={data.number} heading={data.heading} para={data.para}/>))}


          </div>
        </div>
        {/* box 2 end */}
      </div>
    </div>
    </>
  )
}

export default ChooseUsLogo
