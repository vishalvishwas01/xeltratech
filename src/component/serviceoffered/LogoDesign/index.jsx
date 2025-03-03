import React from "react";
import Topmenu from "../../commonpage/Topmenu";
import Topbar from "../../Homepage/Topbar";
import Hero from "./hero";
import About from "./About"
import Aspect from "./Aspect"
import Footer1 from "../../Homepage/footer1";

const HybridAppDevelopment = () => {
  return (
    <div>
      <Topbar/>
      <Topmenu/>
      <Hero />
      <About />
      <Aspect />
      <Footer1/>
    </div>
  );
};

export default HybridAppDevelopment;
