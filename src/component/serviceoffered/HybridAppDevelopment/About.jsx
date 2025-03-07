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
                        <div className='About-content-para1-hybrid'>Hybrid app development is a game-changer in the mobile industry, offering a perfect blend of web and native applications. It allows businesses to create apps that run seamlessly across multiple platforms, including iOS and Android, without the need for separate codebases. This approach not only saves time and costs but also ensures a consistent user experience across all devices. By leveraging technologies like React Native, Flutter, and Ionic, hybrid apps provide a native-like performance while maintaining the flexibility of web-based applications. These apps are built using standard web technologies such as HTML, CSS, and JavaScript, which are then wrapped in a native container, enabling them to function like traditional mobile apps. This means faster development cycles, easier maintenance, and a broader audience reach. One of the biggest advantages of hybrid app development is its ability to work offline with cached data, enhancing accessibility for users even in low-connectivity environments.</div>

                          {/* <div className='About-content-para2'>A well-structured UI/UX not only attracts users but also improves usability. XeltraTech’s expert team combines creativity with technical expertise to deliver compelling and responsive designs.</div>


                        <div className='About-content-para3'>By leveraging the latest design trends and technologies, XeltraTech creates captivating UI/UX solutions that align with modern user expectations. Whether for startups or established businesses, the company offers customized design strategies that enhance digital presence and user engagement.</div> */}
                    </div>
        </div>
    </div>
  )
}

export default About
