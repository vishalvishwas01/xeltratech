import React from 'react'
import Hero from './Hero'
import GetStarted from './GetStarted'
import "./index.css"
import Enquiry from './Enquiry'
import Maps from './Maps'
import Footer1 from '../homepage/footer1'
const ContactUs = () => {
  return (
    <div className='body' >
          <Hero/>
          <GetStarted/>
          <Enquiry/>
          <Maps/>
          <Footer1/>
    </div>
  )
}

export default ContactUs