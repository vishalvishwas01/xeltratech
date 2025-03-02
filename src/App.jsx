import { useState } from "react";
import "./App.css";
// import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import ContactUs from "./component/ContactUs/index";
import AboutUs from "./component/AboutUs/index";
import Servicewedo from "./component/servicewedo/index";
import MobileUI from "./component/serviceoffered/MobileUI/index";
import HybridAppDevelopment from "./component/serviceoffered/HybridAppDevelopment/index";
import "./index.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1 ">
         
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Servicewedo" element={<Servicewedo />} />
        <Route path="/Servicewedo/MobileUI" element={<MobileUI />} />
        <Route path="/Servicewedo/HybridAppDevelopment" element={<HybridAppDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;