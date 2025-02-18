import React from 'react'
import group from "../../assets/group.svg"
import "./Getstarted.css"
import ContactForm from '../Forms/ContactUsform'

const GetStarted = () => {
  return (
    <div className='main-div'>
        <div className='sub-div'>
          <img src={group} className='hidden md:block ' />
            <div>
                <div className='header1div'>
                    <div className='headdiv'>Get started</div>
                    <button className='button'>
                        Contact Us
                    </button>
                </div>
                <div className='getdiv'>Get in touch with us.
                We’re here to assist you.</div>
             
                    {/*input */}
                    <ContactForm/>
               
            </div>
        </div>
    </div>
  )
}

export default GetStarted