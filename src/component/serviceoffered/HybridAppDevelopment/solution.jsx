import React from 'react'
import "./solution.css"
import SolutionCard from '../../cards/SolutionCard'
import images from "./images";

function solution() {
    const data = [
        {
            icon1: images.Crossplatform,
            icon2: images.Crossplatformcolor,
            logo: images.logo1,
            para: "Cross Platform App Development",
        },
        {
            icon1: images.hybridapptesting,
            icon2: images.Crossplatformcolor,
            logo: images.logo2,
            para: "Hybrid App Testing",
        },
        {
            icon1: images.seamlessapp,
            icon2: images.Crossplatformcolor,
            logo: images.logo3,
            para: "Seamless App Migration & Enhancement",
        },
        {
            icon1: images.uiux,
            icon2: images.Crossplatformcolor,
            logo: images.logo4,
            para: "UI/UX Design Services",
        },
        {
            icon1: images.innovation,
            icon2: images.Crossplatformcolor,
            logo: images.logo5,
            para: "Tech Strategy & Innovation",
        },
        {
            icon1: images.support,
            icon2: images.Crossplatformcolor,
            logo: images.logo6,
            para: "Support & Maintenance",
        }
          ]
  return (
    <>
    <div className='solution-body'>
        <div className="solution-box">
            <div className="solution-box-header">
                <div className='solution-box-header1'>Innovative <span className='text-[#ED1C24]'>Hybrid App</span> Solutions</div>
                <div className='solution-box-header2'>Lorem ipsum dolor sit amet consectetur. Faucibus libero velit sit lorem felis justo est. Consequat arcu malesuada quis cursus augue integer ac risus. Sem arcu adipiscing adipiscing scelerisque i</div>
            </div>
            <div className="solution-box-line"></div>

            <div className="solution-box-content">

            {data.map((data,index)=>(<SolutionCard key={index} icon1={data.icon1} icon2={data.icon2} logo={data.logo} para={data.para}/>))}
                
            </div>
        </div>
      
    </div>
    </>
  )
}

export default solution
