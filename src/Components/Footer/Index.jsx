import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/facebook.webp";
import Twitter from "../../assets/twitter.webp";
import Instagram from "../../assets/Instagram.webp";
import Discord from "../../assets/discord.webp";
import "./footer.css";
const Index = () => {
  return (
    <Fragment>
      <div className="footer-main">
        <div className="footer-copy-right">
          <span className="icon-style">&#169;</span>Copyright 2022
        </div>
        <div className="social-media-icon">
          <div className="twitter-icon">
            <img src={Twitter} alt="twitter.png" className="image-sizes" />
          </div>
          <div className="pinterst-icon">
            <img src={Instagram} alt="instagram.png" className="icon-space" />
          </div>
          <div className="discord-icon">
            <img src={Discord} alt="discrod.png" className="icon-space" />
          </div>
          <div className="facebook-icon">
            <img src={Facebook} alt="facebook.png" className="icon-space" />
          </div>
        </div>

        <div className="company-info">
          POWERED BY{" "}
          <Link to="/" className="link-element">
            BLOCTAK
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
