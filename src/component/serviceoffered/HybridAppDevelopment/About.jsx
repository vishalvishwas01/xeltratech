import React from 'react'
import "./About.css"
import Aboutimg from "./images/About.png"

function About() {
  return (
    <div className='About-body'>
        <div className='About-box'>
                    <div className='About-img'><img src={Aboutimg}/></div>
                    <div className='About-content'>
                        <div className='About-content-heading-Hybrid'>Bridging the <span>Gap Between Web</span> & Mobile with Hybrid Apps</div>
                        <div className='About-content-para1'>XeltraTech is a reputed mobile UI design company based in Noida, Delhi NCR, India, with a branch office in the USA. The company specializes in crafting visually appealing and highly functional user interfaces for mobile applications.</div>

                          <div className='About-content-para2'>A well-structured UI/UX not only attracts users but also improves usability. XeltraTech’s expert team combines creativity with technical expertise to deliver compelling and responsive designs.</div>


                        <div className='About-content-para3'>By leveraging the latest design trends and technologies, XeltraTech creates captivating UI/UX solutions that align with modern user expectations. Whether for startups or established businesses, the company offers customized design strategies that enhance digital presence and user engagement.</div>
                    </div>
        </div>
    </div>
  )
}

export default About
