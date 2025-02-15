import React, { useEffect, useState, useRef } from 'react';
import './leads.css';
import lcm1 from '../images/lcm1.svg'
import lcm2t from '../images/lcm2t.svg'
import lcm2b from '../images/lcm2b.svg'
import lcm3 from '../images/lcm3.svg'

function Leads() {
    const [count, setCount] = useState({ jobs: 0, clients: 0, retention: 0, staff: 0 });
    const sectionRef = useRef(null);
    const observerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const animateNumbers = (key, max) => {
            let start = 0;
            const duration = 2000; // Animation duration in ms
            const interval = 20;
            const increment = Math.ceil(max / (duration / interval));
            
            const counter = setInterval(() => {
                start += increment;
                if (start > max) {
                    start = max;
                    clearInterval(counter);
                }
                setCount(prev => ({ ...prev, [key]: start }));
            }, interval);
        };

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                animateNumbers('jobs', 200);
                animateNumbers('clients', 150);
                animateNumbers('retention', 96);
                animateNumbers('staff', 25);
            }
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <div className='leads-body' ref={sectionRef}>
            <div className='leads-box'>
                <div className='leads-section-top'>
                    <div className='leads-section-header1'>
                        Your Vision Our Expertise Your Success Get Noticed Generate <span>Leads Dominate.</span>
                    </div>
                    <div className='leads-section-header2'>
                        Xeltratech empowers businesses with AI, cloud, and automation to scale, optimize, and dominate the digital world.
                    </div>
                </div>

                <div className='leads-section-middle'>
                    <div className='leads-section-middle-1'><img src={lcm1}/></div>
                    <div className='leads-section-middle-2'>
                        <div className='leads-section-middle-2-top'><img src={lcm2t}/></div>
                        <div className='leads-section-middle-2-bottom'><img src={lcm2b}/></div>
                    </div>
                    <div className='leads-section-middle-3'><img src={lcm3}/></div>
                </div>

                <div className='leads-section-bottom'>
                    <div className='leads-section-bottom-box'>
                        <ul>
                            <li>{count.jobs}+ <span>Job completed</span></li>
                            <li>{count.clients}+ <span>Happy clients</span></li>
                            <li>{count.retention}% <span>Client Retention</span></li>
                            <li>{count.staff}+ <span>Our Staff</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leads;
