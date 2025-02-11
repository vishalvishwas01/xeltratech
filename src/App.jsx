import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Featuredservices from "./component/featuredservices";
import Header from "./component/header"
import Portfolio from "./component/portfolio";
import './component/header.css';
import Wecando from "./component/wecando"
import Testimonials from "./component/testimonials";
import Clients from "./component/clients";
// import Footer from "./component/footer";
import Chooseus from "./component/chooseus";
import Development from "./component/developmentprocess";
import Footer1 from "./component/footer1";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1">
     
      <Header/>
      <Featuredservices />
      <Chooseus/>
      <Portfolio />
      <Wecando />
      <Development/>
      <Testimonials/>
      {/* <Clients/> */}
      <Footer1/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
