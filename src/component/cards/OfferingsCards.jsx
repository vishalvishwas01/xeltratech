import React from 'react'
import '../servicewedo/Offerings.css'
function OfferingsCards({icon, head, link1, link2, link3, link4, link5}) {
  return (
              <div className='offerings-box-content1'>
                <div className='offerings-box-content1-header'>
                  <div className='offerings-box-content1-header-img'><img src={icon}/></div>
                  <div className='offerings-box-content1-header-text'>{head}</div>
                </div>
                <div className='offerings-box-content1-footer'>
                <ul>
                    <li><a href='#' target='blank'>{link1}</a></li>
                    <li><a href='#' target='blank'>{link2}</a></li>
                    <li><a href='#' target='blank'>{link3}</a></li>
                    <li><a href='#' target='blank'>{link4}</a></li>
                    <li><a href='#' target='blank'>{link5}</a></li>
                  </ul>
                </div>
              </div>        
  )
}

export default OfferingsCards