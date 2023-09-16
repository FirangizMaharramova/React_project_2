import React from "react";
import "../App.css";
import Ice from "./iceland.jpeg";
import Italy from "./italy.jpeg";
import Dubai from "./dubai.jpg";
import Pategonia from "./pategonia.jpg";

function Discover() {
  return (
    <div className="discover">
     <div className="discover_heads"><h3>Join Our Adventures</h3>
      <h1>Discover the world with us</h1></div> 
      <div className="imgs">
        <div className="img_box">
        <img src={Ice} alt="" />
          <h2>Iceland</h2>
          <p>Discover</p>
        </div>
        <div className="img_box">
        <img src={Italy} alt="" />
          <h2>Iceland</h2>
          <p>Discover</p>
        </div>
        <div className="img_box">
        <img src={Dubai} alt="" />
          <h2>Iceland</h2>
          <p>Discover</p>
        </div>
        <div className="img_box">
        <img src={Pategonia} alt="" />
          <h2>Iceland</h2>
          <p>Discover</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
