import React from 'react'
import './story.css'
import story_pic from '../images/story_pic.png'

function story() {
  return (
    <div className='story-body'>
        <div className='story-header'>
            <div className='story-header-top'><span>Our </span> Story</div>
            <div className='story-header-bottom'>Xeltratech delivers innovative web and mobile app development, SEO, digital marketing, and app maintenance.</div>
        </div>

        <div className='story-content-box'>
            <div className='story-content-photo'><img src={story_pic}/></div>
           <div className='story-content-text'>Xeltratech is a leading software services company. We specialize in cutting-edge web and mobile app development, delivering seamless, scalable solutions. Our expertise extends to WordPress, SEO, and digital marketing, ensuring online visibility and business growth. From startups to enterprises, we craft tailored digital experiences that drive success. At Xeltratech, we don’t just build apps—we create future-ready solutions. We also provide app maintenance services, ensuring optimal performance and security. Our team excels in UI/UX design, performance optimization, and innovative strategies. With a customer-centric approach, we transform ideas into reality, offering robust and efficient software solutions that empower businesses worldwide.</div> 
        </div>
      
    </div>
  )
}

export default story
