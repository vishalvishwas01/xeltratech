import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Featuredservices from "./component/featuredservices";
import Header from "./component/header"
import Portfolio from "./component/portfolio";
import './component/header.css';
import Developmentprocess from "./component/Developmentprocess"
import Testimonials from "./component/testimonials";
import Clients from "./component/clients";
import Footer from "./component/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1">
      <Header/>
      <Featuredservices />
      <Portfolio />
      <Developmentprocess />
      <Testimonials/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
