import { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";
import ServicesCard from "../cards/ServicesCard";

import app from '../images/app.svg';
import IT from '../images/IT.svg';
import ITC from '../images/ITC.svg';
import QA from '../images/QA.svg';
import UX from '../images/UX.svg';
import web from '../images/web.svg';

const icons = {
    "App Development": app,
    "IT Development": IT,
    "IT Solution": ITC,
    "QA & Testing": QA,
    "UX / UI Design": UX,
    "Web Development": web
};

function Featuredservices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('https://xt-backend.onrender.com/homepage/get-cards');
                if (response.data.success) {
                    const latestData = response.data.data[0]?.cards || [];
                    setServices(latestData);
                }
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    return (
        <> {/* Wrapping inside a React Fragment */}
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
                        {services.map((service, index) => (
                            <ServicesCard key={service._id} icon={icons[service.title]} head={service.title} para={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featuredservices;