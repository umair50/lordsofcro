import "./index.css";
import Logo from "../../assets/Logo.png";
// import Cro from "../../assets/cro-1.png";
// import Cro1 from "../../assets/cro.png";
// import Cronos from "../../assets/cronos.png";

import CRO from "../../assets/cro.png";
import LOC from "../../assets/unknown.png";
import USDC from "../../assets/usdc.png";

import { Link } from "react-router-dom";

// import { Fragment } from "react";
const Index = () => {
  return (
    <div className="main-nav">
      <div className="main-nav-right">
        <div className="logo">
          <img src={Logo} alt="logo.png" className="logo-main" />
        </div>

        <div className="first-content">
          <div className="border-line">
            <img src={LOC} alt="LOC.png " className="cro-img" />
            <div className="text"> 0 </div>
          </div>

          <div className="border-line">
            <img src={CRO} alt="CRO.png " className="cro-img" />
            <div className="text"> 0 </div>
          </div>

          <div className="border-line">
            <img src={USDC} alt="USDC.png " className="cro-img" />
            <div className="text"> 0 </div>
          </div>
        </div>
      </div>

      <div className="main-nav-left">
        <div className="nav-menus">
          <a href="/" className="nav-menu">
            Home
          </a>
          <a href="/" className="nav-menu">
            Academy
          </a>
          {/* <a href="/" className="nav-menu">
            About
          </a> */}
          <Link to={"/AboutUs"}>
            <div className="nav-menu">About</div>
          </Link>
        </div>
        <div className="button">
          <button className="btn-btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
export default Index;
