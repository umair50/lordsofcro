import React from "react";
import "./banner.css";

const Index = ({ banner }) => {
  return (
    <div className="main-container">
      <img src={banner} alt="banner.png" className="main-image-banner" />
    </div>
  );
};
export default Index;
