
import React from 'react'
import Leads from './Leads'


import React from "react";
import Leads from "./Leads";
import Story from "./story";
import Values from "./values";
import Footer_about from "../Homepage/footer1";
import Clients_about from "../Homepage/clients";
import Topmenu from "../commonpage/Topmenu";
import Hero from "./hero";
import Topbar from "../Homepage/Topbar";


const AboutUs = () => {
  return (
    <div>

        <Leads/>
      <Topbar />
      <Topmenu />
      <Hero />
      <Leads />
      <Story />
      <Values />
      {/* <Clients_about /> */}
      <Footer_about />
    </div>
  );
};


export default AboutUs;


