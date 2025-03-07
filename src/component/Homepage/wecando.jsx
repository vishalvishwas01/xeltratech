import "./wecando.css";

import ServicesCard from "../cards/wecandocard";
import data from "../../arraydata/wecandoArray";





function wecando() {
    return (
        <> {/* Wrapping inside a React Fragment */}
            {/* Featured Services Start */}
        <div className="wecando">
          <div className="wecando-box">  
            <div className="wecando">
                <div className="wecando-header1">
                    <h4>What More <span> We Can </span>  Do</h4>
                </div>
                <div className="wecando-header2">
                    <h2>We offer UI/UX design, backend integration, and ongoing support to enhance your app</h2>
                </div>
                <div className="wecando-header-menu">
                    
                    {
                        data.map((data,index)=>(
                             <ServicesCard key={index} icon={data.icon} head={data.head} para={data.para}/>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
            {/* Featured Services End */}
        </>
    )
}

export default wecando;
