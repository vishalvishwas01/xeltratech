import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About";
import Services from "./Services"
import Footer1 from "../../Homepage/footer1";
import OurServices from "./OurServices";

const GraphicDesign = () => {
  return (
    <div>
        <Topbar/>
        <Topmenu/>
        <Hero />
        <About />
        <Services />
        <OurServices />
        <Footer1/>
    </div>
  );
};

export default GraphicDesign;
