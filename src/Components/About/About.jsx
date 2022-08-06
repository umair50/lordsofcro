import React, { Fragment } from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instgram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import "./about.css";

const About = () => {
  return (
    <Fragment>
      <div className="main-conatiner">
        <div className="about-us-header">About</div>
        <div className="content-about-us">
          <p className="about-us-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            repellat omnis! Reiciendis, nesciunt totam deleniti pariatur ea qui
            corporis minima veniam dolorem excepturi non sunt atque repudiandae
            possimus est sint nemo? Veritatis excepturi impedit numquam
            dignissimos in tempora alias ipsa laborum eaque, porro soluta earum
            neque recusandae provident quod, voluptates quibusdam et commodi.
            Eligendi similique repellat eius nulla illum! Quod commodi fugit,
            repudiandae eos corrupti vitae dolores a ullam aliquam enim at,
            molestiae nisi dolor, minima quia tempora! Quasi ad repudiandae
            provident a soluta iste fuga odio, placeat suscipit voluptate
            voluptates sit ipsa consectetur cumque aut voluptatem incidunt
            fugiat voluptas?
          </p>
        </div>
        <div className="about-footer">
          <div className="about-footer-data">
            <div className="about-contact-info">
              Contact Us
              <hr className="hr-line-contact" />
            </div>
            <div className="email-information">abc@gmail.com</div>
          </div>
          <div className="about-footer-data1">
            <div className="about-document-info">
              Documentations
              <hr className="hr-line-doc" />
            </div>
            <div className="documents-links">
              <a href="#link" className="link">
                link1.pdf
              </a>
              <a href="#link1" className="link">
                Link2.pdf
              </a>
            </div>
          </div>
          <div className="about-footer-data2">
            <div className="social-media-information">
              Social Media
              <hr className="hr-line-social" />
            </div>
            <div className="social-media-about-us">
              <div className="facebook">
                <img src={facebook} alt="facebook.png" className="imag-size" />
              </div>
              <div className="twitter">
                <img src={twitter} alt="twitter.png" className="imag-size" />
              </div>
              <div className="instagram">
                <img src={instgram} alt="instagram.png" className="imag-size" />
              </div>
              <div className="discord">
                <img src={discord} alt="discord.png" className="imag-size" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
