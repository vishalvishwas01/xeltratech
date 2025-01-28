import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Featuredservices from "./component/featuredservices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Featuredservices />
    </div>
  );
}

export default App;
