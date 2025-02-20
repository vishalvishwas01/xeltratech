import React from "react";

import Hero from "./Hero";
import Topmenu from "../commonpage/Topmenu";
import Topbar from "../Homepage/Topbar";
import Offerings from "./Offerings";
import Footer1 from "../homepage/footer1";

const servicewedo = () => {
  return (
    <div>
      <Topbar />
      <Topmenu />
      <Hero />
      <Offerings />
      <Footer1/>
    </div>
  );
};

export default servicewedo;
