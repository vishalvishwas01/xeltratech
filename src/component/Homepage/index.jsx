import { useState } from "react";

import "../../App.css";
import Featuredservices from "../Homepage/Featuredservices";
import Header from "../homepage/header";
import Portfolio from "../homepage/portfolio";
<<<<<<< HEAD
<<<<<<< HEAD
import Wecando from "../homepage/wecando"
=======
import Wecando from "../homepage/wecando";
>>>>>>> 74621fc823ff0cc5de4048c9388ca1a7da53ed17
=======
import Wecando from "../homepage/wecando";
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254
import Testimonials from "../Homepage/testimonials";
import Clients from "../homepage/clients";
// import Footer from "./component/footer";
import Chooseus from "../homepage/chooseus";
import Development from "../homepage/developmentprocess";
import Footer1 from "../homepage/footer1";
import Topbar from "../Homepage/Topbar";
<<<<<<< HEAD
<<<<<<< HEAD



=======
import Topmenu from "../commonpage/Topmenu";
>>>>>>> 74621fc823ff0cc5de4048c9388ca1a7da53ed17
=======
import Topmenu from "../commonpage/Topmenu";
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar1">
<<<<<<< HEAD
<<<<<<< HEAD
      <Topbar/>
      <Header/>
=======
      <Topbar />
      <Topmenu />
      <Header />
>>>>>>> 74621fc823ff0cc5de4048c9388ca1a7da53ed17
=======
      <Topbar />
      <Topmenu />
      <Header />
>>>>>>> 64e011bbb80f504fd4605bfd78862f90c3618254
      <Featuredservices />
      <Chooseus />
      <Portfolio />
      <Wecando />
      <Development />
      <Testimonials />
      {/* <Clients/> */}
      <Footer1 />
      {/* <Footer/> */}
    </div>
  );
}

export default Homepage;
