import './developmentprocess.css'
import React from 'react'
import design from '../Homepage/images/design.svg'
import prototype from '../Homepage/images/prototype.svg'
import development from '../Homepage/images/deployment.svg'
import discover from '../Homepage/images/data-discovery.svg'
import quality from '../Homepage/images/coding.svg'
import deployment from '../Homepage/images/deployment.svg'
import supportm from '../Homepage/images/support.svg'

function Developmentprocess() {
  return (
    <div className='dp'>
    <div className='dp-body'>
                <div className='dp-header-box'>
                        <div className='dp-header'>
                                <div className='dp-header1'>OUR FEATURED SERVICES</div>
                                <div className='dp-header2'>Our development process & Business Criteria</div>
                        </div>
                </div>
                <div className='dp-content-body'>
                        <div className='dp-content-box'>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={design}/></div>
                                <div className='dp-content-box1-head'>UI/UX Designer</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={prototype}/></div>
                                <div className='dp-content-box1-head'>Prototype</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={development}/></div>
                                <div className='dp-content-box1-head'>Development</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={discover}/></div>
                                <div className='dp-content-box1-head'>Discover</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={quality}/></div>
                                <div className='dp-content-box1-head'>Quality Assurance</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={deployment}/></div>
                                <div className='dp-content-box1-head'>Deployment</div>
                            </div>
                            <div className='dp-content-box1'>
                                <div className='dp-content-box1-image'><img src={supportm}/></div>
                                <div className='dp-content-box1-head'>Support & Maintenance</div>
                            </div>
                            
                        </div>
                </div>
    </div>
    </div>
  )
}

export default Developmentprocess
