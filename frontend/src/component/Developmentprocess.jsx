import "./Developmentprocess.css";
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




function Featuredservices() {
    return (
        <> {/* Wrapping inside a React Fragment */}
            {/* Featured Services Start */}
    <div className="featuredservices-body1">

          <div className="featuredservices-box">  
            <div className="featuredservices">
                <h4 className="featuredservices-header">OUR DEVELOPMENT PROCESS</h4>
                <div className="featuredservices-header-text">
                    <ul className="featuredservices-header-text1"><li>Our development process</li></ul>
                    <div className="featuredservices-header-inline">
                        <span className="featuredservices-header-text1">& Business Criteria</span>
                    </div>
                </div>

                <div className="featuredservices-header-menu">
                    <ul>
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
                    </ul>
                </div>
            </div>
            </div>
    </div>
            {/* Featured Services End */}

        </>
    )
}

export default Featuredservices;
