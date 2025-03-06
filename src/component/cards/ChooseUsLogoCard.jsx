import React from 'react'
import "../serviceoffered/LogoDesign/ChooseUsLogo.css"

function ChooseUsLogoCard({number, heading, para}) {
  return (
        <div className="box2-content1">
              <div className="box2-content1-numbers">{number}</div>
              <div className="box2-content1-box">
                <div className="box2-content1-box-heading">{heading}</div>
                <div className="box2-content1-box-para">{para}</div>
              </div>
        </div>
  )
}

export default ChooseUsLogoCard
