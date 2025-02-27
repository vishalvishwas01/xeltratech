import React from 'react'
import "./success.css"

import testing1 from "../HybridAppDevelopment/images/testing1.png"
import testing2 from "../HybridAppDevelopment/images/testing2.png"
import testing3 from "../HybridAppDevelopment/images/testing3.png"
import testing4 from "../HybridAppDevelopment/images/testing4.png"

function success() {
  return (
    <div className='success-body'>
      <div className="success-box">

        <div className='success-header'>
          <div className='success-header1'><span>Your</span> Success, <span>Our</span> Priority</div>
        </div>
        <div className='success-content'>

        {/* content 1 start */}
          <div className='success-content1'>
            <div className='success-content1-top'><div className='success-content1-top-image'><img src={testing1}/></div></div>
            <div className='success-content1-bottom'>
              <div className='success-content1-bottom-header'>Hybrid Application Development</div>
              <div className='success-content1-bottom-footer'>Lorem ipsum dolor sit amet consectetur. Velit vitae ultrices convallis vel vitae urna et elit egestas. Est elementum rhoncus lectus dolor. Massa eget mi</div>
            </div>
          </div>
          {/* content 1 end */}
          <div className='line1'></div>

          {/* content 2 start */}
          <div className='success-content2'>
            <div className='success-content2-bottom'>
                <div className='success-content2-bottom-header'>Hybrid App Design</div>
                <div className='success-content2-bottom-footer'>Lorem ipsum dolor sit amet consectetur. Velit vitae ultrices convallis vel vitae urna et elit egestas. Est elementum rhoncus lectus dolor. Massa eget mi</div>
            </div>
            <div className='success-content2-top'><div className='success-content2-top-image'><img src={testing2}/></div></div>
          </div>
          {/* content 2 end */}

          <div className='line2'></div>
          {/* content 3 start */}
          <div className='success-content1'>
            <div className='success-content1-top'><div className='success-content1-top-image'><img src={testing3}/></div></div>
            <div className='success-content1-bottom'>
              <div className='success-content1-bottom-header'>Hybrid App Optimization</div>
              <div className='success-content1-bottom-footer'>Lorem ipsum dolor sit amet consectetur. Velit vitae ultrices convallis vel vitae urna et elit egestas. Est elementum rhoncus lectus dolor. Massa eget mi</div>
            </div>
          </div>
          {/* content 3 end */}
          
          <div className='line3'> <hr /> </div>

          {/* content 4 start */}
          <div className='success-content2'>
            <div className='success-content2-bottom'>
                <div className='success-content2-bottom-header'>Hybrid App Maintenance</div>
                <div className='success-content2-bottom-footer'>Lorem ipsum dolor sit amet consectetur. Velit vitae ultrices convallis vel vitae urna et elit egestas. Est elementum rhoncus lectus dolor. Massa eget mi</div>
            </div>
            <div className='success-content2-top'><div className='success-content2-top-image'><img src={testing4}/></div></div>
          </div>
          {/* content 4 start */}

        </div>
      </div>
    </div>
  )
}

export default success
