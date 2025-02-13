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
      <Clients/>
      <Footer1/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
