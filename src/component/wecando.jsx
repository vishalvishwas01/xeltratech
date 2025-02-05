import "./wecando.css";
import mobileapp from './images/mobile-app-development.svg';
import react from './images/react.svg';
import flutter from './images/flutter.svg';
import ServicesCard from "./cards/wecandocard";




function wecando() {

    const data=[
        {
            icon:mobileapp,
            head:"Mobile App Development",
            para:"We don't just bring the ‘wow effect’ into Mobile apps but focus on developing design ideas that focus on meeting customer satisfaction in the mobile-first world."
        },
        {
            icon:react,
            head:"React Native Mobile App Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" 
        },
        {
            icon:mobileapp,
            head:"Hybrid Mobile App Development",
            para:"We don't just bring the ‘wow effect’ into Mobile apps but focus on developing design ideas that focus on meeting customer satisfaction in the mobile-first world."
        },
        {
            icon:flutter,
            head:"Flutter Native Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:mobileapp,
            head:"Mobile Platform migration",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
        },
        {
            icon:mobileapp,
            head:"Enterprise Mobile App Development",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"    
        }
    ]
    return (
        <> {/* Wrapping inside a React Fragment */}
            {/* Featured Services Start */}
        <div className="wecando">
          <div className="wecando-box">  
            <div className="wecando">
                <div className="wecando-header1">
                    <h4>What More <span> We Can </span> Do</h4>
                </div>
                <div className="wecando-header2">
                    <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error sit</h2>
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
