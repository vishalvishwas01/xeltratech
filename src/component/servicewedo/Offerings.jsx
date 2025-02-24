import React from 'react'
import './offerings.css'
// import mobileapp from "./images/mobile_app_development.png"
import mobileapp from "./images/touch-screen.gif"
import webdesign from "./images/logo-design.gif"
import advertising from "./images/advertising.gif"
import webdeveloper from "./images/web-developer.gif"

function Offerings() {
  return (
    <div className='offerings-body'>
      <div className='offerings-box'>
        <div className='offerings-box-header'>
          <div className='offerings-box-header1'>WHAT SERVICES <span> WE OFFER </span></div>
          <div className='offerings-box-header2'>Lorem ipsum dolor sit amet consectetur. Vitae aliquam aliquam nisl convallis velit duis. Aliquet lorem sollicitudin odio porta venenatis adipiscing convallis. Arcu tristique tristique fames nunc id elit non auctor consequat. Eleifend donec ut nibh proin ut imperdiet. Ligula pellentesque urna ipsum mattis auctor massa neque .</div>
        </div>

        <div className='offerings-box-content'>

          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={mobileapp}/></div>
              <div className='offerings-box-content1-header-text'>Mobile App Development</div>
            </div>
            <div className='offerings-box-content1-footer'>
            <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>


          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={webdesign}/></div>
              <div className='offerings-box-content1-header-text'>Website Design</div>
            </div>
            <div className='offerings-box-content1-footer'>
            <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>



          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={advertising}/></div>
              <div className='offerings-box-content1-header-text'>Digital Marketing</div>
            </div>
            <div className='offerings-box-content1-footer'>
            <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>



          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={webdeveloper}/></div>
              <div className='offerings-box-content1-header-text'>Mobile App Development</div>
            </div>
            <div className='offerings-box-content1-footer'>
            <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>



          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={mobileapp}/></div>
              <div className='offerings-box-content1-header-text'>Mobile App Development</div>
            </div>
            <div className='offerings-box-content1-footer'>
            <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>



          <div className='offerings-box-content1'>
            <div className='offerings-box-content1-header'>
              <div className='offerings-box-content1-header-img'><img src={mobileapp}/></div>
              <div className='offerings-box-content1-header-text'>Mobile App Development</div>
            </div>
            <div className='offerings-box-content1-footer'>
              <ul>
                <li><a href='#' target='blank'>IOS Application Development</a></li>
                <li><a href='#' target='blank'>Android Apps Development</a></li>
                <li><a href='#' target='blank'>Windows Apps Development</a></li>
                <li><a href='#' target='blank'>App Support And Maintenance</a></li>
                <li><a href='#' target='blank'>App Marketing Services</a></li>
              </ul>
            </div>
          </div>

          


        </div>
        </div>
      </div>
  )
}

export default Offerings
