import "./style.css";
import app from './images/app.svg';
import IT from './images/IT.svg';
import ITC from './images/ITC.svg';
import QA from './images/QA.svg';
import UX from './images/UX.svg';
import web from './images/web.svg';
import qualified from './images/qualified.svg';
import shield from './images/shield.svg';
import innovative from './images/innovative.svg';
import support from './images/support.svg';
import whychooseusbanner from './images/whychooseusbanner.jpg';
import ServicesCard from "./cards/ServicesCard";




function Featuredservices() {

    const data=[
        {
            icon:app,
            head:"App Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:IT,
            head:"IT Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" 
        },
        {
            icon:ITC,
            head:"IT Solution",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:QA,
            head:"QA & Testing",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:UX,
            head:"UX / UI Design",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:web,
            head:"Web Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"    
        }
    ]
    return (
        <> {/* Wrapping inside a React Fragment */}
            {/* Featured Services Start */}

          <div className="featuredservices-box">  
            <div className="featuredservices">
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
