import "./style.css";
import app from '../images/app.svg';
import IT from '../images/IT.svg';
import ITC from '../images/ITC.svg';
import QA from '../images/QA.svg';
import UX from '../images/UX.svg';
import web from '../images/web.svg';
// import qualified from '../images/qualified.svg';
// import shield from '../images/shield.svg';
// import innovative from '../images/innovative.svg';
// import support from '../images/support.svg';
// import whychooseusbanner from '../images/whychooseusbanner.jpg';
import ServicesCard from "../cards/ServicesCard";





function Featuredservices() {

    const data=[
        {
            icon:app,
            head:"App Development",
            para:"At XeltraTech, we create high-quality mobile applications tailored to your needs, ensuring a seamless user experience."
        },
        {
            icon:IT,
            head:"IT Development",
            para:"We provide comprehensive IT solutions designed to enhance efficiency, security, and growth for your business." 
        },
        {
            icon:ITC,
            head:"IT Solution",
            para:"Our IT consultants provide expert guidance to help businesses navigate the complexities of technology."
        },
        {
            icon:QA,
            head:"QA & Testing",
            para:"We provide comprehensive QA and testing services to ensure your software meets the highest standards of quality."
        },
        {
            icon:UX,
            head:"UX / UI Design",
            para:"We specialize in UX/UI design that enhances user satisfaction and drives engagement with your digital products."
        },
        {
            icon:web,
            head:"Web Development",
            para:"We specialize in creating dynamic and responsive websites that drive business success and enhance user engagement."    
        }
    ]
    return (
        <> {/* Wrapping inside a React Fragment */}
            {/* Featured Services Start */}

          <div className="featuredservices-box">  
            <div className="featuredservices">
                <div></div>
                <h4 className="featuredservices-header">OUR FEATURED SERVICES</h4>
                <div className="featuredservices-header-text">
                    <ul className="featuredservices-header-text1"><li>We Provide Great IT &</li></ul>
                    <div className="featuredservices-header-inline">
                        <span className="featuredservices-header-text1">Business Solutions</span>
                        <a href="#" className="custom-button">VIEW MORE SERVICES</a>
                    </div>
                </div>

                <div className="featuredservices-header-menu">
                    
                    {
                        data.map((data,index)=>(
                             <ServicesCard key={index} icon={data.icon} head={data.head} para={data.para}/>
                        ))
                    }
                </div>
            </div>
            </div>
            {/* Featured Services End */}
        </>
    )
}

export default Featuredservices;
