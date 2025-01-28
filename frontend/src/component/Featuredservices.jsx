import "./style.css";
import app from './images/app.svg';
import IT from './images/IT.svg';
import ITC from './images/ITC.svg';
import QA from './images/QA.svg';
import UX from './images/UX.svg';
import web from './images/web.svg';


function Featuredservices () {
    return (

        <div class="featuredservices">
            <h4 class="featuredservices-header">OUR FEATURED SERVICES</h4>
            <div class="featuredservices-header-text ">
                <ul class="featuredservices-header-text1"><li>We Provide Great IT &</li></ul>
                <div class="featuredservices-header-inline">
                        <span class="featuredservices-header-text1">Business Solutions</span>
                        <a href="#" class="custom-button">VIEW MORE SERVICES</a>
        </div>

            </div>

            <div class="featuredservices-header-menu">
                <ul>
                    <li class="app-development-menu">
                        <img class="app-icon" src={app}/>
                    <div class="app-development-head">App Development</div>
                    <div class="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>

                    <li class="IT-development-menu">
                        <img class="app-icon" src={IT}/>
                        <div class="IT-development-head">IT Development</div>
                    <div class="IT-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>

                    <li class="app-development-menu">
                        <img class="app-icon" src={ITC}/>
                        <div class="app-development-head">IT Solution</div>
                    <div class="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>

                    <li class="app-development-menu">
                        <img class="app-icon" src={QA}/>
                        <div class="app-development-head">QA & Testing</div>
                    <div class="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>

                    <li class="app-development-menu">
                        <img class="app-icon" src={UX}/>
                        <div class="app-development-head">UX / UI Design</div>
                    <div class="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>

                    <li class="app-development-menu">
                        <img class="app-icon" src={web}/>
                        <div class="app-development-head">Web Development</div>
                    <div class="app-development-para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                    </li>


                </ul>
            </div>


        </div>
    )
}

export default Featuredservices