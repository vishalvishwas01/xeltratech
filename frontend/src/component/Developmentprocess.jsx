import './developmentprocess.css'

import React from 'react'
import UI from './images/UI.svg'
import prototype from './images/prototype.svg'
import development from './images/development.svg'
import discover from './images/discover.svg'
import quality from './images/quality.png'
import deployment from './images/deployment.svg'
import supoortm from './images/supoort.png'

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
                                <img src={UI}/>
                                <img src={prototype}/>
                                <img src={development}/>
                                <img src={discover}/>
                                <img src={quality}/>
                                <img src={deployment}/>
                                <img src={supoortm} />

                            </div>
                        </div>

                </div>
    </div>
    </div>
  )
}

export default Developmentprocess
