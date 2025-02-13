import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Featuredservices from "./component/homepage/featuredservices";
import Header from "./component/homepage/header"
import Portfolio from "./component/homepage/portfolio";
import Wecando from "./component/homepage/wecando"
import Testimonials from "./component/Homepage/testimonials";
import Clients from "./component/homepage/clients";
// import Footer from "./component/footer";
import Chooseus from "./component/homepage/chooseus";
import Development from "./component/homepage/developmentprocess";
import Footer1 from "./component/homepage/footer1";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Homepage from "./component/Homepage";
import ContactUs from "./component/ContactUs/index";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1">
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
         
        </Routes>
    </div>
  );
}

export default App;
