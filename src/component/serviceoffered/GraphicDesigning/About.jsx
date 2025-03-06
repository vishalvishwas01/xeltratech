import React from 'react'
import "./About.css"
import Aboutlogo from "./images/about.jpg"

function About() {
  return (
    <div className='About-body'>
        <div className='About-box'>
                    <div className='About-img'><img src={Aboutlogo}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading'> Graphic <span> Designing </span></div>
                        <div className='About-content-para1'>XeltraTech is a reputed Graphic designing company based in Noida, Delhi NCR, India, with a branch office in the USA. There is no doubt to say that Graphics are very crucial for a brand. Only with it, a brand can be captivating and memorable.</div>

                          <div className='About-content-para2'>There is no doubt that Graphics play a crucial role in the success of a brand and its identity. A well-designed Graphics not only attracts attention but also enhances brand recognition. XeltraTech’s expert team combines creativity with technical expertise to deliver unique and impactful Graphics tailored to client needs.</div>


                        <div className='About-content-para3'>XeltraTech specializes in creating unique and impactful Graphics that define a brand’s personality. Our expert designers blend creativity with strategy to ensure every logo resonates with the target audience. A strong and memorable Graphics build credibility, fosters trust, and enhances brand recognition, making it a key element of business success</div>
                    </div>
        </div>
    </div>
  )
}

export default About
