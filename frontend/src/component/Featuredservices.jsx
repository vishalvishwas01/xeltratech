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
                    {/* <ul>
                        <li className="app-development-menu">
                            <img className="app-icon" src={app} alt="App Development"/>
                            <div className="app-development-head">App Development</div>
                            <div className="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>

                        <li className="IT-development-menu">
                            <img className="app-icon" src={IT} alt="IT Development"/>
                            <div className="IT-development-head">IT Development</div>
                            <div className="IT-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>

                        <li className="app-development-menu">
                            <img className="app-icon" src={ITC} alt="IT Solution"/>
                            <div className="app-development-head">IT Solution</div>
                            <div className="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>

                        <li className="app-development-menu">
                            <img className="app-icon" src={QA} alt="QA & Testing"/>
                            <div className="app-development-head">QA & Testing</div>
                            <div className="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>

                        <li className="app-development-menu">
                            <img className="app-icon" src={UX} alt="UX / UI Design"/>
                            <div className="app-development-head">UX / UI Design</div>
                            <div className="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>

                        <li className="app-development-menu">
                            <img className="app-icon" src={web} alt="Web Development"/>
                            <div className="app-development-head">Web Development</div>
                            <div className="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        </li>
                    </ul> */}
                    {
                        data.map((data,index)=>(
                             <ServicesCard key={index} icon={data.icon} head={data.head} para={data.para}/>
                        ))
                    }
                </div>
            </div>
            </div>
            {/* Featured Services End */}

            {/* Why Choose Us Start */}
            <div className="choose-body">
                <div className="choose-body-box">
                    <h4 className="choose-body-header1">OUR BENEFITS</h4>
                    <h2 className="choose-body-header2">Why Should Choose Us?</h2>
                    <div className="choose-body-why-main-box">
                    <div className="choose-body-why-box">
                        <div className="choose-body-why">
                                <ul>
                                    <li className="qualified-box">
                                        <div>
                                        <img src={qualified}/> <div className="qualified-expert">Qualified Expert</div>
                                        </div>
                                        <div className="qualified-expert-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                    </li>

                                    <li className="highly-recommended-box">
                                        <div>
                                        <img src={shield}/> <div className="highly-recommended">Qualified Expert</div>
                                        </div>
                                        <div className="highly-recommended-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                    </li>

                                    <li className="qualified-box">
                                    <div>
                                        <img src={innovative}/> <div className="qualified-expert">Qualified Expert</div>
                                        </div>
                                        <div className="qualified-expert-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                    </li>

                                    <li className="qualified-box">
                                    <div>
                                        <img src={support}/> <div className="qualified-expert">Qualified Expert</div>
                                        </div>
                                        <div className="qualified-expert-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                                    </li>
                                </ul>
                            </div>
                            
                    </div>
                    
                    </div>
                </div>
                <div className="whychoosebanner"><img src={whychooseusbanner}/></div>
                
            </div>
            {/* Why Choose Us End */}
        </>
    )
}

export default Featuredservices;
