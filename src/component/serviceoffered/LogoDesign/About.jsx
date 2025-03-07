import React from 'react'
import "./About.css"
import Aboutlogo from "./images/Aboutlogo.png"

function About() {
  return (
    <div className='About-body'>
        <div className='About-box'>
                    <div className='About-img'><img src={Aboutlogo}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading-Logo'>Logo Design That <span>Defines</span> Your Business</div>
                        <div className='About-content-para1'>XeltraTech is a reputed logo design company based in Noida, Delhi NCR, India, with a branch office in the USA. There is no doubt to say that a logo is very crucial for a brand. Only with it, a brand can be captivating and memorable.</div>

                          <div className='About-content-para2'>There is no doubt that a logo plays a crucial role in the success of a brand and its identity. A well-designed logo not only attracts attention but also enhances brand recognition. XeltraTech’s expert team combines creativity with technical expertise to deliver unique and impactful logos tailored to client needs.</div>


                        <div className='About-content-para3'>XeltraTech specializes in creating unique and impactful logos that define a brand’s personality. Our expert designers blend creativity with strategy to ensure every logo resonates with the target audience. A strong and memorable logo builds credibility, fosters trust, and enhances brand recognition, making it a key element of business success. We take the time to understand your business goals, industry trends, and target market to craft logos that leave a lasting impression. Whether you are a startup or an established brand, our custom logo design solutions help you stand out in the competitive market.</div>
                    </div>
        </div>
    </div>
  )
}

export default About
