import React from 'react'
import Hero from './Hero'
import Topbar from '../component/Homepage/Topbar'
import Topmenu from '../component/commonpage/Topmenu'
import OurPackage from './OurPackage'
import Footer1 from "../component/Homepage/footer1";

const PackageMain = () => {
  return (
    <div className=' overflow-hidden '>
        <Topbar/>
        <Topmenu/>
        <Hero/>
        <OurPackage/>
          <Footer1/>
    </div>
  )
}

export default PackageMain