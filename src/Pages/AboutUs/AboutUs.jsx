import React, { Fragment } from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner";
import "./aboutUs.css";
import banner from "../../assets/aboutUs.webp";
const AboutUs = () => {
  return (
    <Fragment>
      <div className="about-us-home-page">
        <Banner banner={banner} />
        <About />
      </div>
    </Fragment>
  );
};

export default AboutUs;
