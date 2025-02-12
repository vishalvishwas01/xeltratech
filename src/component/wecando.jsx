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
            para:"We develop high-performance mobile apps with React Native for a seamless cross-platform experience on iOS and Android." 
        },
        {
            icon:mobileapp,
            head:"Hybrid Mobile App Development",
            para:"We don't just bring the ‘wow effect’ into Mobile apps but focus on developing design ideas that focus on meeting customer satisfaction in the mobile-first world."
        },
        {
            icon:flutter,
            head:"Flutter Native Development",
            para:"We specialize in Flutter development, creating high-performance, visually appealing apps for both iOS and Android from a single codebase."
        },
        {
            icon:mobileapp,
            head:"Mobile Platform migration",
            para:"We specialize in Flutter development, creating high-performance, visually appealing apps for both iOS and Android from a single codebase."
        },
        {
            icon:mobileapp,
            head:"Enterprise Mobile App Development",
            para:"We create robust mobile apps to boost productivity and streamline operations for your organization."    
        }
    ]
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
