import "./style.css";
import "./chooseus.css";
import qualified from './images/qualified.svg';
import shield from './images/shield.svg';
import innovative from './images/innovative.svg';
import support from './images/support.svg';
import whychooseusbanner from './images/whychooseusbanner.jpg';





function chooseus() {

  
    return (
        <> 
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

export default chooseus;
