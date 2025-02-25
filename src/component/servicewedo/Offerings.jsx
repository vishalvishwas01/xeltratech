import React from 'react'
import './offerings.css'
import mobileapp from "./images/touch-screen.gif"
import webdesign from "./images/logo-design.gif"
import advertising from "./images/advertising.gif"
import webdeveloper from "./images/web-developer.gif"
import OfferingsCards from '../cards/OfferingsCards'

function Offerings() {

  const data=[
          {
              icon:mobileapp,
              head:"Mobile App Development",
              link1:"IOS Application Development",
              link2:"Android Apps Development",
              link3:"Windows Apps Development",
              link4:"App Support And Maintenance",
              link5:"App Marketing Services"
          },
          {
              icon:webdesign,
              head:"Website Design",
              link1:"Graphic Design",
              link2:"Logo Design",
              link3:"React Design",
              link4:"custom Web Design",
              link5:"Responsive + Website Design"
          },
          {
              icon:advertising,
              head:"Website Development",
              link1:"PHP Development",
              link2:"Drupal Development",
              link3:"Interspire Development",
              link4:"Wordspress Development",
              link5:"E-commerce Development"
          },
          {
              icon:webdeveloper,
              head:"Digital Marketing",
              link1:"Seo Consulting",
              link2:"PPC Advertising",
              link3:"Content Writing",
              link4:"Social Media Marketing",
              link5:"Online Reputation Management"
          },
          {
              icon:mobileapp,
              head:"Mobile Platform migration",
              link1:"IOS Application Development",
              link2:"Android Apps Development",
              link3:"Windows Apps Development",
              link4:"App Support And Maintenance",
              link5:"App Marketing Services"
          },
          {
              icon:mobileapp,
              head:"Mobile App Development",
              link1:"IOS Application Development",
              link2:"Android Apps Development",
              link3:"Windows Apps Development",
              link4:"App Support And Maintenance",
              link5:"App Marketing Services" 
          }
      ]

  return (
    <>
    <div className='offerings-body'>
    <div class="w-4/5 flex flex-col justify-center items-center gap-5 md:w-4/5 w-[90%] max-w-[550px]:w-[90%]">
    <div class="w-full flex flex-col justify-center items-center gap-5">
          <div className="offerings-box-header1 ">
            WHAT SERVICES <span className="text-[#ED1C24]"> WE OFFER </span></div>
          <div className="offerings-box-header2">We provide responsive web design, software development, digital marketing, SEO, e-commerce solutions, app development, and secure IT services.</div>
        </div>
        <div className="offerings-box-content">

        {
        data.map((data,index)=>(
        <OfferingsCards key={index} icon={data.icon} head={data.head} link1={data.link1} 
                             link2={data.link2} link3={data.link3} link4={data.link4} link5={data.link5}/>
            ))
          }

        </div>
        </div>
      </div>
      </>
  )
}
export default Offerings