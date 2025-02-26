import { useState } from "react";
import "./App.css";
// import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import ContactUs from "./component/ContactUs/index";
<<<<<<< HEAD
<<<<<<< HEAD
import AboutUs from "./component/AboutUs";

=======
=======
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254
import AboutUs from "./component/AboutUs/index";
import Servicewedo from "./component/servicewedo/index";
import MobileUI from "./component/serviceoffered/MobileUI/index";
import HybridAppDevelopment from "./component/serviceoffered/HybridAppDevelopment/index";
<<<<<<< HEAD
>>>>>>> 74621fc823ff0cc5de4048c9388ca1a7da53ed17
=======
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254

function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="navbar1">
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
=======
    <div className="navbar1 ">
>>>>>>> 74621fc823ff0cc5de4048c9388ca1a7da53ed17
=======
    <div className="navbar1 ">
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254
         
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Servicewedo" element={<Servicewedo />} />
        <Route path="/MobileUI" element={<MobileUI />} />
        <Route path="/Servicewedo/HybridAppDevelopment" element={<HybridAppDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
