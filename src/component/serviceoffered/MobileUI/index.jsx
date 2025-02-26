import React from "react";
import Topmenu from "../../commonpage/Topmenu"
import Topbar from "../../Homepage/Topbar"
import Hero from './Hero';
import Footer1  from "../../Homepage/footer1";
import AboutUI from "./AboutUI";


const MobileUI = () => {
  return (
    <div>
      <Topbar/>
      <Topmenu/>
      <Hero/>
      <AboutUI/>
      <Footer1/>
    </div>
  );
};

export default MobileUI;
