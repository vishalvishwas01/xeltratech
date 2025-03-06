import React from 'react'
import "./ChooseUsLogo.css"
import chooseus from "./images/chooseus.png"
import ChooseUsLogoCard from '../../cards/ChooseUsLogoCard'

function ChooseUsLogo() {
  const data = [
    {
      number: "01",
      heading: "Unique & Creative Designs",
      para: "We craft distinctive, innovative logos tailored to your brand’s identity, ensuring a visually appealing and memorable representation that stands out.",
    },
    {
      number: "02",
      heading: "Professional & Experienced Team",
      para: "Our skilled designers bring years of expertise, industry knowledge, and creative vision to deliver high-quality, impactful logos that resonate with your audience.",
    },
    {
      number: "03",
      heading: "Unlimited Revisions",
      para: "Our skilled designers bring years of expertise, industry knowledge, and creative vision to deliver high-quality, impactful logos that resonate with your audience.",
    },
    {
      number: "04",
      heading: "Affordable & Timely Delivery",
      para: "We provide budget-friendly logo design services with a commitment to delivering high-quality work on time, without compromising creativity or professionalism.",
    },
  ]
  return (
    <>
    <div className='ChooseUsLogo-body'>
      <div className='ChooseUsLogo-box'>
        {/* box 1 start */}
        <div className='box1'>
          <div className="box1-content1">
            <div className="box1-content1-image"><img src={chooseus}/></div>
          </div>
        </div>
        {/* box 1 end */}

        {/* box 2 start */}

        <div className='box2'>
          <div className='box2-header'>Why Choose Us For <span>LOGO DESIGINING</span></div>
          <div className='box2-content'>

          {data.map((data,index)=>(<ChooseUsLogoCard key={index} number={data.number} heading={data.heading} para={data.para}/>))}


          </div>
        </div>
        {/* box 2 end */}
      </div>
    </div>
    </>
  )
}

export default ChooseUsLogo
