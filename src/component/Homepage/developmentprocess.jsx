import './developmentprocess.css'
import React from 'react'
import UI from '../images/UI.svg'
import prototype from '../images/prototype.svg'
import development from '../images/development.svg'
import discover from '../images/discover.svg'
import quality from '../images/quality.png'
import deployment from '../images/deployment.svg'
import supoortm from '../../assets/fra.svg'

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
                            <div className='dp-content'>
                                <ul>
                                        <li className='UI'><img src={UI}/></li>
                                        <li><img src={prototype}/></li>
                                        <li><img src={development}/></li>
                                        <li><img src={discover}/></li>
                                        <li><img src={quality}/></li>
                                        <li><img src={deployment}/></li>
                                        <li style={{ width: "265px", height: "128px", marginTop: "9px" }}><img src={supoortm}/></li>


                                </ul>
                            </div>
                        </div>

                </div>
    </div>
    </div>
  )
}

export default Developmentprocess
